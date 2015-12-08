import controller from '<%= "./"+directiveName+".controller" %>'

export default function<%=directiveName%>(){
  return {
    restrict: '<%_ if(bindToElement) %>E<%_ }if(bindToAttribute){%> A <%_ } %>',
    scope: {

    },
    template: require("<%="./"+directiveName+".tpl.html" %>"),
    controller: controller.UID,
    controllerAs: "vm",
    bindToController: true,
    link: (scope, el, attr, ctrl) => {

    }
  }
}
