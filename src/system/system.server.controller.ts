import tabServerController from "../core/tab.server.controller";
import Model from "./system.server.model";
import {join, dirname} from "path";
import * as fs from "fs/promises";
import * as SparkMD5 from "spark-md5";

export class systemServerController extends tabServerController {
    public className = "system";
    public Model = Model;

    constructor(config) {
        super(config);
    }

    async upload(file, id, place?: string, key?: string, p?, user?) {
        const el = await this.module.get(id, user), rights = this.module.rights(el, user);
        if (rights.write()) {
            const filename = file.originalname,
                index = filename.lastIndexOf("."),
                suffix = filename.substring(index + 1, filename.length);
            let md5, storeAs = "/", url;
            if (index !== 32) {
                const spark = new SparkMD5.ArrayBuffer();
                spark.append(file.buffer);
                md5 = spark.end();
                storeAs += md5 + "." + suffix;
            } else {
                storeAs += filename;
            }
            const storePath = join(this.tab.rootPath, `/local${storeAs}`),
                data = new Uint8Array(file.buffer);
            const parentPath = dirname(storePath);
            try {
                await fs.access(parentPath);
            } catch (e) {
                await fs.mkdir(parentPath, {recursive: true});
            }
            await fs.writeFile(storePath, data);
            url = `/local${storeAs}`;

            if (url) {
                if (place || key) {
                    el[place][key] = url;
                    return el.save(user);
                }
                return url;
            }
            return Promise.reject({status: "FORBIDDEN", message: "无法存储该文件，请检查服务器设置"});
        } else return Promise.reject({
            status: "FORBIDDEN",
            message: "您没有修改" + this.className + " #" + el._id + " 的权限"
        });
    }

    getFile(url) {
        return fs.readFile(join(this.tab.rootPath, url), 'utf-8')
    }
}
