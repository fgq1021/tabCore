import {tabUnit, tabModule} from "../core/tab.module";

export class system extends tabModule {
    public className = "system";
    public unit;

    constructor(config, controller) {
        super(config, controller);

        const _this = this;
        this.unit = class System extends tabUnit {
            public className = "System";
            public api = () => {
                return _this;
            };

            constructor(el) {
                super(el);
                this.$init();
            }
        };
    }


    rights(el, user?) {
        if (this.tab.token)
            user = this.tab.me;
        let isRoot = false, isOwner = false, isAnonymous = !user, isClient = this.tab.isClient;
        if (user) {
            if (!isClient && user._id === this.tab.config.users.root._id) {
                isRoot = true;
            } else
                isRoot = user.isRoot;
        }

        return {
            isRoot, isOwner, isAnonymous, isClient,
            all() {
                const rights = {read: false, write: false, isRoot, isOwner: isRoot};
                if (isRoot) {
                    rights.read = true;
                    rights.write = true;
                    return rights;
                }
                return rights;
            },
            read() {
                return isRoot;
            },
            write() {
                return isRoot;
            }
        };
    }


    async getConfig(user?) {
        return this.api.getConfig();
    }

    getFile(url, user?) {
        return this.api.getFile(url, user);
    }
}
