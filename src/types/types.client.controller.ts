import { tabClientController } from "../core/tab.client.controller";

export class typesClientController extends tabClientController {
  public className = "types";
  public apiUrl: string;
  public keys = [];


  constructor(config) {
    super(config, "types");
  }

  async getKeys() {
    if (!this.keys.length)
      this.keys = await this.req.get(this.api + "keys").then(res => res.data);
    return this.keys;
  }
}
