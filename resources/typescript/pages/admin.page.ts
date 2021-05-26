import { ControllerPage } from '../models/controller-page';

export class AdminPage extends ControllerPage {
  constructor(){
     super();
  }

  protected init() {
    console.log(this);
  }
  
}