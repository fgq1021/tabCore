import { tabUnit, tabModule } from "../core/tab.module";

export class elements extends tabModule {
  public className = "elements";
  public unit;

  constructor(config, controller) {
    super(config, controller);

    const _this = this;
    this.unit = class Element extends tabUnit {
      public className = "Element";
      public api = () => {
        return _this;
      };

      constructor(el) {
        super(el);
        this.$init();
      }
    };
  }


  //从TabOS2进行数据格式升级，升级时需要前往element.service.ts，将 parents: [String] 改为 parents: []
  async updateFromTabOS2() {
    function pureData(d) {
      return JSON.parse(JSON.stringify(d));
    }

    function updateEl(el) {
      const parents = pureData(el.parents), childrenElement = pureData(el.children).Element, children = {};
      for (let i in parents) {
        const p = parents[i];
        parents[i] = p.el + "." + p.place + "." + p.key;
      }
      for (let i in childrenElement) {
        const c = childrenElement[i];
        if (c.list && c.list.length) {
          for (let i in c.list) {
            c.list[i] = "element-" + c.list[i];
          }
          children[c.place + "." + c.key] = c.list;
        }
        if (c.el)
          children[c.place + "." + c.key] = "element-" + c.el;
      }
      console.log(parents, children);
      delete el.goodsInfo;
      delete el.manager;
      delete el.subIndex;
      el.parents = parents;
      el.children = children;
      return el;
    }

    console.log("开始从TabOS2进行升级");
    const els = await this.api.Model.find({});
    console.log(els.length);
    for (let el of els) {
      console.log(el.title);
      const _el = updateEl(el);
      await _el.save();
    }
  }

  async updateBtoDot() {
    function pureData(d) {
      return JSON.parse(JSON.stringify(d));
    }

    function updateEl(el) {
      const parents = pureData(el.parents);
      for (let i in parents) {
        parents[i] = parents[i].replace(/-/g, ".");
      }
      el.parents = parents;
      return el;
    }

    console.log("开始将-更新为.");
    const els = await this.api.Model.find({});
    console.log(els.length);

    for (let el of els) {
      console.log(el.title);
      const _el = updateEl(el);
      console.log(_el);
      await _el.save();
    }
  }
}
