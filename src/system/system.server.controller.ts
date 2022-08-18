import tabServerController from "../core/tab.server.controller";
import Model from "./system.server.model";

export  class systemServerController extends tabServerController {
  public className = "system";
  public Model = Model;

  constructor(config) {
    super(config);
  }

  async getConfig(){

  }
}
