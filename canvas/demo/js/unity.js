
function initUnity() {
    var u = new UnityObject2();

    u.observeProgress(function (progress) {
        var $missingScreen = jQuery(progress.targetEl).find(".missing");
        switch(progress.pluginStatus) {
            case "unsupported":
                showUnsupported();
                break;
            case "broken":
                alert("You will need to restart your browser after installation.");
                break;
            case "missing":
                $missingScreen.find("a").click(function (e) {
                    e.stopPropagation();
                    e.preventDefault();
                    u.installPlugin();
                    return false;
                });
                $missingScreen.show();
                break;
            case "installed":
                $missingScreen.remove();
                break;
            case "first":
                break;
        }
    });
    jQuery(function(){
		var HTML = '<video controls height="400px" width="400px" allowfullscreen>';
			HTML += '<source src="res/unity/mockupwaaier.mp4" type="video/mp4">';
			HTML += '</video>';
		$("#unityPlayer").html(HTML);
        //u.initPlugin(jQuery("#unityPlayer")[0], "res/unity/basic.unity3d");
    });
}

function writeUnityHTML() {
    var HTML = '<div id="unityPlayer">';
        HTML += '<div class="missing">';
        HTML += '<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now!">';
        HTML += '<img alt="Unity Web Player. Install now!" src="http://webplayer.unity3d.com/installation/getunity.png" width="193" height="63" />';
        HTML += '</a>';
        HTML += '</div>';
        HTML += '</div>';
    $("#player_container").append(HTML);
}

function writeUnityIncompatibleHTML() {
    var HTML = '<p>Your browser does not support the web version of RoomzApp, please download the RoomzApp Client <a href="#">here</a>.</p>';
    $("#player_container").append(HTML);
    $("#title").html("Please Install the RoomzApp Client");
}