/**
 * Controller for camera functionality
 */
var cameraController =
    (function ($, cameraController) {

        /**
         * function that starts the webcam and shows the output in a video element
         *
         * @param videoId
         *   The id of the video element
         */
        function record (videoId,failFunction) {
            var video = document.getElementById(videoId),
                videoObj = { "video": true },
                errBack = function(error) {
                	alert("geen camera aanwezig. Activeer de camera en probeer opnieuw");
                    console.log("Video capture error: ", error.code);
                    if(failFunction instanceof Function){
                    	failFunction();
                    }
                };

            // Put video listeners into place
            if(navigator.getUserMedia) { // Standard
                navigator.getUserMedia(videoObj, function(stream) {
                    video.src = stream;
                    video.play();
                }, errBack);
            } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
                navigator.webkitGetUserMedia(videoObj, function(stream){
                    video.src = window.webkitURL.createObjectURL(stream);
                    video.play();
                }, errBack);
            }
            else if(navigator.mozGetUserMedia) { // Firefox-prefixed
                navigator.mozGetUserMedia(videoObj, function(stream){
                    var streamSource = window.URL.createObjectURL(stream);
                    video.src = window.URL.createObjectURL(stream);
                    video.setAttribute("src", streamSource);
                    video.play();
                }, errBack);
            }
        }

        /**
         * Add create a listener that makes a snapshot of a video when clicked
         *
         * @param triggerId
         *   The id of the element that triggers the snapshot
         * @param videoId
         *   The id of the video element
         * @param canvasId
         *   The id of the canvas element
         */
        function addSnapshotFunction(triggerId, videoId, canvasId) {

            var video = document.getElementById(videoId),
                canvas = document.getElementById(canvasId),
                context = canvas.getContext("2d"),
                picture = false;

            // The listener to take a picture
            $('#' + triggerId).on("click", function() {
                if(!picture) {
                    picture = true;
                    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight, 0, 0, canvas.width, canvas.height);
                    disableVideo(video);
                    enableCanvas(canvas);
                }
            });
        }

        /**
         * Function that makes a canvas element visible
         *
         * @param canvas
         *   The canvas element
         */
        function enableCanvas(canvas) {
            canvas.style.display = '';
        }

        /**
         * Function that removes a video element
         * @param video
         */
        function disableVideo(video) {
            video.remove();
        }

        /**
         * Create a cameraNode that can make a snapshot
         *
         * @param inputdivCount
         *   The div counter
         * @param baseX
         *   The x axes that was clicked
         * @param baseY
         *   The y axes that was clicked
         */
        cameraController.createCameraNode = function (inputdivCount, baseX, baseY) {

            var inputId = "inputdiv" + inputdivCount;
            $("<div>", {
                "id" : inputId,
                "class" : "cameraInput",
                css : {
                    "top" : container.y * -1 + baseY + "px",
                    "left" : container.x * -1 + baseX - 80 + "px",
                    "position" : "absolute"}
            }).appendTo("#container");

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
            addSnapshotFunction(inputId, videoId, snapshotCanvasId);
        };

        return cameraController;

    }(jQuery, cameraController || {}));