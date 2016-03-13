
/**
 * Executes API calls
 */
var apiService =
    (function ($, apiService) {

        /**
         * 400
         */
        function badRequest() {
            // do something
        }

        /**
         * 401
         */
        function unauthorized() {
            // do something
        }

        /**
         * 403
         */
        function forbidden() {
            // do something
        }

        /**
         * 404
         */
        function notFound() {
            // do something
        }

        /**
         * 500
         */
        function serverError() {
            // do something
        }

        /**
         * 503
         */
        function serverOverload() {
            // do something
        }

        /**
         * return a placeholder JSON object
         */
        function getPlaceholderJSON() {
            /* placeholder JSON object */
            var placeholderJSON = {};
            placeholderJSON.first = 'test1';
            placeholderJSON.second = 'test2';
            return JSON.stringify(placeholderJSON);
        }

        /**
         * execute an API call
         *
         * @param route
         *   The route that will be called
         * @param vars
         *   Array with variables
         * @param done
         *   Done function is given the response data
         */
        apiService.executeCall = function (route, vars, done) {

            /** remove this including the return once the api is ready */
            if(typeof(done) === typeof(Function)) {
                done(getPlaceholderJSON());
            }
            return;

            $.ajax({
                method: "POST",
                url: route,
                dataType: 'json',
                contentType: 'application/json; charset=UTF-8',
                data: JSON.stringify(vars),
                statusCode: {
                    400: badRequest,
                    401: unauthorized,
                    403: forbidden,
                    404: notFound,
                    500: serverError,
                    503: serverOverload
                },
                complete: function (data) {
                    // Handle the complete event
                    if(typeof(done) === typeof(Function)) {
                        done(data);
                    }
                }
            });

        };

        return apiService;

    }(jQuery, apiService || {}));
