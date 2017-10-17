# Angular cli project 1.4.7

This project was created to demonstrate how we can solve problem with an angular library that contains angular dependencies and therefore has `node_modules` folder with angular packages. For example when we include ng2-opd-popup package to our project we are getting:

``ERROR in Error encountered resolving symbol values statically. Calling function 'makeDecorator', function calls are not supported. Consider replacing the function or lambda with a reference to an exported function``

To solve it we can add `paths` to our `tscofing.json` and in some cases we have to remove `library/node_modules` folder

See also related SO question [Calling function 'makeDecorator', function calls are not supported](https://stackoverflow.com/questions/46778302/calling-function-makedecorator-function-calls-are-not-supported)

