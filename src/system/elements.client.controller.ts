import { tabClientController } from "../core/tab.client.controller";



export class elementsClientController extends tabClientController {
  public className = "elements";
  public apiUrl: string;

  constructor(config) {
    super(config, "elements");
  }

}
