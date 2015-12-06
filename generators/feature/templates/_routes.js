
import controller from <%= "./"+moduleName+".controller" %>

/**
 * Specify any dependencies here. Alternatively shift to ngAnnotate
 * @type {string}
 */
routes.$inject = ['$stateProvider']

/**
 * Routing function for <%= featureName %>
 * @param  $stateProvider [description]
 */
export default function routes($stateProvider) {
  $stateProvider.state(<%= featureName %>, {
    url: <%="/"+featureName %>,
    templateUrl: require(<%="./"+featureName+".tpl.html" %>),
    controller: controller.UID,
    controllerAs: <%= featureName %>
  });
}
