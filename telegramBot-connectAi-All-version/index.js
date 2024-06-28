import dotenv from "dotenv";
import TelegramBot from "node-telegram-bot-api";
dotenv.config();

const TOKEN = process.env.TELEGRAM_TOKEN || "YOUR_TELEGRAM_BOT_TOKEN";
const options = {
  polling: true,
};

const bot = new TelegramBot(TOKEN, options);

/////////////////////////////////////
// keyboard
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `✪ OutLand Store 
    ♠︎ Chuyên Cung Cấp dịch vụ ♠︎:
    💰Gói Tạo Bot Telegram : 
      - Bot thường (3 chức năng) : 280k (sale)
      - Bot tích hợp ChatGPT-model : 700k
      (bao gồm acc chatGPT đã ĐK model)
      - Bot quản lý Group : TL
    (80-150k/1 chức năng bổ sung code)
    (Tùy vào độ phức tạp của chức năng)
    💰VPN - OPENVPN - Đa server: Giá bằng 2 tô phở
    💰VPS - Đa server : Giá bằng 2 tô phở

    BotDemo: t.me/jasdhkfjahskjdfhk_bot
    TELE: t.me/outland1231
    ZALO: 0523064332
    FB: www.facebook.com/profile.php?id=100034364812370 
    `,
    {
      reply_markup: {
        keyboard: [["Giá VPS", "Giá OpenVPN"], ["Giá Bot Telegram"]],
      },
    }
  );
});

bot.on("message", (msg) => {
  const condition1 = "Giá Bot Telegram";
  const condition2 = "Giá VPS";
  const condition3 = "Giá OpenVPN";

  if (msg.text.indexOf(condition1) === 0) {
    bot.sendMessage(
      msg.chat.id,
      ` ♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥

        <b>✚ Bot Basic (3 chức năng): 
          <i>280k (bảo hành 2 tuần) SALES</i>
          <i>Thêm 1 chức năng + 80-150k/1c</i>
          <i>(Giá thêm chức năng tùy thuộc vào độ phức tạp của yêu cầu)</i>
        </b>

        <b>✚ Bot Tích Hợp ChatGPT không acc (model GPT3.5):
          <i>350k (bảo hành 2 tuần)</i>
          <i>Thêm acc để chạy model 450k/1tháng</i>
        </b>

        <b>✚ Bot Tích Hợp ChatGPT không acc (model GPT4):
          <i>450k (bảo hành 2 tuần)</i>
          <i>Thêm acc để chạy model 450k/1tháng</i>
        </b>

        <b>✚ Bot Tích Hợp ChatGPT có acc (model GPT3.5):
          <i>700k (bảo hành 2 tuần)</i>
          <i>Đã bao gồm acc chạy model 1 tháng</i>
        </b>

        <b>✚ Bot Tích Hợp ChatGPT có acc (model GPT4):
          <i>800k (bảo hành 2 tuần)</i>
          <i>Đã bao gồm acc chạy model 1 tháng</i>
        </b>

        Chạy trên server VPS thì em chỉ thu thêm phí thuê VPS thôi ạ !
        ♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥︎♥
        `,
      { parse_mode: "HTML" }
    );
  }

  if (msg.text.indexOf(condition2) === 0) {
    bot.sendMessage(
      msg.chat.id,
      `
      ♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝

        <b>✚ VPS server khu vực châu á:
          <i>75k/1tháng (server tùy chọn) </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>

        <b>✚ VPS server khu vực âu mỹ:
          <i>80k/1tháng (server tùy chọn) </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>

        <b>✚ VPS server khu khác:
          <i>55k/1tháng (server tùy chọn) </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>
        ♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝
      `,
      {
        parse_mode: "HTML",
      }
    );
  }

  if (msg.text.indexOf(condition3) === 0) {
    bot.sendMessage(
      msg.chat.id,
      `
      ♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝

        <b>✚ OpenVPN server khu vực châu á:
          <i>75k/1tháng (server tùy chọn - Unlimit)  </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>

        <b>✚ OpenVPN server khu vực âu mỹ:
          <i>80k/1tháng (server tùy chọn - Unlimit) </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>

        <b>✚ OpenVPN server khu khác:
          <i>55k/1tháng (server tùy chọn - Unlimit) </i>
          <i>☺︎ Bảo hành 1 tuần, 1-1 trong quá trình dùng ☺︎</i>
        </b>
        ♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝♝
      `,
      {
        parse_mode: "HTML",
      }
    );
  }
});
/////////////////////////////////////
