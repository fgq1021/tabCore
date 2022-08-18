import { tabClientController } from "../core/tab.client.controller";


export class usersClientController extends tabClientController {
  public className = "users";
  public authUrl;

  constructor(config) {
    super(config, "users");
    if (config.apiUrl)
      this.authUrl = config.apiUrl + "auth/";
  }

  async create(el) {
    return this.tab.assignMe(await super.create(el));
  }

  async authMe() {
    try {
      return (await this.req.get(this.authUrl, this.apiConfig())).data;
    } catch (e) {
      return Promise.reject(e.response.data);
    }
  }

  async authPassword(tel: string, password: string): Promise<any> {
    return this.tab.assignMe((await this.req.post(this.authUrl + "login", { tel, password })).data);
  }
}
