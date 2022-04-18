import { tabUnit, tabModule } from "../core/tab.module";

export class users extends tabModule {
  public className = "users";
  public unit;

  constructor(config, controller) {
    super(config, controller);

    const _this = this;
    this.unit = class User extends tabUnit {
      public className = "User";
      public username?: string;
      public api = () => {
        return _this;
      };

      constructor(el) {
        super(el);
        this.$init();
      }
    };
  }

  async create(el, user?) {
    const parents = [];
    for (let i in el.parents) {
      const pid = el.parents[i].split(".")[0];
      const pel = await this.get(pid);
      if (pel)
        parents.push(el.parents[i]);
    }
    el.parents = parents;
    return this.api.create(el, user);
  }

  async authPassword(tel: string, password: string) {
    return await this.api.authPassword(tel, password);
  }

  getSmsCode(tel) {
    return this.api.getSmsCode(tel);
  }

  authSmsCode(tel, code, device, userInfo) {
    return this.api.authSmsCode(tel, code, device, userInfo);
  }

  async authMe() {
    return this.api.authMe();
  }

  async getAuth(id: string) {
    return await this.api.findOne({ _id: id });
  }
}
