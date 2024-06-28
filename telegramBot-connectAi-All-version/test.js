import axios from "axios";
import FormData from "form-data";
import fs from "fs";

const url1 = "http://localhost:9000/";
const url2 = "http://localhost:9000/upload-image";

const formData = new FormData();
formData.append("image", fs.createReadStream("icon.png"));
const header = {
  // Lấy header cho multipart form data
  headers: {
    ...formData.getHeaders(),
  },
};

const data = {
  content: "xin chào",
};

// Gửi yêu cầu POST bằng Axios
const sendData = (url, data, header = {}) => {
  axios
    .post(url, data, header)
    .then(async (response) => {
      const data = await response.data;
      console.log("AI trả lời rằng: ", data);
    })
    .catch((error) => {
      console.error(error);
    });
};

sendData(url1,data)
// sendData(url2, formData, header);
