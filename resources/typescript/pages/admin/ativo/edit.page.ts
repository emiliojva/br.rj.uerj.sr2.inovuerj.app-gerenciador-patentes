import { ControllerPage } from '../../../models/controller-page';
import EventManager from '../../../services/event-manager';

import axios from "axios";
import * as $ from "jquery";
import "jquery-mask-plugin";
import { Form, FormInputValue } from '../../_forms/form';
import { ApiService } from '../../../services/api.service';

// You can specify which plugins you need
import 'bootstrap';


export class EditPage extends ControllerPage {

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
  private formAuthor:Form;

  /**
   * Form Tokens IDs
   */
  static boxFormBasicInformationTokenId:string = 'box-form-basic-information';
  static boxFormRegistrationNumberTokenId:string = 'box-form-registration-number';
  static boxFormAuthorTokenId:string = 'box-form-author';
  static boxFormAuthorModalTokenId:string = 'box-form-author-modal';
  static boxFormAuthorAttatchTokenId:string = 'box-form-author-attatch-modal';
  static formIdToken:string = 'data[intellectual_assets][id]';
  
  constructor(){
     super();
  }

  /**
   * Start Flow
   */
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
    
    /**
     * starter flow instruction for handle "Registration Number" Form
     */
     this.formAuthorConstruct();

  }

  private formBasicInformationConstruct(): void 
  {
    /**
     * Basic Information Form Instance
     */
    this.formBasicInformation = new Form(EditPage.boxFormBasicInformationTokenId);
    
    
    this.formBasicInformation
      .setInputHiddenId( EditPage.formIdToken ) // if not passed value will try get value from form filled
      .setMethod('post')
      .setAction('/admin/ativo') //  post to URL localhost/admin/ativo
      .onSubmit( (formData: FormData) => { // set function when form action submitted
        this.apiService.postToIntellectualAssetStore(formData).then( (response) => {

          /***
           * Set id only create Form
           */
          if(!this.formBasicInformation.getInputHiddenId().value){
            this.formBasicInformation.setInputHiddenId( 'data[intellectual_assets][id]' , response.id );
            window.location.replace(`/admin/ativo/${response.id}/edit`);
          }
          
        });
      });
  }

  private formRegistrationNumberConstruct(): void 
  {
    /**
     * Registration Number Form Instance
     */
    this.formRegistrationNumber = new Form(EditPage.boxFormRegistrationNumberTokenId);
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

  private formAuthorConstruct(): void 
  {

    const modal:any = document.querySelector(`#${EditPage.boxFormAuthorModalTokenId}`);

    const dropArea = document.querySelector('.dropzone');
    const fileSelector = document.querySelector('.dropzone #file-selector');

    console.log(fileSelector);
    fileSelector.addEventListener('change', ( event: any ) => {
      const fileList = event.target.files;
      console.log(fileList);
      listFiles(fileList);
    });

    dropArea.addEventListener('dragover', (event: Event & { dataTransfer?: DataTransfer } ) => {
      event.stopPropagation();
      event.preventDefault();
      // Style the drag-and-drop as a "copy file" operation.
      event.dataTransfer.dropEffect = 'copy';
    });
    
    dropArea.addEventListener('drop', (event: Event & { dataTransfer?: DataTransfer }) => {
      event.stopPropagation();
      event.preventDefault();
      const fileList:FileList = event.dataTransfer.files;
      listFiles(fileList);
    });

    function listFiles(fileList:FileList){
      
      const ul = dropArea.querySelector('.dropzone-list ul')
      // Read the File objects in this FileList.
      for (var i = 0; i<fileList.length; i++) {
        const f = fileList[i];
        const p = document.createElement('p');
        p.innerHTML = `${f.name} <span>x</span>`;
        ul.appendChild(p);
      }     
      console.log(fileList);

    }

    
    /**
     * Registration Number Form Instance
     */
    this.formAuthor = new Form( EditPage.boxFormAuthorModalTokenId );

    /**
     * capture asset_id of formBasicInformation
     */
    const asset_id = this.formBasicInformation.getInputHiddenId().value;

    this.formAuthor
      .setMethod('post')
      .setAction(`/admin/ativo/${asset_id}/author`)
      .onSubmit( (formData: FormData) => {
        
        const input_id: FormInputValue = this.formBasicInformation.getInputHiddenId() || null;
        if(!input_id){
          alert('Form Registration Number required!');
          this.formBasicInformation.focusIn('#nome_ativo');
          return false;
        }

        /**
         * Post data to api persister 
         */
        this.apiService.postToIntellectualAssetAuthorStore(asset_id,this.formAuthor).then( (result)=>{
          const new_author = result;
          const tr_new_author = `
            <tr>
              <th scope="row">${new_author.id}</th>
              <td>${new_author.individual.name}</td>
              <td>${new_author.titration}</td>
              <td>${new_author.academic_unit}</td>
            </tr>`;

          /**
           * Append text TR as Node into table>tbody 
           */
          $('.box-list-author')
            .show()
            .find(' > table > tbody').append(tr_new_author);

          /**
           * Cleaner form
           */
          this.formAuthor.element.reset();

          /**
           * hide modal
           */
          $(modal).modal('hide');
        });
        
      });

    this.modalAttachButtonSave(modal, this.formAuthor);
    

  }

  /**
   * Attatch button save into Modal Form. 
   * To fix submit form modal bootstrap
   * @param modal 
   * @param formDom 
   */
  private modalAttachButtonSave(modal:any, formDom: Form)
  {
    /**
     * Fetch button save into modal-footer
     */
    const button_save = modal.querySelector('.button-save') as HTMLButtonElement;

    /**
     * Dynamic creation of the button[class='button-modal-save'] to fire submit form
     */
    const button = document.createElement('button');
    button.setAttribute('class','menu button-modal-save');
    button.style.display = 'none';

    /**
     * Insert button node into Modal Form
     */
    formDom.element.append(button);


    /**
     * On Click button in footer, fires hidden button[class='button-modal-save']
     */
    button_save.onclick = function(e){
      button.click();
    }
  }

  /**
   * Initialize input masks plugin for the current page
   */
  private masks(){
    $('.cpf').mask('000.000.000-00', {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00');
    $('.phone').mask('(00)000000000');
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