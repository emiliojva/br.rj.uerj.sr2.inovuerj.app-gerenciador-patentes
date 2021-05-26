

import "jquery-mask-plugin";

export class Form {

  private boxFormTokenId:string;
  private htmlFormElement: HTMLFormElement;
  private method: string;
  private action: string;
  private form_data:FormData;
  private input_hidden_id: number;

   


    


  constructor(boxFormTokenId:string){
    this.boxFormTokenId = boxFormTokenId;
    this.init();
  }
  
  protected init() {
    this.htmlFormElement = (document.querySelector(`#${this.boxFormTokenId} form`) || document.getElementById(this.boxFormTokenId) ) as HTMLFormElement; ;
  }

  public setMethod(method:string): this {
    this.method = method;
    this.htmlFormElement.setAttribute('method',method);
    return this;
  }

  public setAction(action:string): this {
    this.action = action;
    this.htmlFormElement.setAttribute('action',action);
    return this;
  }

  public setFormData(form_data: FormData): this {
    this.form_data = form_data;
    return this;
  }
  
  public getInputHiddenId(): number {
    return this.input_hidden_id;
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

  public setInputHiddenId(input_hidden_id: number): this {
    this.input_hidden_id = input_hidden_id;
    return this;
  }

  public onSubmit( callback: (formData: FormData,form: HTMLFormElement) => void ): this {
    
    const $contextForm = this;

    this.htmlFormElement.onsubmit = function(e){
      e.preventDefault();
      const formTarget = e.currentTarget as HTMLFormElement;
      const form_data = new FormData(formTarget);

      $contextForm.setFormData(form_data);
      
      callback(form_data,formTarget)
    }

    return this;

  }

}