import { UtilsService } from '../services/utils.service';

export abstract class ControllerPage
{
  constructor(){
    // console.log(`ControllerPage constructor ${this.constructor.name}`);
    this.init();
  }

  protected abstract init(param?: object) : void;
  
  public hello(){
    console.info(this.constructor.name+ ' Loaded') ;
  }
}