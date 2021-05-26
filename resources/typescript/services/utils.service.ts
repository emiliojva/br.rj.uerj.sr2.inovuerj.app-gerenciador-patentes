export class UtilsService {

  public static camelize(value: string){
    let str = value.toLowerCase()
    let re = /(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g
    return str.replace(re, s => s.toUpperCase())
  }

}