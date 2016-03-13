/**
 * Created by K. Nobel on 2/9/2016.
 */

function openImageBrowser() {
    jQuery('#imageBrowse').trigger('click');
}

$(document).ready(function (e) {
    $('#myForm').on('submit',(function(e) {
        e.preventDefault();

        $.ajax({
            url: 'scripts/saveImage.php',
            type: 'POST',
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                var image = $('#result');
                if(data.substring(0, 7) == "ERROR: ") {
                    image.css("display", "none");
                    console.log(data);
                } else {
                	var ib = document.createElement('div');
					ib.className = "node";
					$(ib).data("x", (container.x * -1 + lastMousePosition[0]) * zoom);
					$(ib).data("y", (container.y * -1 + lastMousePosition[1]) * zoom);
					$(ib).data("border", 1 * zoom);
					$(ib).data("radius", 10 * zoom);
					$(ib).data("padding", 10 * zoom);
					ib.style.top = $(ib).data("y") / zoom + 'px';
					ib.style.left = $(ib).data("x") / zoom + 'px';
					ib.style.border = $(ib).data("border") / zoom + 'px solid #000000';
					ib.style.borderRadius = $(ib).data("radius") / zoom + 'px';
					ib.style.padding = $(ib).data("padding") / zoom + 'px';
					container.appendChild(ib);
					ib.focus();
                   
					var placedImage = $("<img>",{
                        "class":"image",
                        "src":data
                    }).appendTo(ib);
					
                    var img = new Image();
                    img.src = data;
                    $(img).on("load", function() {
						
						if (img.width > 150 || img.heigth > 150){
								var dimensions = calculateAspectRatioFit(img.width, img.height, 150, 150);
								$(placedImage).data("width", dimensions[0] * zoom);
								$(placedImage).data("height", dimensions[1] * zoom);
								placedImage.css("width", $(placedImage).data("width") / zoom);
								placedImage.css("height", $(placedImage).data("height") / zoom);
						} else {
							$(placedImage).data("width", img.width * zoom);
							$(placedImage).data("height", img.height * zoom);
							placedImage.css("width", $(placedImage).data("width") / zoom);
							placedImage.css("height", $(placedImage).data("height") / zoom);

						}
                    }); 
                }
            }
        })
    }));

    $('#imageBrowse').on('change', function() {
        $('#myForm').submit();
    });
});

function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    console.log("srcwidth: " + srcWidth + "\n" +
        "srcheight: " + srcHeight + "\n" +
        "maxwidth: " + maxWidth + "\n" +
        "maxheight: " + maxHeight + "\n");


    var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    console.log(ratio);


    var width = srcWidth * ratio;
    var height = srcHeight * ratio;
    console.log(width);
    return [width, height];
}