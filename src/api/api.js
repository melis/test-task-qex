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

  login(login, password) {
    return new Promise((res, rej) => {
      if (login === "admin" && password === "admin") {
        setTimeout(
          () =>
            res({
              name: "Some body",
              phone: "+79581119458",
              email: "xx@xx.ru",
              image:
                "https://img.kupigolos.ru/hero/5ff0227fe8e57.jpeg?p=bh&s=8b6e1403d65ed5fdbc76310cff36dbde",
            }),
          1000
        );
      } else rej("неправильный логин или пароль!");
    });
  }
}

const myApi = new Api();
export default myApi;
