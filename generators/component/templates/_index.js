// Import Style
import '<%= "./"+directiveName+".scss" %>';


import angular from 'angular';

// Import internal modules
import controller from '<%= "./"+directiveName+".controller" %>';
import directive from '<%= "./"+directiveName+".directive" %>';
<%_ if(includeRun){ _%>
import run from '<%= "./"+directiveName+".run" %>';
<%_ } %>
<%_ if(includeConfig){ _%>
import config from '<%= "./"+directiveName+".config" %>';
<%_ } %>

export default angular.module("<%= directiveName %>" , [])
  <%_ if(includeConfig){ _%>  .config(config)<%_ } %>
  <%_ if(includeRun){ _%> .run(run)  <%_ } %>
  .controller(controller.UID, controller)
  .directive("<%= directiveName %>", directive)
  .name;
