export class CookieService {

  constructor() {
  }


  public set(cname, cvalue, exdays) {
    this._setCookie(cname, cvalue, exdays);
  }

  public get(cname) {
    return this._getCookie(cname);
  }

  /**
   * get or read cookie
   * https://stackoverflow.com/questions/34298133/angular-cookies
   * @param cname
   */
  private _getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  /**
   * url https://codeofaninja.com/2018/09/rest-api-authentication-example-php-jwt-tutorial.html
   * @param cname
   * @param cvalue
   * @param exdays
   */
  private _setCookie(cname:any, cvalue:any, exdays:any) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + d.toUTCString();
    const customCookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    document.cookie = customCookie;
  }

}
