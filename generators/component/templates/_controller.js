export default class <%=directiveName%>Controller {
  static get UID(){
    return "<%=directiveName+"Controller"%>"
  }

  /* @ngInject */
  constructor() {
    this.title = "<%= "I am a "+ directiveName+" component"%>"
  }
}
