import tabServerController from "../core/tab.server.controller";
import Model from "./elements.server.model";

export  class elementsServerController extends tabServerController {
  public className = "elements";
  public Model = Model;

  constructor(config) {
    super(config);
  }
}
