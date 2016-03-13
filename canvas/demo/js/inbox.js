/**
 * Created by K. Nobel on 2/16/2016.
 */

var textareaActive = false;
var inboxActive = false;

//localStorage.clear();

//initialize
$("<div>", {
    "id" : "inbox",
    css : {
        "left" : "-520px"
    }
}).appendTo("body");

$("<div>", {
    "id" : "nodeCreator",
}).appendTo("#inbox");

displayInbox();

//webstorage
var webstorage = true;
if(typeof(Storage) == "undefined") {
    webstorage = false;
    alert("WEBSTORAGE IS NOT SUPPORTED IN YOUR BROWSER!");
} else {
    if(localStorage.getItem("inbox") == null) {
        console.log("IS NULLL");
        localStorage.setItem("inbox",JSON.stringify(new Array()));
    }
}

//Detects if mouse button is pressed outside inbox
$("#canvas").mousedown(function(event) {
    if(inboxActive)
        closeInbox();
});

function openInbox() {
    $("#inbox").css("left", "0");
    inboxActive = true;
}

function closeInbox() {
    $("#inbox").css("left", "-520px");

    if(textareaActive)
        closeTextarea();

    inboxActive = false;
}

function loadInbox() {
    //add code to get nodes from server.
}

function displayInbox() {
    $("#inboxNodes").remove();

    $("<div>", {
        "id" : "inboxNodes"
    }).appendTo("#inbox");

    var inbox = JSON.parse(localStorage.getItem("inbox"));

    if(inbox == null)
        inbox = new Array();

    console.log(inbox);

    for(var i = 0; i < inbox.length; i++) {
        $("<p>", {
            text : inbox[i]
        }).appendTo("#inboxNodes");
    }
}

function openTextarea() {
    openInbox();

    if(textareaActive)
        return;

    $("<form>", {
        "id" : "textCreator"
    }).appendTo("#nodeCreator");

    $("<textarea>", {
        "id" : "textCreatorTextarea"
    }).appendTo("#textCreator");

    $("<input>", {
        "id" : "textCreatorButton",
        "type" : "button",
        "value" : "Submit",
        css : {
            "float" : "right",
            "margin-top" : "10px",
            "margin-right" : "10px"
        }
    }).appendTo("#textCreator");

    textareaActive = true;

    $("#textCreatorButton").click(function(e) {
        //runs when form is submitted
        saveTextarea();
    });
}

//does only save local.
function saveTextarea() {
    var text = $("#textCreatorTextarea").val();

    if(webstorage) {
        var inbox = JSON.parse(localStorage.getItem("inbox"));

        inbox.push(text);

        localStorage.setItem("inbox", JSON.stringify(inbox));
    }

    //add code to save nodes to server.

    displayInbox();
}

function closeTextarea() {
    setTimeout(function() {
        if(textareaActive)
            return;

        saveTextarea();

        $("#textCreator").remove();
        textareaActive = false;
    }, 1000);
}