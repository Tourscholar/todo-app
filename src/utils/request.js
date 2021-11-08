import axios from "axios";

const instance = axios.create({
  baseUrl: "http://localhost:3000",
  withCredentials: true,
  timeout: 1000,
});

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(
        (response) => {
          resolve(response.data);
        },
        (err) => {
          reject(err);
        }
      );
  });
};
