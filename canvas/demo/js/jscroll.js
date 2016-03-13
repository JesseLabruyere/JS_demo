	var panningDeadZone = 5;
	var panningTimeOut = 350;
	var panningTimer = null;
// Content container element in out HTML
window.onload = function(){
    container = document.getElementById("container");
    // If found, Initialize values for the container
    if (container)
    {
      container.x = parseFloat(container.style.left);
      container.y = parseFloat(container.style.top);
      container.updateposition = function() {

        container.style.left = container.x + 'px'; container.style.top = container.y + 'px';
      };
      // previousLocation stores the last location
      previous = {x: container.x, y: container.y};
      zoom = 1;   // zoom = parseFloat(container.getAttribute('data-zoom'));
    };

    // Initialize dragging variable, a bool that decides whether we're dragging
    // the screen
    dragging = null;
	
}
$(".node").each(function(index) {
	$(this).data("size", parseFloat(this.style.fontSize) * zoom);
	$(this).data("x", parseFloat(this.style.left) * zoom);
	$(this).data("y", parseFloat(this.style.top) * zoom);
});

movingnode = null;
$(document).on('mousedown',"#canvas", function(e) {
	var target = $(e.target);
	
		
		if (target.is("#canvas")) {
			dragging = true;
			if(panningTimer!==null ){
				clearTimeout(panningTimer);
			}
			// timer to check if there has been panned in certain timeframe(panningTimeOut)
			panningTimer = setTimeout(function() {
				//calculates the amount that has been panned in that time frime
				xDif = Math.abs(e.pageX - previous.x);
				yDif = Math.abs(e.pageY - previous.y);
				//checks if the amount panned is higher then the deadzone if so you keep panningDeadZone
				// if not (see else statement) panning is being stopped
				if (xDif > panningDeadZone || yDif > panningDeadZone){
				  movingnode = null;
				  dragging = true;		  	  
				}
				else{
				  dragging = false;
				}
			}, panningTimeOut);
		}
		if (target.is(".node")) {
		  movingnode = e.target;
		  movingnode.className = "node movingnode noselect textNodeClass";
		} else {
		  dragging = true;
		  movingnode = null;
		}
		biggestpictureseen = false;
		previous = {x: e.pageX, y: e.pageY};
		


});

window.onmouseup = function() {
  dragging = false;
  if (movingnode)
		movingnode.className = "node textNodeClass";
  movingnode = null;
  clearTimeout(panningTimer);
}

window.onmousemove = function(e) {
  if (dragging) {
    // console.log(container.x + ' ' + container.y);
    container.style.transitionDuration = "0s";
    container.x += e.pageX - previous.x;
    container.y += e.pageY - previous.y;
    container.updateposition();
    previous = {x: e.pageX,y: e.pageY};
  }
  if (movingnode) {
		$(movingnode).data("x", $(movingnode).data("x") + (e.pageX - previous.x) * zoom);
		$(movingnode).data("y", $(movingnode).data("y") + (e.pageY - previous.y) * zoom);
		movingnode.style.top = $(movingnode).data("y") / zoom + 'px';
		movingnode.style.left = $(movingnode).data("x") / zoom + 'px';
		previous = {
			x : e.pageX,
			y : e.pageY
		};
  }
}

// ZOOM 

var onzoom = function(coef, X, Y) {
	if (!container)
		return;
	container.style.transitionDuration = "0s";
	var middle = {
		x : (-container.x + X) * zoom,
		y : (-container.y + Y) * zoom
	};
	zoom *= coef;
	container.x = X - middle.x / zoom;
	container.y = Y - middle.y / zoom;
	container.updateposition();

	$(".node").each(function(index) {
		this.style.left = ($(this).data("x")) / zoom + 'px';
		this.style.top = ($(this).data("y")) / zoom + 'px';
		this.style.border = $(this).data("border") / zoom + 'px solid #000000';
		this.style.borderRadius = $(this).data("radius") / zoom + 'px';
		this.style.padding = $(this).data("padding") / zoom + 'px';
	});
	$(".text").each(function(index) {
		this.style.width = $(this).data("width") / zoom + 'px';
		this.style.height = $(this).data("height") / zoom + 'px';
		this.style.fontSize = $(this).data("size") / zoom + 'px';
		this.style.border = $(this).data("border") /zoom + 'px solid #898989';
	});
	$(".image").each(function(index) {
		this.style.width = $(this).data("width") / zoom;
		this.style.height = $(this).data("height") / zoom;
	});
	/*$(".node > img").each(function(index) {// image management
		$(this).width($(this).width() / coef);
	});*/
	biggestpictureseen = false;
}
/**
 * Zooms in on text.
 * @param {Object} res - Screen resolution.
 */
