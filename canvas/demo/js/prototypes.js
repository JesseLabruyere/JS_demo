// TODO views betere naam? Wrappers voor Nodes worden namelijk door 2dcanvas gerealiseerd

/**
 * Position in pixels as int
 *
 * @param {int} x
 *   X position, horizontal
 * @param {int} y
 *   Y position, vertical
 * @constructor
 */
function Position(x, y) {
    this.x = x;
    this.y = y;

    /**
     * Get a PixelPosition object
     *
     * @returns {PixelPosition}
     */
    this.getPixelPosition =  function() {
        return new PixelPosition(this);
    };
}

/**
 * Position in pixels as string
 *
 * @param {Position} position
 * @constructor
 */
function PixelPosition(position) {
    this.x = position.x + 'px';
    this.y = position.y + 'px';
}

/**
 * Calculates a position relative to a container element
 *
 * @param {Element} container
 * @constructor
 */
function PositionCalculator(container) {
    this.container = container;

    /**
     * Calculate a new position based on the container element
     *
     * @param {Position} position
     *   The position that needs to be calculated
     * @returns {Position}
     *   A new position object
     */
    this.calculate = function (position) {
        var x = container.x * -1 + position.x - 80;
        var y = container.y * -1 + position.y;
        return new Position(x, y);
    };
}

/**
 * Basic node prototype
 *
 * @param {Position} position
 *   Position object with the location
 * @param {int} id
 *   The unique id
 * @constructor
 */
function Node(position, id) {
    this.position = position;
    this.id = id;

    /**
     * Get the dom id
     *
     * @returns {string}
     *   The id as used in the dom
     */
    this.getHTMLId = function () {
        return "inputdiv" + id;
    };

    /**
     * Get the html to render this node
     *
     * @returns {*|jQuery|HTMLElement}
     *   HTML element that represents a node
     */
    this.getHTML = function () {
        return $("<div>", {
            "id" : this.getHTMLId(),
            "class" : 'node',
            css : {
                "top" : position.getPixelPosition().y,
                "left" : position.getPixelPosition().x,
                "position" : "absolute"}
        });
    };
}

function ContextMenu() {
    var menuItems = [];





    $("<li>", {
        "href" : "javascript:void(0)",
        "id" : "delete"+inputdivCount,
        "class" : "noselect stackButton stackButtonDelete"
    }).appendTo("#stackDivList"+inputdivCount+"");

    $('#inputdiv' + inputdivCount + ' ' + '.stackButtonDelete').click(function (e) {
        $(this).parents('#inputdiv' + inputdivCount).remove();
    });

    $(document).on("mousedown", "#" + inputId, function(){
        $("#stackDiv"+inputdivCount).css({"display":"block"});
    });

    $(document).on("mousedown", function(event){
        var $target = $(event.target);
        if((! $target.parents('#inputdiv' + inputdivCount).length) && $target.attr("id") != inputId && $target != inputdivCount ) {
            $("#stackDiv"+inputdivCount).css({"display":"none"});
        }
    });


    this.getHTML = function () {
        return $("<div>",{
            "class" : "stackDivClass",
            "css" : {'display' : 'block'}
        });
        $("<ul>",{
            "id" : "stackDivList"+inputdivCount,
            css : {}
        }).appendTo("#stackDiv"+inputdivCount);


        $(document).on("mousedown", "#" + inputId, function() {
            $("#stackDiv"+inputdivCount).css({"display":"block"});
        });

        $(document).on("mousedown", function(event){
            var $target = $(event.target);
            if((! $target.parents('#inputdiv' + inputdivCount).length) && $target.attr("id") != inputId && $target != inputdivCount ) {
                $("#stackDiv"+inputdivCount).css({"display":"none"});
            }
        });
    };
}


function testNode() {
    var node = new Node(new Position(200, 200), 25);
    var htmlNode = node.getHTML();
    $('#container').append(htmlNode);
}

/*
var videoId = 'cameraVideo' + inputdivCount;
$("<video>", {
    "id" : videoId,
    "autoplay" : true
}).appendTo("#" + inputId);

var snapshotCanvasId = 'snapshotCanvas' + inputdivCount;
$("<canvas>", {
    "id" : snapshotCanvasId,
    css : { "display" : "none"}
}).appendTo("#" + inputId);

record(videoId, function(){
    $("#"+inputId).remove();
});
*/




