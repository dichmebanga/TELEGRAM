import fs from "fs";
import axios from "axios";
import { Telegraf } from "telegraf";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyBMjY9cA-xBojdBkiJPM0j-0m-YRoqLcqE");
const bot = new Telegraf("7151306954:AAEPSZfd1cvty4dLQKTuJLv8zZaAxIvj4x8");

bot.start(async (ctx) => {
  ctx.reply(`Chào mừng đến ChatGPT`,{
    reply_markup:{
      keyboard:[[{text}]]
    }
  });
});

bot.on("message", async (ctx) => {
  if (ctx.update.message.photo || ctx.update.message.caption) {
    const photo = ctx?.message?.photo;
    const caption = ctx?.update?.message?.caption || "";
    const fileId = photo[photo.length - 1]?.file_id;
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
      const file = await ctx.telegram.getFile(fileId);
      const fileUrl = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
      const response = await axios({
        method: "GET",
        url: fileUrl,
        responseType: "arraybuffer", // Đọc dữ liệu như một mảng byte
      });

      // Chuyển mảng byte thành dạng base64
      const imageBase64 = Buffer.from(response.data, "binary").toString(
        "base64"
      );

      // Tạo phần dữ liệu trực tiếp từ base64 mà không cần lưu vào ổ đĩa
      const imagePart = fileToGenerativePart(imageBase64, "image/png");

      // Thực hiện sinh nội dung
      const result = await model.generateContentStream([caption, imagePart]);
      const text = await result.response.text();

      // Hàm để chuyển base64 thành phần dữ liệu cho Generative Model
      function fileToGenerativePart(base64Data, mimeType) {
        return {
          inlineData: {
            data: base64Data,
            mimeType,
          },
        };
      }

      return await ctx.reply(text);
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      return await ctx.reply(`Lỗi tải file`);
    }
  }

  if (ctx.update.message.text) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = ctx.update.message.text;
    const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();
    return await ctx.reply(text);
  }
});

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
