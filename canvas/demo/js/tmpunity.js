
$("#switch").click(function () {
    if ($("#unitywebapp").hasClass("hidden")) {
        $("#unitywebapp").removeClass("hidden");
		$("#unitywebapp").html('<object data="unity.html">');
    } else {
        $("#unitywebapp").addClass("hidden");
		$("#unitywebapp").html('');
    }
});