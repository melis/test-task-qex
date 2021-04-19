import axios from "axios";

class Api {
  async getNews() {
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
      return res.data;
    } catch (e) {
      return {
        error: JSON.stringify(e.response.data),
      };
    }
  }

  async login(login, password) {
    const res = new Promise((res, rej) => {
      if (login === "admin" && password === "admin") {
        setTimeout(
          () =>
            res({
              name: "Some body",
              like: 5,
              image:
                "https://img.kupigolos.ru/hero/5ff0227fe8e57.jpeg?p=bh&s=8b6e1403d65ed5fdbc76310cff36dbde",
            }),
          1000
        );
      } else rej("неправильный логин или пароль!");
    });
    return res;
  }
}

const myApi = new Api();
export default myApi;
