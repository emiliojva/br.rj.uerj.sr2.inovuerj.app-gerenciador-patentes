import { ControllerPage } from '../../../models/controller-page';
import EventManager from '../../../services/event-manager';

import axios from "axios";
import * as $ from "jquery";
import "jquery-mask-plugin";
import { Form, FormInputValue } from '../../_forms/form';
import { ApiService } from '../../../services/api.service';


export class CreatePage extends ControllerPage {

  /**
   * Deps
   */
  private eventManager: EventManager; 
  private apiService: ApiService

  /**
   * Forms
   */
  private formBasicInformation:Form;
  private formRegistrationNumber:Form;

  /**
   * Form Tokens IDs
   */
  static boxFormBasicInformationTokenId:string = 'box-form-basic-information';
  static boxFormRegistrationNumberTokenId:string = 'box-form-registration-number';
  
  constructor(){
     super();
  }

  protected init() 
  {

    this.apiService = new ApiService();

    this.masks();

    /**
     * starter flow instruction for handle "Basic Information" Form
     */
    this.formBasicInformationConstruct();

    /**
     * starter flow instruction for handle "Registration Number" Form
     */
     this.formRegistrationNumberConstruct();
  
  }

  private formBasicInformationConstruct(): void 
  {
    /**
     * Basic Information Form Instance
     */
    this.formBasicInformation = new Form(CreatePage.boxFormBasicInformationTokenId);
    this.formBasicInformation
      .setMethod('post')
      .setAction('/admin/ativo')
      .onSubmit( (formData: FormData) => {
        this.apiService.postToIntellectualAssetStore(formData).then( (response) => {
          this.formBasicInformation.setInputHiddenId( 'data[intellectual_assets][id]' , response.id );
          window.location.replace(`/admin/ativo/${response.id}/edit`);
        });
      });
  }

  private formRegistrationNumberConstruct(): void 
  {
    /**
     * Registration Number Form Instance
     */
    this.formRegistrationNumber = new Form(CreatePage.boxFormRegistrationNumberTokenId);
    this.formRegistrationNumber
      .setMethod('post')
      .setAction('/admin/ativo')
      .onSubmit( (formData: FormData) => {

        const input_id: FormInputValue = this.formBasicInformation.getInputHiddenId() || null;

        if(!input_id){
          alert('Form Registration Number required!');
          this.formBasicInformation.focusIn('#nome_ativo');
          return false;
        }

        /**
         * Setter input[name] and input[value] to Form do update
         */
        formData.set( input_id.name , input_id.value.toString() );

        /**
         * Post data to api persister 
         */
        this.apiService.postToIntellectualAssetStore(formData);
        
      });
  }

  /**
   * Initialize input masks plugin for the current page
   */
  private masks(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00');
  }

  public httpPost(url:string, form_data:FormData, options?:{})
  {
    
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