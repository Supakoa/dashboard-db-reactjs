import axios from "axios";

export default class HttClient {
  async POSTProto(url, request) {
    try {
      return await this.#httpTemplate(await axios.post(url, request));
    } catch (err) {
      throw err;
    }
  }

  async GETProto(url = "") {
    try {
      return await this.#httpTemplate(await axios.get(url));
    } catch (err) {
      throw err;
    }
  }

  async PUTProto(url, config = {}) {
    try {
      return await this.#httpTemplate(await axios.put(url, config));
    } catch (err) {
      throw err;
    }
  }

  async CREATEProto(config) {
    try {
      return await this.#httpTemplate(axios.create(config));
    } catch (err) {
      throw err;
    }
  }

  async #httpTemplate(webService) {
    try {
      if (webService) {
        const { name } = webService;
        if (name && name === "Error") {
          throw Error(webService);
        }
        return webService;
      } else {
        throw Error(webService);
      }
    } catch (err) {
      throw err;
    }
  }
}
