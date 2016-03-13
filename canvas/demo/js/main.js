/**
 * Created by Julian Steenbakker on 16-2-2016.
 */

$(document).ready(function() {

    if (webCompat.isUnityWebPlayerCompatible()) {

        // checks unity installation
        writeUnityHTML();

        // init unity web player object
        initUnity();

    } else {

        // not compatible

        writeUnityIncompatibleHTML();

    }

});