
import angular from 'angular';
import uirouter from 'angular-ui-router';

// Import internal modules
import controller from '<%= "./"+featureName+".controller" %>';
import routes from '<%= "./"+featureName+".routes" %>';
<%_ if(includeRun){ _%>
import run from '<%= "./"+featureName+".run" %>';
<%_ } %>
<%_ if(includeConfig){ _%>
import config from '<%= "./"+featureName+".config" %>';
<%_ } %>

export default angular.module("<%= featureName %>" , [uirouter])
  <%_ if(includeConfig){ _%>  .config(config)<%_ } %>
  .config(routes)
  <%_ if(includeRun){ _%> .run(run)  <%_ } %>
  .controller(controller.UID, controller)
  .name;
