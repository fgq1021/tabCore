import tabServerController from "../core/tab.server.controller";
import Model from "./types.server.model";
import { keyTypes } from "./types.keys";

export class typesServerController extends tabServerController {
  public className = "types";
  public Model = Model;
  public keys = keyTypes;

  constructor(config) {
    super(config);
  }


  async getKeys() {
    return this.keys;
  }
}
