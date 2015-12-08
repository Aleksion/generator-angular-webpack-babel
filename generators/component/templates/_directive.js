import controller from '<%= "./"+directiveName+".controller" %>'

export default function <%=directiveName%>(){
  return {
    restrict: '<% if(bindToElement) {%>E<% }if(bindToAttribute){%>A<% } %>',
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
