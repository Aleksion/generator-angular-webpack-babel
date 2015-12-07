/* @ngInject */
export default function routes($stateProvider){

  $stateProvider.state('sample',
  {
    url: '/sample',
    template: '<div class="sample-class"> This is a sample feature </div>'
  });
}
