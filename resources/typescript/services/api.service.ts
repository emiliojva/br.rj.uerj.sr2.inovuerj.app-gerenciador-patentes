import {HttpClientRequest} from './abstract/http-client-request';

export class ApiService extends HttpClientRequest {

  private _ip: string;

  constructor() {
    /**
     * Dependency Injection Base Construtor
     */
    super();
  }
  
  postToIntellectualAssetStore(form_data: FormData): Promise<any>{
    
    /**
     * Generating data post to server
     */
    let form_data_id:number = Number( form_data.get('data[intellectual_assets][id]') );

    form_data.set('_ajax','true');

     /**
     * URLs with endpoints for post/update
     */
     let form_action_url  = (form_data_id == 0) ? '/admin/ativo' : `/admin/ativo/${form_data_id}/edit`;

     return this.post(form_action_url,form_data,{}).then( (response:any) => {

       /**
       * Capture data from the API server
       */
       const intellectual_asset = response._body;

       

     });

  }
  
}