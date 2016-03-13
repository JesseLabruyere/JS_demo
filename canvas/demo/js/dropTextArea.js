/**
 * The plugin for drag and drop files to web application
 *
 * Based on script of: Lukasz Sudol
 */

function dropTextFile (inputdivCount) {
	
'use strict';
			
	// Disables behaviour of the standard dragover function in the users browser
    $('#'+inputdivCount).on('dragover', function(e) {
		
		e.preventDefault();
        return false;
		
    });
	
	// Disables behaviour of the standard dragend function in the users browser
    $('#'+inputdivCount).on('dragend', function(e) {
        
		e.preventDefault();
        return false;
		
    });
	
	// Disables behaviour of the standard drop function in the users browser
	$('#'+inputdivCount).on('drop', function(e) {
			
		// Loads function and adds two parameters.
        loadFileContent(e,inputdivCount);
		
    });

}

 function loadFileContent(e, inputdivCount) {
		
        e.preventDefault(); // Disables standard function of browser.
		
		var files = e.originalEvent.dataTransfer.files; // Gets the files.
        var file, fileData, fileReader;

		// If there are no files, or something is wrong, the script will stop.
        if (!files) {
            return;
        }

		// Loops trough all files (so you can add multiple documents at the same time).
        for (var i = 0; i < files.length; i++) {
			
			// Gets the current file.
            file = files[i];

			// Create a new instance for every file that is dragged into a textArea.
            fileReader = new FileReader();

			// Adds the content of every textfile to the right textarea.
            fileData = function () {
                $('#'+inputdivCount)[0].value += this.result;
            };

			// excecutes the functions to add the filecontent to the textarea.
            fileReader.addEventListener('loadend', fileData);
            fileReader.readAsText(file);
			
        }
    }