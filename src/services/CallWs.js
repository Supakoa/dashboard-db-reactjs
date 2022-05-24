import HttClient from "./HttpClient";
import { environmets } from "../../environments/environment";

export default class CallWsService {
  constructor() {
    this.httpClient = new HttClient();
    this.SERVICE_URL = environmets.ENDPOINT;
  }

  async getCheckPool() {
    return await this.httpClient.GETProto(this.SERVICE_URL + "/db?timeSleep=0");
  }

  async postCheckPool(request = {}) {
    return await this.httpClient.POSTProto(this.SERVICE_URL + "/db", request);
  }
}
