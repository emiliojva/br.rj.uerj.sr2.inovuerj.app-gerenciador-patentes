import { ControllerPage } from '../../../models/controller-page';
import EventManager from '../../../services/event-manager';

import axios from "axios";
import * as $ from "jquery";
import "jquery-mask-plugin";
import { Form } from './_forms/form';
import { ApiService } from '../../../services/api.service';


export class CreatePage extends ControllerPage {

  private eventManager: EventManager; 
  private apiService: ApiService

  static boxFormBasicInformationTokenId:string = 'box-form-basic-information';
  
  constructor(){
     super();
  }

  protected init() {

    this.apiService = new ApiService();

    const $contextPage = this;

    this.masks();

    /**
     * starter flow instruction for handle "Basic Information" Form
     */
    this.formBasicInformation();
  
  }

  private formBasicInformation(): void 
  {
    /**
     * Basic Information Form Instance
     */
    const formBasicInformation = new Form(CreatePage.boxFormBasicInformationTokenId);
    formBasicInformation.onSubmit( (form: HTMLFormElement) => {
      this.apiService.postToIntellectualAssetStore(form);
    });

  }

  /**
   * Initialize input masks plugin for the current page
   */
  private masks(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00');
  }

  public httpPost(url:string, form_data:FormData, options?:{}){
    
    const OPTIONS = { 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
        'X_REQUESTED_WITH': "xmlhttprequest"
      }
    };

    return axios.post(url,form_data,OPTIONS).then( (response:any) => {

      /**
      * Http Response 200
      */

      /**
      * Axios retorna headers, status code and data(with _body server data)
      */
      const dataResponse = response.data;

      /**
      * Modal Alert
      */
      alert(dataResponse.msg); // response default from server

      /**
       * Check error. Prevent flow of execution
       */
      let error = dataResponse.error || false;
      if(error){
        throw error; // detailed error
      }

      return dataResponse;

    }).catch( (error) =>{ 
      /**
      * HTTP 400 to 500 response errors
      */
      console.log(error);
    });
 
  }
  
}