function zoomontext(res) {
	container.x = window.innerWidth / 2 - parseFloat(res.style.left);
	container.y = window.innerHeight / 2 - parseFloat(res.style.top);
	container.updateposition();
	onzoom(parseFloat(res.style.fontSize) / 30, window.innerWidth / 2, window.innerHeight / 2);
}

var biggestpictureseen = false,
    zoomcoef = 1,
    oldzoom = 1;

function zoomuniverse(e) {
	e.preventDefault();
	var minX = 1000 * 1000 * 1000 * 1000,
	    maxX = -1000 * 1000 * 1000 * 1000,
	    minY = 1000 * 1000 * 1000 * 1000,
	    maxY = -1000 * 1000 * 1000 * 1000;
	var nodeelements = document.getElementsByClassName('node');
	[].forEach.call(nodeelements, function(elt) {
		var rect2 = elt.getBoundingClientRect();
		var rect = {
			left : ($(elt).data("x")) / zoom,
			top : ($(elt).data("y")) / zoom,
			right : ($(elt).data("x")) / zoom + ((rect2.width > 2) ? rect2.width : 0),
			bottom : ($(elt).data("y")) / zoom + rect2.height
		};
		if (rect.left < minX)
			minX = rect.left;
		if (rect.right > maxX)
			maxX = rect.right;
		if (rect.top < minY)
			minY = rect.top;
		if (rect.bottom > maxY)
			maxY = rect.bottom;
	});

	if (nodeelements.length == 0)
		return;
	if (nodeelements.length == 1) {
		zoomontext(nodeelements[0]);
		return;
	}

	if (!biggestpictureseen) {
		previous.x = container.x;
		previous.y = container.y;
		oldzoom = zoom;
		container.x = window.innerWidth / 2 - (minX + maxX) / 2;
		container.y = (window.innerHeight - 70) / 2 + 70 - (minY + maxY) / 2;
		// because of topmenu
		container.updateposition();
		zoomcoef = Math.max((maxX - minX) / window.innerWidth, (maxY - minY) / (window.innerHeight - 70)) * 1.1;
		zoomcoef = Math.pow(1.7, Math.ceil(Math.log(zoomcoef) / Math.log(1.7)));
		onzoom(zoomcoef, window.innerWidth / 2, (window.innerHeight - 70) / 2 + 70);
		biggestpictureseen = true;
	} else {
		container.x = previous.x;
		container.y = previous.y;
		container.updateposition();
		zoom = oldzoom;

		$(".node").each(function(index) {
			this.style.fontSize = $(this).data("size") / zoom + 'px';
			this.style.left = ($(this).data("x")) / zoom + 'px';
			this.style.top = ($(this).data("y")) / zoom + 'px';
		});
		biggestpictureseen = false;
	}
}

// MOUSEWHEEL

var mousewheeltime = new Date(),
    mousewheeldelta = 0,
    last_e,
    mousewheeltimer = null;

if (navigator.appVersion.indexOf("Mac") != -1)// Mac OS X
{
	var mousewheel = function(e) {
		e.preventDefault();
		mousewheeldelta += Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		// (e.detail) ? -e.detail / 3 : ((e.wheelDelta) ? e.wheelDelta / 120 : 0);
		last_e = e;
		if (!mousewheeltimer)
			mousewheeltimer = setTimeout(function() {
				onzoom((mousewheeldelta > 0) ? 1 / 1.7 : 1.7, last_e.clientX, last_e.clientY);
				mousewheeldelta = 0;
				mousewheeltimer = null;
			}, 70);
	}
} else {
	var mousewheel = function(e) {
		e.preventDefault();
		var e = window.event || e;
		// old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		onzoom((delta > 0) ? 1 / 1.7 : 1.7, e.clientX, e.clientY);
	}
}

if ("onmousewheel" in document)
	document.onmousewheel = mousewheel;
else
	document.addEventListener('DOMMouseScroll', mousewheel, false);
