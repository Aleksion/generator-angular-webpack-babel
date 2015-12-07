
import controller from '<%= "./"+featureName+".controller" %>'

/**
 * Routing function for <%= featureName %>
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("<%= featureName %>", {
    url: "<%="/"+featureName %>",
    template: require("<%="./"+featureName+".tpl.html" %>"),
    controller: controller.UID,
    controllerAs: "<%= featureName %>"
  });
}
