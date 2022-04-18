import {tabUnit, tabModule} from "../core/tab.module";

export class types extends tabModule {
    public className = "types";
    public unit;
    public keys;


    constructor(config, controller) {
        super(config, controller);
        const _this = this;
        this.unit = class Type extends tabUnit {
            public className = "Type";
            public dataStructure;
            public api = () => {
                return _this;
            };

            constructor(el) {
                super(el);
                this.$init()
            }

            async getType(user?): Promise<any> {
                if (this.type)
                    return super.getType(user)
                return this.api().get(this._id, user);
            }

            getStructure(key) {
                const place = this.api().parsePlaceString(key)
                if (place.key)
                    key = place.key
                for (let i in this.dataStructure) {
                    if (this.dataStructure[i].name === key)
                        return this.dataStructure[i]
                }
                return false
            }
        };
    }

    async getKeys() {
        this.keys = await this.api.getKeys();
        return this.keys;
    }

    async listMy(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
        let list;
        if (user) {
            Object.assign(finder, {owner: user._id, type: undefined});
            list = await this.api.list(finder, sort, limit, skip);
        } else
            list = await this.api.listMy(finder, sort, limit, skip);
        return this.assignList(list);
    }


    async find(finder: object = {}, sort: object = {}, limit: number = 50, skip: number = 0, user?): Promise<any> {
        finder["type"] = undefined
        return this.rightsOfList(await this.api.list(finder, sort, limit, skip), user);
    }
}
