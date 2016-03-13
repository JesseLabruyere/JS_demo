/**
 * Use this library to check if the browser has NPAPI support, which enables the use of Unity Web Player
 * Created by Jesse Kramer 11-02-2016
 */
var webCompat = (function() {

    /**
     * Uses RegExp statements to analyze the navigator.userAgent string and extract the necessary information.
     * @type {{name, version}} returns object with name (string) and version (int) of the browser
     */
    var version = (function(){
        var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return {
                name: 'IE',
                version: parseInt(tem[1] || '0')
            }
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) {
                var edgra = tem.slice(1).join('_').replace('OPR', 'Opera').split("_");
                return {
                    name: edgra[0],
                    version: edgra[1]
                }
            }
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return {
            name: M[0],
            version: parseInt(M[1])
        };
    })();

    /**
     * Get Browser display name
     * @returns {string} returns browser display name
     */
    var getBrowserName = function() {
        return version.name;
    };

    /**
     * Get browser version number
     * @returns {int} returns browser version number
     */
    var getBrowserVersion = function() {
        return version.version;
    };

    /**
     * Check the browser compatibility with NPAPI, versions are hardcoded
     * @returns {boolean}
     */
    var isUnityWebPlayerCompatible = function() {
        switch(version.name) {
            case "Chrome": return (version.version < 44); break;
            case "Safari": return true; break;
            case "Firefox": return true; break; // TODO: change "true" to a conditional statement as soon as firefox drops support
            case "Opera": return true; break;
            case "IE": return true; break;
            case "Edge": return true; break;
            default: return false;
        }
    };

    return {
        getBrowserName: getBrowserName,
        getBrowserVersion: getBrowserVersion,
        isUnityWebPlayerCompatible: isUnityWebPlayerCompatible
    };

})();