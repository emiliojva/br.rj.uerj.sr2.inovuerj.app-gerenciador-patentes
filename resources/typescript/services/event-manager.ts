/**
* Conceito de orientação a eventos(listeners)
*/
export default class EventManager {
  
  /**
   * Indexable Types
   * - Representacao shortHand de um objeto específico(iteravel), com indice associativo(eventName:string) definido.
   * Neste indice comporta SOMENTE, um array com itens do tipo ListernerInterface
   * 
   * Qualquer outra representacao de objeto gera um erro
   * 
   */
  private listenersShortHand: { [eventName: string]: Array<ListenerInterface> } = {}; // representacao shortHand de um Indexable Types
  private listeners: Listeners = {};

  /**
   * Empilha funcoes/procedures para cada ouvinte
   * @param eventName 
   * @param callable 
   */
  addListener(eventName: string, callable: ListenerInterface )
  {
      /**
       * Representacao de um listener
       * Cada posicao associativa/token do objeto recebe um array de funcoes
       * this.listerners['cantar'] = [func1,func2,func3]; 
       * ex:  {
       *          'mostrar'=>function(){ 
       *              mostrarAlgo() 
       *          } 
       *      }
       */
      if( !(this.listeners[eventName] instanceof Array) ){
          this.listeners[eventName] = [];
      }
      
      this.listeners[eventName].push(callable);
  }

  /**
   * Executa evento nomeado
   * @param eventName 
   */
  runEvent(eventName: string)
  {
      // console.log(this.listeners[eventName])
      if( !(this.listeners[eventName] instanceof Array) ){
          this.listeners[eventName] = [];
      }
      
      for(let callable of this.listeners[eventName]){
          callable();
      }
  }

}



interface ListenerInterface {
  ():void;
}

interface Listeners {
  [eventName: string]: Array<ListenerInterface> 
}