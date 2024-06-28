import fs from "fs";
import axios from "axios";
import path from "path";
import stream from "stream";
import { Telegraf } from "telegraf";

const bot = new Telegraf("7167228942:AAGfYLb_Hk0wa70wpXhZWckJQhT3TdhwD-c");

bot.start(async (ctx) => {
  ctx.reply(`Chào mừng đến OpenAI`);
});

bot.on("message", async (ctx) => {
  if (ctx.update.message.photo || ctx.update.message.caption) {
    const photo = ctx?.message?.photo;
    const caption = ctx?.update?.message?.caption || "";
    const fileId = photo[photo.length - 1]?.file_id;

    try {
      const file = await ctx.telegram.getFile(fileId);
      const fileUrl = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
      const response = await axios({
        method: "GET",
        url: fileUrl,
        responseType: "arraybuffer", // Đọc dữ liệu như một mảng byte
      });
      const imageBase64 = Buffer.from(response.data, "binary").toString(
        "base64"
      );
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Content-Disposition": "attachment",
        },
      };
      const data = {
        content: caption,
        base64: imageBase64,
      };

      /* Using 1 if backend and client TELEGRAM in 1 folder */
      // const savePath = path.join(process.cwd(), "static", "anh.jpeg");
      // await fs.writeFileSync(savePath, imageBase64, "base64");
      // console.log("kết thúc lưu");

      /* Using 2 if backend and client TELEGRAM other 1 folder */
      await axios
        .post("http://localhost:9000/upload-image", data, config)
        .then(async (response) => {
          const data = await response.data;
          console.log("AI trả lời rằng: ", data?.message);
          return await ctx.reply(data?.message);
        });
    } catch (error) {
      console.error("Đã xảy ra lỗi:", error);
      return await ctx.reply(`Lỗi tải file`);
    }
  }

  if (ctx.update.message.text) {
    const prompt = ctx.update.message.text;
    const header = {};
    const data = {
      content: prompt,
    };
    axios
      .post("http://localhost:9000/", data, header)
      .then(async (response) => {
        const data = await response.data;
        console.log("AI trả lời rằng: ", data);
        return await ctx.reply(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
