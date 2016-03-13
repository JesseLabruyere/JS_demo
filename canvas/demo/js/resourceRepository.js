// The base api url
const API_URL = "http://example-api.nl";

/**
 * Repository to use CRUD actions of an API
 */
var resourceRepository =
    (function ($, apiService, resourceRepository) {

        /**
         * Builds the url based on the base api url
         *
         * @param type
         *   Resource type
         * @param action
         *   The action to execute
         */
        function buildUrl(type, action) {
            /* example: http://example-api.nl/dropbox/image/delete */
            return API_URL + '/dropbox/' + type + '/' + action;
        }

        /**
         * Create a resource
         *
         * @param type
         *   Type of the resource that should be created
         * @param done
         *   Done function
         */
        resourceRepository.createResource = function (type, done) {
            var vars = [];
            var url = buildUrl(type, 'create');
            apiService.executeCall(url, vars, done);
        };

        /**
         * Get a resource
         *
         * @param resource
         *   resource object
         * @param done
         *   Done function
         */
        resourceRepository.getResource = function (resource, done) {
            var vars = [];
            vars['resource'] = resource;
            var url = buildUrl(resource.type, 'read');
            apiService.executeCall(url, vars, done);
        };

        /**
         * Save a resource
         *
         * @param resource
         *   resource object
         * @param done
         *   Done function
         */
        resourceRepository.saveResource = function (resource, done) {
            var vars = [];
            vars['resource'] = resource;
            var url = buildUrl(resource.type, 'update');
            apiService.executeCall(url, vars, done);
        };

        /**
         * Delete a resource
         *
         * @param resource
         *   resource object
         * @param done
         *   Done function
         */
        resourceRepository.deleteResource = function(resource, done) {
            var vars = [];
            vars['resource'] = resource;
            var url = buildUrl(resource.type, 'delete');
            apiService.executeCall(url, vars, done);
        };

        return resourceRepository;

    }(jQuery, apiService , resourceRepository || {}));

