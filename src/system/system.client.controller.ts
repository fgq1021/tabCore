import { tabClientController } from "../core/tab.client.controller";



export class systemClientController extends tabClientController {
  public className = "system";
  public apiUrl: string;
  public config

  constructor(config) {
    super(config, "system");
  }


  async getConfig() {
    if (!this.config)
      this.config = await this.req.get(this.api + "config").then(res => res.data);
    return this.config;
  }
}
