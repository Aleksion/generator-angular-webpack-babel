
import controller from './sample.controller'

/**
 * Routing function for sample
 * @param  $stateProvider
 */
/* @ngInject */
export default function routes($stateProvider) {
  $stateProvider.state("sample", {
    url: "/sample",
    template: require("./sample.tpl.html"),
    controller: controller.UID,
    controllerAs: "sample"
  });
}
