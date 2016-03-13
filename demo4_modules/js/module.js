/**
 * Making JavaScript modules using the module design pattern
 *
 * Reference: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */


/**
 * What is happening here is that we define a function.
 * We also immediately after call that function
 * The resulting object is stores in a variable in this case called 'module'
 *
 */
var module = (function ($, string, module) {

    // private
    function thisIsAPrivateFunction() {
        // this is a private function...
    }

    //public
    module.thisIsAPublicFunction =  function () {
        // this is a public function...
        console.log('Hi I am public!')
    };

    // This function return an object
    return module;

}(jQuery, 'some string', module || {}));


/**
 * Run the demo
 */
function demo() {
    module.thisIsAPublicFunction();
    console.debug(module);
}
