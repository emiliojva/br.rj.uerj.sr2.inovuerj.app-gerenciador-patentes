
import axios from "axios";

import * as $ from "jquery";
import "jquery-mask-plugin";

export class Form  {

  private boxFormTokenId:string;
  private htmlFormElement: HTMLFormElement;

  constructor(boxFormTokenId:string){
    this.boxFormTokenId = boxFormTokenId;
    this.init();
  }
  
  protected init() {
    this.htmlFormElement = (document.querySelector(`#${this.boxFormTokenId} form`) || document.getElementById(this.boxFormTokenId) ) as HTMLFormElement; ;
  }

  onSubmit( callback: (form: HTMLFormElement) => void ){

    this.htmlFormElement.onsubmit = function(e){
      e.preventDefault();
      callback(e.currentTarget as HTMLFormElement)
    }

  }

}