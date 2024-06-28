import { Telegraf } from "telegraf";
import { pipeline, env, AutoTokenizer } from "@xenova/transformers";

const bot = new Telegraf("7167228942:AAGfYLb_Hk0wa70wpXhZWckJQhT3TdhwD-c");

bot.start(async (ctx) => {
  ctx.reply(`Chào mừng đến OpenAI`);
});

bot.on("message", async (ctx) => {
  //   if (ctx.update.message.photo || ctx.update.message.caption) {
  //     const photo = ctx?.message?.photo;
  //     const caption = ctx?.update?.message?.caption || "";
  //     const fileId = photo[photo.length - 1]?.file_id;

  //     try {
  //       const file = await ctx.telegram.getFile(fileId);
  //       const fileUrl = `https://api.telegram.org/file/bot${bot.token}/${file.file_path}`;
  //       const response = await axios({
  //         method: "GET",
  //         url: fileUrl,
  //         responseType: "arraybuffer", // Đọc dữ liệu như một mảng byte
  //       });
  //       const imageBase64 = Buffer.from(response.data, "binary").toString(
  //         "base64"
  //       );

  //     } catch (error) {
  //       console.error("Đã xảy ra lỗi:", error);
  //       return await ctx.reply(`Lỗi tải file`);
  //     }
  //   }

  if (ctx.update.message.text) {
    const prompt = ctx.update.message.text;
    const generator = await pipeline("text-generation", "Xenova/Qwen1.5-0.5B-Chat");
    const messages = [
      { role: "system", content: `You are a helpful assistant.` },
      { role: "user", content: prompt },
    ];
    const output = await generator(messages, {
      max_new_tokens: 128,
      do_sample: false,
    });

    console.log(1111111, output[0]?.generated_text[2]);

    await ctx.reply(`vai trò: ${output[0]?.generated_text[2]?.role}`);
    return await ctx.reply(output[0]?.generated_text[2]?.content);
  }
});

bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
