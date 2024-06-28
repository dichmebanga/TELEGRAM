import ollama from "ollama";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 9000;

app.use(bodyParser.json({ limit: "100mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));

app.post("/", async (req, res) => {
  const postData = req.body.content;
  res.setHeader("Content-Type", "text/plain");

  const response = await ollama.chat({
    model: "llava:13b-v1.6",
    messages: [{ role: 'user', content: postData }],
    stream: true,
  });
  for await (const part of response) {
    res.write(part.message.content);
  }
  res.end();
});

// Đoạn mã xử lý khi nhận request post chứa hình ảnh
app.post("/upload-image", async (req, res) => {
  try {
    const data = await ollama.chat({
      model: "llava:13b-v1.6",
      messages: [
        {
          role: "user",
          content: req.body.content || "",
          images: [req.body.base64], // using 1 get base64
          // images: ["./static/anh.jpeg"],// using 2 get file
        },
      ],
    });
    res.status(200).json({ success: true, message: data.message.content });
  } catch (error) {
    console.log(error);
  }
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`App đang chạy tại http://localhost:${port}`);
});
