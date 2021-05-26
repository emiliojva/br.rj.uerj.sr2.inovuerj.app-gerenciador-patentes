import { ControllerPage } from '../models/controller-page';

export class HomePage extends ControllerPage {
  constructor(){
     super();
  }

  protected init() {
    console.log(this);
  }
  
}