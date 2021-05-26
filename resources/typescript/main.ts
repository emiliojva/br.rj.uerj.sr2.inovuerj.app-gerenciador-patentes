import EventManager from './services/event-manager'
import { ControllerPage } from './models/controller-page';
import { UtilsService } from './services/utils.service';

// import * as $ from "jquery";
// declare var jquery: any;
// declare var $: any;


// export const RegisteredControllers: any = {
//   PublicController
// }

export class Main {

  constructor(private eventManager: EventManager)
  {
    this.init();
  }

  private init()
  {

    let route_current: string  = document.querySelector('html').dataset.activeRoute || null;

    if(route_current){

      let promiseControllerPage = this.getControllerPage(route_current);

      promiseControllerPage
        .then( (instanceControllerPage: ControllerPage) => {
          instanceControllerPage.hello();
        }).catch( e => console.log(e))
    }

  }

  /**
   * 
   * @param route_current string
   * @returns Promise|null
   */
  private getControllerPage(route_current:string){

    // document.addEventListener('DOMContentLoaded', (event) => {
    //   console.log('DOM fully loaded and parsed - DOCUMENT');
    // });

    /**
     * string caminho completo da Page
     * @exemplo /pages/admin/
     * @param module_path 
     */
    let module_path:string  = route_current.replace(/([a-zA-Z]+)$/,'');

    /**
     * Nome da classe do modulo
      @exemplo create.page.ts em /pages/admin/ 
     * @param module_page string
     */
    let module_page:string  = route_current.match(/[a-zA-Z]+$/)[0] || null;

    if(module_page) {

      let moduleClasseName = UtilsService.camelize(module_page) + 'Page';

      module_page += '.page';
      module_path += module_page

      const page_import = import(`./pages${module_path}`);

      return page_import
        .then( (module) => {
          let instance = new module[moduleClasseName](this.eventManager); // new RegisteredControllers[controller]();
          return instance;
        })
        .catch( (e)=>{ return Promise.reject( `Crie uma classe ${moduleClasseName} no caminho de pasta ./pages${module_path} para manipular essa pagina .\n :) ` + e); });
    }
  
  }
 
}

new Main( new EventManager() );