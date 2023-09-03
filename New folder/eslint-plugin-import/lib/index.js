'use strict';Object.defineProperty(exports, "__esModule", { value: true });var rules = exports.rules = {
  'no-unresolved': require('./rules/no-unresolved'),
  named: require('./rules/named'),
  'default': require('./rules/default'),
  namespace: require('./rules/namespace'),
  'no-namespace': require('./rules/no-namespace'),
  'export': require('./rules/export'),
  'no-mutable-exports': require('./rules/no-mutable-exports'),
  extensions: require('./rules/extensions'),
  'no-restricted-paths': require('./rules/no-restricted-paths'),
  'no-internal-modules': require('./rules/no-internal-modules'),
  'group-exports': require('./rules/group-exports'),
  'no-relative-packages': require('./rules/no-relative-packages'),
  'no-relative-parent-imports': require('./rules/no-relative-parent-imports'),
  'consistent-type-specifier-style': require('./rules/consistent-type-specifier-style'),

  'no-self-import': require('./rules/no-self-import'),
  'no-cycle': require('./rules/no-cycle'),
  'no-named-default': require('./rules/no-named-default'),
  'no-named-as-default': require('./rules/no-named-as-default'),
  'no-named-as-default-member': require('./rules/no-named-as-default-member'),
  'no-anonymous-default-export': require('./rules/no-anonymous-default-export'),
  'no-unused-modules': require('./rules/no-unused-modules'),

  'no-commonjs': require('./rules/no-commonjs'),
  'no-amd': require('./rules/no-amd'),
  'no-duplicates': require('./rules/no-duplicates'),
  first: require('./rules/first'),
  'max-dependencies': require('./rules/max-dependencies'),
  'no-extraneous-dependencies': require('./rules/no-extraneous-dependencies'),
  'no-absolute-path': require('./rules/no-absolute-path'),
  'no-nodejs-modules': require('./rules/no-nodejs-modules'),
  'no-webpack-loader-syntax': require('./rules/no-webpack-loader-syntax'),
  order: require('./rules/order'),
  'newline-after-import': require('./rules/newline-after-import'),
  'prefer-default-export': require('./rules/prefer-default-export'),
  'no-default-export': require('./rules/no-default-export'),
  'no-named-export': require('./rules/no-named-export'),
  'no-dynamic-require': require('./rules/no-dynamic-require'),
  unambiguous: require('./rules/unambiguous'),
  'no-unassigned-import': require('./rules/no-unassigned-import'),
  'no-useless-path-segments': require('./rules/no-useless-path-segments'),
  'dynamic-import-chunkname': require('./rules/dynamic-import-chunkname'),
  'no-import-module-exports': require('./rules/no-import-module-exports'),
  'no-empty-named-blocks': require('./rules/no-empty-named-blocks'),

  // export
  'exports-last': require('./rules/exports-last'),

  // metadata-based
  'no-deprecated': require('./rules/no-deprecated'),

  // deprecated aliases to rules
  'imports-first': require('./rules/imports-first') };


