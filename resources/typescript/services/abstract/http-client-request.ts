/**
 * http dependency
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from "axios";

export abstract class HttpClientRequest {

  // protected serverUri: string = 'http://inovuerj.sr2.uerj.br/desenvolvimento/secti';
  serverUri:string = "http://127.0.0.1";
  protected apiUriVersion: string = 'api/v1';
  private http:AxiosInstance;
  

  public httpOptions: AxiosRequestConfig = {
    headers: null
  };

  constructor() {
    this.http = axios;
    this.initHttpOptions();
  }

  /**
   *  HttpOptions fornecido ao httpClient(get,post,put e etc)
   *
   *  - HttpHeaders
   *  The instances of the new HttpHeader class are immutable objects.
   *  Invoking class methods will return a new instance as result.
   *  So basically, you need to do the following:
   */
  private initHttpOptions() {

    // let headers = new Headers({
    //   'Accept': 'application/json',
    //   'Content-Type': 'application/json;charset=UTF-8',
    //   'X_REQUESTED_WITH': "xmlhttprequest"
    // });

    let headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      'X_REQUESTED_WITH': "xmlhttprequest"
    };

    /**
     * Headers
     */
    this.httpOptions.headers = headers;
    return headers;

  }

  /**
   * Wrapper do metodo GET(verbo http) capturando o endpoint completo
   * @param endpoint
   */
  get(endpoint:string, params?:FormData, httpOptions?:{}): Promise<any>{

    return this.http.get(endpoint,this.httpOptions).then( (response:any) => {

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

  /**
   * Wrapper do metodo POST(verbo http) capturando o endpoint completo
   * @param endpoint
   * @param params
   * @param httpOptions
   */
  post(endpoint:string, params:FormData, httpOptions?:{}): Promise<any>{

    const options = Object.assign(httpOptions,this.httpOptions);

    return this.http.post(endpoint,params,options).then( (response:any) => {

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

  private endpoint(url: string, params?: Array<any>): string {

    let uriParam = '';

    if (params !== undefined) {
      uriParam = '/' + params.join('/');
    }

    return `${this.serverUri + '/' + this.apiUriVersion + '/' + url + uriParam}`;

  }

  public setTokenBearer(token: string) {
    this.httpOptions.headers.set('Authorization', `Bearer ${token}`);
    return this.httpOptions;
  }

}

interface HttpOptions {

  headers?: {} ; // Headers

  params?: {};

}


