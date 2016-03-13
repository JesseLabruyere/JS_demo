var lastMousePosition = null;

$(document).ready(function (){
	
	//	Global variables required to create the menu correctly
	
	var numberOfOptions = 5; // Number of items in menu.
	var circleWidth = 170; // Total width of circle (circle + border)
	
    var optionRadius = 12; // Half of the width in "#menu img" (CSS)
    var circleRadius = circleWidth / 2;
    var inputdivCount = 0;
    var leftMouseDown;
    var circleCentreX;
    var circleCentreY;
    var hoverTimer = null;
	var mousedownTimer = null;
	
    var optionHover = 0;
    var optionposx;
    var optionposy;	
	
    $("#canvas").mousedown(function(event){
		
        leftMouseDown = true;
		
		var target = $(event.target);
		
		if (target.is("#canvas")) {
			if(mousedownTimer!==null ){
				clearTimeout(mousedownTimer);
			}
			mousedownTimer = setTimeout(function() { createMenu(event) }, 400);	// Calls function to create menu after mouse held down for 400ms
		}
		
	});
	
    $("#canvas").mouseup(function(){
		
        optionHover = 0;
        leftMouseDown = false;
		$("#canvas").removeClass("noselect");
        $("#menu_full").remove(); 
		
	});
	
	$('#canvas').on('dragover', function(e) {
		
		e.preventDefault();
        return false;
		
    });
	
    $('#canvas').on('dragend', function(e) {
        
		e.preventDefault();
        return false;
		
    });
	
	$("#canvas").on('drop', function(e) {
		if($(e.target).is('#canvas')) {
		e.preventDefault();
		
		inputdivCount+=1;
		createTextInput(inputdivCount, e.pageX, e.pageY);
		loadFileContent(e, inputdivCount);
		dropTextFile (inputdivCount);
		}
		
	});
	
	// Start of functions to enable sub items
	
	// Required set of functions to check what main option is hovered over
	// setOptionsHoverDelay calls a function to open a submenu after 500ms. Takes the number of the selected mainitem as parameter.
	
    $("#canvas").on("mouseover","#option-1",function(){
        setOptionHoverDelay(1);
	});
	
	
    $("#canvas").on("mouseover","#option-2",function(){
        setOptionHoverDelay(2);
	});
	
    $("#canvas").on("mouseover","#option-3",function(){
        setOptionHoverDelay(3);
	});
	
    $("#canvas").on("mouseover","#option-4",function(){
        setOptionHoverDelay(4);
	});
	
    $("#canvas").on("mouseover","#option-5",function(){
        setOptionHoverDelay(5);
	});
	
	
	
	// Displays the sub menu at position
	/* When a new sub menu needs to be added use 
		case x: $("<div>",{
		"id" : "submenu"
		}).appendTo("#menu");
		
		setSubMenuItemsLocation(x,y);
		
		Where x is the position of the main option on the circle (first option x=1, second option x=2 ...) 
		and y is the number of the sub options to be created.
		
		// To create a callback for the created sub-items, there is a function in this code to acomplish that. Scroll down to 'CALLBACK SUB 				AND MAIN MENU'
		
	*/
	
    function checkHoveredOption(){
		
        if(optionHover == 0){
            return;
		}
		
        switch(optionHover){
			
            case 2:
			
			$("#submenu").remove();
			
			$("<div>",{
				"id" : "submenu"
			}).appendTo("#menu");
			
			setSubMenuItemsLocation(2,1);
			
			break;
			
            default: break;
			
		}
		
	}
	
	// End of functions used for enabling sub menu items
	
	
	// Creates and displays the circle menu
	
	/*
		In order to create a new main option use the following code:
		
		$("<img>",{
		"id":"option-x",
		"src":"images/imagename.png"
		
        }).appendTo("#menu");
		
		enableHover("#option-x");
		disableHover("#option-x");
		
		[!IMPORTANT] 
		Make sure to change the global variable numberOfOptions at the top of this document to the amount of options you will show in the menu.
		This is important to draw the menu correctly.
		
	*/
	
    function createMenuItems(event){
		
		//Check if canvas is currently dragging


		
		// Gets the location of the mouse.
        circleCentreX = event.pageX;
        circleCentreY = event.pageY;
		
		// Container of the complete menu included sub menu-items.
        $("<div>",{
            "id":"menu_full"
			
		}).appendTo("#canvas");
		
		// Creates circle div for the menu.
        $("<div>",{
            "id" : "circle",
            css : {
                "left": event.pageX - circleRadius +"px",
                "top": event.pageY - circleRadius
			}
		}).appendTo("#menu_full");
		
		// Displays the menu and the menu-items.
        $("<div>",{
            "id" : "menu",
            css : {
                "left": event.pageX - circleRadius +"px",
                "top": event.pageY - circleRadius
			}
		}).appendTo("#menu_full");
		
		// Menu item 1
        $("<img>",{
            "id":"option-1",
            "src":"res/images/text.png"
			
		}).appendTo("#menu");
		
		enableHover("#option-1");
		disableHover("#option-1");
		
		// Menu item 2
        $("<img>",{
            "id":"option-2",
            "src":"res/images/camera.png"
			
		}).appendTo("#menu");
		
		enableHover("#option-2");
		disableHover("#option-2");
		
		// Menu item 3
        $("<img>",{
            "id":"option-3",
            "src":"res/images/video.png"
			
		}).appendTo("#menu");
		
		enableHover("#option-3");
		disableHover("#option-3");
		
		// Menu item 4
        $("<img>",{
            "id":"option-4",
            "src":"res/images/settings.png"
			
		}).appendTo("#menu");
		
		enableHover("#option-4");
		disableHover("#option-4");
		
		// Menu item 5
        $("<img>",{
            "id":"option-5",
            "src":"res/images/questionmark.png"
			
		}).appendTo("#menu");
		
		enableHover("#option-5");
		disableHover("#option-5");
		
	}
	
    // Removes a hover background when the users curser 'leaves' an item.
    function disableHover(mClass) {
        $(mClass).mouseout(function () {
            $(this).removeClass("hover");
            $(this).removeClass("subhover")
		});
	}
	
    // Adds a hover background when the users curser 'enters' an item.
    function enableHover(mClass) {
        $(mClass).mouseover(function () {
			
			
			// Checks if the selected item as a main-item or a sub-item.
			if( $(this).parent().attr("id") == "menu" ){
                $(this).addClass("hover");
			}
            else if($(this).parent().attr("id") == "submenu"){
                $(this).addClass("subhover");
			}
		});
		
		
        // If the user chooses the "Text menu-item", this will be called to create a textarea that the user can edit.
		
		/* #### [CALLBACK SUB AND MAIN MENU] #### */
		
        $(mClass).mouseup(function (event) {
            switch(mClass){
				
                case "#option-1":
				console.log("Text added");
				
				inputdivCount+=1;
				
				// Includes function from other javascript file.
				createTextInput(inputdivCount, circleCentreX, circleCentreY);
				
				// Includes function from other javascript file.
				dropTextFile(inputdivCount);
				

				break;
				
				
                case "#option-2":
				console.log("Image added");
				//openImageBrowser()
                inputdivCount+=1;
                cameraController.createCameraNode(inputdivCount, circleCentreX, circleCentreY);
				break;
				
                case "#option2sub1":
				console.log("Image sub added");
                openImageBrowser();
				break;
				
                default:
				console.log("Not yet implemented");
				break;
			}
			
		});
		
	}
	
	// Rotates the menu and menu-items when the cursor is on the sides or top.
    function setMenuCircle(event){
        var testnum=$("#canvas").innerWidth() - 90;
		
        var startDeg = 169.75;
		
        if(event.pageX < 90) {
			
            $("#circle").css({"transform":"rotate(135deg)"});
			
            startDeg = 258.75;
			} else if(event.pageX > testnum) {
			
            $("#circle").css({"transform":"rotate(315deg)"});
            startDeg = 78.75;
			
			} else if(event.pageY < 90) {
            $("#circle").css({"transform":"rotate(225deg)"});
            startDeg = 348.75;
			} else {
            $("#circle").css({"transform":"rotate(45deg)"});
		}
		
        var degInc = 202.5/ (numberOfOptions + 1); //Space between options. (225)
		
        for(var i = 0; i < numberOfOptions; i++) {
            var j = i + 1;
            var option = document.getElementById("option-" + j);
            var deg = startDeg + degInc * j;
			
            var rad = Math.PI / 180 * deg; //Convert degrees to radians
			
            var optionX = Math.cos(rad);
            var optionY = Math.sin(rad);
			
			//Sets the postion of the main options on the circle
            optionposx  = (circleRadius - 25) * optionX - optionRadius + circleRadius; //Left
            optionposy = (circleRadius - 25) * optionY - optionRadius + circleRadius; //Top
			
            option.style.left = optionposx + "px";
            option.style.top = optionposy + "px";
		}
	}
	
	// Creates the menu
    function createMenu(event){

        if(dragging){
            return;
        }

        if(event.which != 1){ //If mouse button pressed isn't left disable function
            return;
		}
        if(!leftMouseDown){ //If mouse isn't currently held down disable function
            return;
		}
		
        if( event.pageX < 90 && event.pageY < 90 || //If mouse is clicked in corners disable function
		event.pageX > $("#canvas").innerWidth() - 90 && event.pageY < 90 ||
		event.pageX < 90 && event.pageY > ($("#canvas").innerHeight() - 90) ||
		event.pageX > ($("#canvas").innerWidth() - 90) && event.pageY > ($("#canvas").innerHeight() - 90))
		return; 
		
		$("#canvas").addClass("noselect");
        lastMousePosition = [event.pageX, event.pageY];
        createMenuItems(event);
        setMenuCircle(event);
	}
	
	
	// Creates a delay, so the submenu will not spawn immediately.
    function setOptionHoverDelay(optionnr){ // Enables check for hovering on menu item for sub options
		
        optionHover = optionnr;
        if(hoverTimer!==null ){
            clearTimeout(hoverTimer);
		}
        hoverTimer=setTimeout(checkHoveredOption,500);
		
	}
	
	// Function to set the location of the sub items.
    function setSubMenuItemsLocation(optionnr, suboption){
		
        var testnum=$("#canvas").innerWidth() - 90;
		
        var startDeg = 169.75;
		
        if(circleCentreX < 90) {
			
            startDeg = 258.75;
			} else if(circleCentreX > testnum) {
			
			
            startDeg = 78.75;
			
		} else if(circleCentreY < 90) {
		
		startDeg = 348.75;
        }
        var degInc = 202.5/ (numberOfOptions + 1);
		
        var deg = startDeg + degInc * optionnr;
		
        var rad = Math.PI / 180 * deg; //Convert degrees to radians
		
        var optionX = Math.cos(rad);
        var optionY = Math.sin(rad);
		
		for(i=0; i<suboption; i++){
        optionposx  = (circleRadius - 25) * ( i + 2 ) * optionX - optionRadius + circleRadius; 
        optionposy = (circleRadius - 25) * ( i + 2 ) * optionY - optionRadius + circleRadius; 
		
		
        $("<div>",{
		"class" : "submenuitem",
		"id" : "option"+optionnr+"sub"+(i + 1),
		css : {
		"left": optionposx +"px",
		"top": optionposy +"px"
		}
        }).appendTo("#submenu");
		
        enableHover("#option" + optionnr + "sub" + (i + 1) );
        disableHover("#option" + optionnr + "sub" +(i + 1) );
		}
		
		}
		
		});		