var configs = exports.configs = {
  recommended: require('../config/recommended'),

  errors: require('../config/errors'),
  warnings: require('../config/warnings'),

  // shhhh... work in progress "secret" rules
  'stage-0': require('../config/stage-0'),

  // useful stuff for folks using various environments
  react: require('../config/react'),
  'react-native': require('../config/react-native'),
  electron: require('../config/electron'),
  typescript: require('../config/typescript') };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJydWxlcyIsInJlcXVpcmUiLCJuYW1lZCIsIm5hbWVzcGFjZSIsImV4dGVuc2lvbnMiLCJmaXJzdCIsIm9yZGVyIiwidW5hbWJpZ3VvdXMiLCJjb25maWdzIiwicmVjb21tZW5kZWQiLCJlcnJvcnMiLCJ3YXJuaW5ncyIsInJlYWN0IiwiZWxlY3Ryb24iLCJ0eXBlc2NyaXB0Il0sIm1hcHBpbmdzIjoiMkVBQU8sSUFBTUEsd0JBQVE7QUFDbkIsbUJBQWlCQyxRQUFRLHVCQUFSLENBREU7QUFFbkJDLFNBQU9ELFFBQVEsZUFBUixDQUZZO0FBR25CLGFBQVNBLFFBQVEsaUJBQVIsQ0FIVTtBQUluQkUsYUFBV0YsUUFBUSxtQkFBUixDQUpRO0FBS25CLGtCQUFnQkEsUUFBUSxzQkFBUixDQUxHO0FBTW5CLFlBQVFBLFFBQVEsZ0JBQVIsQ0FOVztBQU9uQix3QkFBc0JBLFFBQVEsNEJBQVIsQ0FQSDtBQVFuQkcsY0FBWUgsUUFBUSxvQkFBUixDQVJPO0FBU25CLHlCQUF1QkEsUUFBUSw2QkFBUixDQVRKO0FBVW5CLHlCQUF1QkEsUUFBUSw2QkFBUixDQVZKO0FBV25CLG1CQUFpQkEsUUFBUSx1QkFBUixDQVhFO0FBWW5CLDBCQUF3QkEsUUFBUSw4QkFBUixDQVpMO0FBYW5CLGdDQUE4QkEsUUFBUSxvQ0FBUixDQWJYO0FBY25CLHFDQUFtQ0EsUUFBUSx5Q0FBUixDQWRoQjs7QUFnQm5CLG9CQUFrQkEsUUFBUSx3QkFBUixDQWhCQztBQWlCbkIsY0FBWUEsUUFBUSxrQkFBUixDQWpCTztBQWtCbkIsc0JBQW9CQSxRQUFRLDBCQUFSLENBbEJEO0FBbUJuQix5QkFBdUJBLFFBQVEsNkJBQVIsQ0FuQko7QUFvQm5CLGdDQUE4QkEsUUFBUSxvQ0FBUixDQXBCWDtBQXFCbkIsaUNBQStCQSxRQUFRLHFDQUFSLENBckJaO0FBc0JuQix1QkFBcUJBLFFBQVEsMkJBQVIsQ0F0QkY7O0FBd0JuQixpQkFBZUEsUUFBUSxxQkFBUixDQXhCSTtBQXlCbkIsWUFBVUEsUUFBUSxnQkFBUixDQXpCUztBQTBCbkIsbUJBQWlCQSxRQUFRLHVCQUFSLENBMUJFO0FBMkJuQkksU0FBT0osUUFBUSxlQUFSLENBM0JZO0FBNEJuQixzQkFBb0JBLFFBQVEsMEJBQVIsQ0E1QkQ7QUE2Qm5CLGdDQUE4QkEsUUFBUSxvQ0FBUixDQTdCWDtBQThCbkIsc0JBQW9CQSxRQUFRLDBCQUFSLENBOUJEO0FBK0JuQix1QkFBcUJBLFFBQVEsMkJBQVIsQ0EvQkY7QUFnQ25CLDhCQUE0QkEsUUFBUSxrQ0FBUixDQWhDVDtBQWlDbkJLLFNBQU9MLFFBQVEsZUFBUixDQWpDWTtBQWtDbkIsMEJBQXdCQSxRQUFRLDhCQUFSLENBbENMO0FBbUNuQiwyQkFBeUJBLFFBQVEsK0JBQVIsQ0FuQ047QUFvQ25CLHVCQUFxQkEsUUFBUSwyQkFBUixDQXBDRjtBQXFDbkIscUJBQW1CQSxRQUFRLHlCQUFSLENBckNBO0FBc0NuQix3QkFBc0JBLFFBQVEsNEJBQVIsQ0F0Q0g7QUF1Q25CTSxlQUFhTixRQUFRLHFCQUFSLENBdkNNO0FBd0NuQiwwQkFBd0JBLFFBQVEsOEJBQVIsQ0F4Q0w7QUF5Q25CLDhCQUE0QkEsUUFBUSxrQ0FBUixDQXpDVDtBQTBDbkIsOEJBQTRCQSxRQUFRLGtDQUFSLENBMUNUO0FBMkNuQiw4QkFBNEJBLFFBQVEsa0NBQVIsQ0EzQ1Q7QUE0Q25CLDJCQUF5QkEsUUFBUSwrQkFBUixDQTVDTjs7QUE4Q25CO0FBQ0Esa0JBQWdCQSxRQUFRLHNCQUFSLENBL0NHOztBQWlEbkI7QUFDQSxtQkFBaUJBLFFBQVEsdUJBQVIsQ0FsREU7O0FBb0RuQjtBQUNBLG1CQUFpQkEsUUFBUSx1QkFBUixDQXJERSxFQUFkOzs7QUF3REEsSUFBTU8sNEJBQVU7QUFDckJDLGVBQWFSLFFBQVEsdUJBQVIsQ0FEUTs7QUFHckJTLFVBQVFULFFBQVEsa0JBQVIsQ0FIYTtBQUlyQlUsWUFBVVYsUUFBUSxvQkFBUixDQUpXOztBQU1yQjtBQUNBLGFBQVdBLFFBQVEsbUJBQVIsQ0FQVTs7QUFTckI7QUFDQVcsU0FBT1gsUUFBUSxpQkFBUixDQVZjO0FBV3JCLGtCQUFnQkEsUUFBUSx3QkFBUixDQVhLO0FBWXJCWSxZQUFVWixRQUFRLG9CQUFSLENBWlc7QUFhckJhLGNBQVliLFFBQVEsc0JBQVIsQ0FiUyxFQUFoQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBydWxlcyA9IHtcbiAgJ25vLXVucmVzb2x2ZWQnOiByZXF1aXJlKCcuL3J1bGVzL25vLXVucmVzb2x2ZWQnKSxcbiAgbmFtZWQ6IHJlcXVpcmUoJy4vcnVsZXMvbmFtZWQnKSxcbiAgZGVmYXVsdDogcmVxdWlyZSgnLi9ydWxlcy9kZWZhdWx0JyksXG4gIG5hbWVzcGFjZTogcmVxdWlyZSgnLi9ydWxlcy9uYW1lc3BhY2UnKSxcbiAgJ25vLW5hbWVzcGFjZSc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbmFtZXNwYWNlJyksXG4gIGV4cG9ydDogcmVxdWlyZSgnLi9ydWxlcy9leHBvcnQnKSxcbiAgJ25vLW11dGFibGUtZXhwb3J0cyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tbXV0YWJsZS1leHBvcnRzJyksXG4gIGV4dGVuc2lvbnM6IHJlcXVpcmUoJy4vcnVsZXMvZXh0ZW5zaW9ucycpLFxuICAnbm8tcmVzdHJpY3RlZC1wYXRocyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tcmVzdHJpY3RlZC1wYXRocycpLFxuICAnbm8taW50ZXJuYWwtbW9kdWxlcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8taW50ZXJuYWwtbW9kdWxlcycpLFxuICAnZ3JvdXAtZXhwb3J0cyc6IHJlcXVpcmUoJy4vcnVsZXMvZ3JvdXAtZXhwb3J0cycpLFxuICAnbm8tcmVsYXRpdmUtcGFja2FnZXMnOiByZXF1aXJlKCcuL3J1bGVzL25vLXJlbGF0aXZlLXBhY2thZ2VzJyksXG4gICduby1yZWxhdGl2ZS1wYXJlbnQtaW1wb3J0cyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tcmVsYXRpdmUtcGFyZW50LWltcG9ydHMnKSxcbiAgJ2NvbnNpc3RlbnQtdHlwZS1zcGVjaWZpZXItc3R5bGUnOiByZXF1aXJlKCcuL3J1bGVzL2NvbnNpc3RlbnQtdHlwZS1zcGVjaWZpZXItc3R5bGUnKSxcblxuICAnbm8tc2VsZi1pbXBvcnQnOiByZXF1aXJlKCcuL3J1bGVzL25vLXNlbGYtaW1wb3J0JyksXG4gICduby1jeWNsZSc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tY3ljbGUnKSxcbiAgJ25vLW5hbWVkLWRlZmF1bHQnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWRlZmF1bHQnKSxcbiAgJ25vLW5hbWVkLWFzLWRlZmF1bHQnOiByZXF1aXJlKCcuL3J1bGVzL25vLW5hbWVkLWFzLWRlZmF1bHQnKSxcbiAgJ25vLW5hbWVkLWFzLWRlZmF1bHQtbWVtYmVyJzogcmVxdWlyZSgnLi9ydWxlcy9uby1uYW1lZC1hcy1kZWZhdWx0LW1lbWJlcicpLFxuICAnbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQnKSxcbiAgJ25vLXVudXNlZC1tb2R1bGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby11bnVzZWQtbW9kdWxlcycpLFxuXG4gICduby1jb21tb25qcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tY29tbW9uanMnKSxcbiAgJ25vLWFtZCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tYW1kJyksXG4gICduby1kdXBsaWNhdGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1kdXBsaWNhdGVzJyksXG4gIGZpcnN0OiByZXF1aXJlKCcuL3J1bGVzL2ZpcnN0JyksXG4gICdtYXgtZGVwZW5kZW5jaWVzJzogcmVxdWlyZSgnLi9ydWxlcy9tYXgtZGVwZW5kZW5jaWVzJyksXG4gICduby1leHRyYW5lb3VzLWRlcGVuZGVuY2llcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMnKSxcbiAgJ25vLWFic29sdXRlLXBhdGgnOiByZXF1aXJlKCcuL3J1bGVzL25vLWFic29sdXRlLXBhdGgnKSxcbiAgJ25vLW5vZGVqcy1tb2R1bGVzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1ub2RlanMtbW9kdWxlcycpLFxuICAnbm8td2VicGFjay1sb2FkZXItc3ludGF4JzogcmVxdWlyZSgnLi9ydWxlcy9uby13ZWJwYWNrLWxvYWRlci1zeW50YXgnKSxcbiAgb3JkZXI6IHJlcXVpcmUoJy4vcnVsZXMvb3JkZXInKSxcbiAgJ25ld2xpbmUtYWZ0ZXItaW1wb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9uZXdsaW5lLWFmdGVyLWltcG9ydCcpLFxuICAncHJlZmVyLWRlZmF1bHQtZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9wcmVmZXItZGVmYXVsdC1leHBvcnQnKSxcbiAgJ25vLWRlZmF1bHQtZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9uby1kZWZhdWx0LWV4cG9ydCcpLFxuICAnbm8tbmFtZWQtZXhwb3J0JzogcmVxdWlyZSgnLi9ydWxlcy9uby1uYW1lZC1leHBvcnQnKSxcbiAgJ25vLWR5bmFtaWMtcmVxdWlyZSc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tZHluYW1pYy1yZXF1aXJlJyksXG4gIHVuYW1iaWd1b3VzOiByZXF1aXJlKCcuL3J1bGVzL3VuYW1iaWd1b3VzJyksXG4gICduby11bmFzc2lnbmVkLWltcG9ydCc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tdW5hc3NpZ25lZC1pbXBvcnQnKSxcbiAgJ25vLXVzZWxlc3MtcGF0aC1zZWdtZW50cyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tdXNlbGVzcy1wYXRoLXNlZ21lbnRzJyksXG4gICdkeW5hbWljLWltcG9ydC1jaHVua25hbWUnOiByZXF1aXJlKCcuL3J1bGVzL2R5bmFtaWMtaW1wb3J0LWNodW5rbmFtZScpLFxuICAnbm8taW1wb3J0LW1vZHVsZS1leHBvcnRzJzogcmVxdWlyZSgnLi9ydWxlcy9uby1pbXBvcnQtbW9kdWxlLWV4cG9ydHMnKSxcbiAgJ25vLWVtcHR5LW5hbWVkLWJsb2Nrcyc6IHJlcXVpcmUoJy4vcnVsZXMvbm8tZW1wdHktbmFtZWQtYmxvY2tzJyksXG5cbiAgLy8gZXhwb3J0XG4gICdleHBvcnRzLWxhc3QnOiByZXF1aXJlKCcuL3J1bGVzL2V4cG9ydHMtbGFzdCcpLFxuXG4gIC8vIG1ldGFkYXRhLWJhc2VkXG4gICduby1kZXByZWNhdGVkJzogcmVxdWlyZSgnLi9ydWxlcy9uby1kZXByZWNhdGVkJyksXG5cbiAgLy8gZGVwcmVjYXRlZCBhbGlhc2VzIHRvIHJ1bGVzXG4gICdpbXBvcnRzLWZpcnN0JzogcmVxdWlyZSgnLi9ydWxlcy9pbXBvcnRzLWZpcnN0JyksXG59O1xuXG5leHBvcnQgY29uc3QgY29uZmlncyA9IHtcbiAgcmVjb21tZW5kZWQ6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWNvbW1lbmRlZCcpLFxuXG4gIGVycm9yczogcmVxdWlyZSgnLi4vY29uZmlnL2Vycm9ycycpLFxuICB3YXJuaW5nczogcmVxdWlyZSgnLi4vY29uZmlnL3dhcm5pbmdzJyksXG5cbiAgLy8gc2hoaGguLi4gd29yayBpbiBwcm9ncmVzcyBcInNlY3JldFwiIHJ1bGVzXG4gICdzdGFnZS0wJzogcmVxdWlyZSgnLi4vY29uZmlnL3N0YWdlLTAnKSxcblxuICAvLyB1c2VmdWwgc3R1ZmYgZm9yIGZvbGtzIHVzaW5nIHZhcmlvdXMgZW52aXJvbm1lbnRzXG4gIHJlYWN0OiByZXF1aXJlKCcuLi9jb25maWcvcmVhY3QnKSxcbiAgJ3JlYWN0LW5hdGl2ZSc6IHJlcXVpcmUoJy4uL2NvbmZpZy9yZWFjdC1uYXRpdmUnKSxcbiAgZWxlY3Ryb246IHJlcXVpcmUoJy4uL2NvbmZpZy9lbGVjdHJvbicpLFxuICB0eXBlc2NyaXB0OiByZXF1aXJlKCcuLi9jb25maWcvdHlwZXNjcmlwdCcpLFxufTtcbiJdfQ==