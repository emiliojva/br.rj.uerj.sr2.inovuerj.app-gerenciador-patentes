

import "jquery-mask-plugin";

export class Form {

  private boxFormTokenId:string;
  private _element: HTMLFormElement;
  private method: string;
  private action: string;
  private form_data:FormData;
  private input_hidden_id: FormInputValue;

  constructor(boxFormTokenId:string){
    this.boxFormTokenId = boxFormTokenId;
    this.init();
  }
  
  protected init() {
    this._element = (document.querySelector(`#${this.boxFormTokenId} form`) || document.getElementById(this.boxFormTokenId) ) as HTMLFormElement; ;
  }

  get element(): HTMLFormElement {
    return this._element;
  }

  public setMethod(method:string): this {
    this.method = method;
    this._element.setAttribute('method',method);
    return this;
  }

  public setAction(action:string): this {
    this.action = action;
    this._element.setAttribute('action',action);
    return this;
  }

  public setFormData(form_data: FormData): this {
    this.form_data = form_data;
    return this;
  }

  public getMethod(): string {
    return this.method;
  }

  public getAction(): string {
      return this.action;
  }

  public getFormData(): FormData {
      return this.form_data;
  }

  public setInputHiddenId(input_name:string , input_value?: number): this {
    
    if(input_value > 0){
      this.setInputByName(input_name, input_value.toString() );
    } else {

      /**
       * Validate if a edit form has value filled
       */
      input_value = Number( this.getInputByName(input_name).value ) || null;

    }
    
    this.input_hidden_id = {
      name  : input_name,
      value : input_value || 0,
    };

    return this;
  }

  public getInputHiddenId(): FormInputValue {
    return this.input_hidden_id;
  }

  public focusIn(input_name:string)
  {
    const elem: HTMLElement = this._element.querySelector(`${input_name}`);
    elem.focus();
  }

  public setInputByName(input_name:string, input_value:string ){
    const result:any = document.getElementsByName(input_name);
    if(result.length==1){
      result[0].value = input_value;
    } else {
      throw new Error('Duplicidade de elemento input');
    }
    
    return this;
  }

  public getInputByName(input_name:string ): HTMLInputElement {
    const result:any = document.getElementsByName(input_name);
    if(result.length==1){
      return result[0];
    } else {
      throw new Error('Duplicidade de elemento input');
    }
  }

  public onSubmit( callback: (formData: FormData,form: HTMLFormElement) => void ): this {
    
    const $contextForm = this;

    this._element.onsubmit = function(e){
      e.preventDefault();
      e.stopPropagation();
      const formTarget = e.currentTarget as HTMLFormElement;
      const form_data = new FormData(formTarget);

      $contextForm.setFormData(form_data);
      
      callback(form_data,formTarget)
    }

    return this;

  }

}


export interface FormInputValue {
  name:string,value?:number
}