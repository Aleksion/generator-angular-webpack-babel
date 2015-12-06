
import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from <%= "./"+moduleName+".controller" %>
import routes from <%= "./"+moduleName+".routes" %>
<%_ if(includeRun){ _%>
import run from <%= "./"+moduleName+".routes" %>
<%_ } %>
<%_ if(includeConfig){ _%>
import config from <%= "./"+moduleName+".routes" %>
<%_ } %>

export default angular.module(<%= moduleName %> , [uirouter])
  <%_ if(includeConfig){ _%>
  .config(config)
  <%_ } %>
  .config(routes)
  <%_ if(includeRun){ _%>
  .run(run)
  <%_ } %>
  .controller(controller.UID, controller)
  .name;
