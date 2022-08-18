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
    // console.log(JSON.stringify(el))
    const parents = [], pushParents = [];
    for (let i in el.parents) {
      const { id } = this.tab.parsePlaceString(el.parents[i]);
      const pel = await this.get(id);
      if (pel)
        parents.push(el.parents[i]);
    }
    el.parents = parents;
    for (let i in el.pushParents) {
      const pel = await this.tab.get(el.pushParents[i]);
      if (this.rights(pel, user).write())
        pushParents.push(el.pushParents[i]);
    }
    el.pushParents = pushParents;
    const newEl = this.assign(await this.api.create(el, user));
    // if (newEl.created)
    newEl.created();
    return newEl;
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
    try {
      const me = await this.api.authMe();
      return this.tab.assignMe(me);
    } catch (e) {
      if (e.status === "NOT_FOUND" || e.statusCode === 401) {
        await this.tab.clearMe();
      }
      return Promise.reject(e);
    }
  }

  async getAuth(id: string) {
    return await this.api.findOne({ _id: id });
  }
}
