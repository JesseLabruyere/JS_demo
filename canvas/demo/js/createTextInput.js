'use strict';

//var inputdivCount = 0;

//inputdivCount += 1;
function showhideUndoRedoStack(inputdivCount){

	$(document).on("mousedown","#inputdiv"+inputdivCount,function(){

		$("#stackDiv"+inputdivCount).css({"display":"block"});


	});
	$(document).on("mousedown",function(event){
		var $target = $(event.target).attr("id");

		if($target != "redo"+inputdivCount && $target != "undo"+inputdivCount && $target != "delete"+inputdivCount && $target != inputdivCount ){

			$("#stackDiv"+inputdivCount).css({"display":"none"});


		}

	});

}

function deleteTextInput(inputdivCount) {
	$("#inputdiv" + inputdivCount).remove();
	$("#stackDiv" + inputdivCount).remove();
}

function createTextInput(inputdivCount, baseX, baseY) {

		var tb = document.createElement('div');
		tb.className = "node textNodeClass";
		tb.id = "inputdiv" + inputdivCount;
		$(tb).data("x", (container.x * -1 + baseX - 80) * zoom);
		$(tb).data("y", (container.y * -1 + baseY) * zoom);
		$(tb).data("border", 1 * zoom);
		$(tb).data("radius", 10 * zoom);
		$(tb).data("padding", 3 * zoom);
		tb.style.top = $(tb).data("y") / zoom + 'px';
		tb.style.left = $(tb).data("x") / zoom + 'px';
		tb.style.border = $(tb).data("border") / zoom + 'px solid #000000';
		tb.style.borderRadius = $(tb).data("radius") / zoom + 'px';
		tb.style.padding = $(tb).data("padding") / zoom + 'px';
		container.appendChild(tb);
		tb.focus();

		var ta = document.createElement('textarea');
		ta.className = "text";
		ta.id = inputdivCount;

		$(ta).data("size", 13 * zoom);
		ta.style.fontSize = $(ta).data("size") / zoom + 'px';
		tb.appendChild(ta);
		ta.focus();

	$("<div>",{
		"id" : "stackDiv"+inputdivCount,
		"class" : "stackDivClass",


	}).appendTo("#inputdiv"+inputdivCount);

	$("<ul>",{

		"id" : "stackDivList"+inputdivCount,
		css : {



		}

	}).appendTo("#stackDiv"+inputdivCount);


	$("<li>", {

		"href" : "javascript:void(0)",
		"id" : "undo"+inputdivCount,
		"class" : "noselect stackButton stackButtonUndo"

	}).appendTo("#stackDivList"+inputdivCount+"");

	$("<li>", {

		"href" : "javascript:void(0)",
		"id" : "redo"+inputdivCount,
		"class" : "noselect stackButton stackButtonRedo"

	}).appendTo("#stackDivList"+inputdivCount+"");

	$("<li>", {

		"href" : "javascript:void(0)",
		"id" : "delete"+inputdivCount,
		"class" : "noselect stackButton stackButtonDelete"

	}).appendTo("#stackDivList"+inputdivCount+"");

	showhideUndoRedoStack(inputdivCount);

	$("textarea").click(function(e) {

		var setEditorContents = function(contents) {

			$('#'+e.target.id).val(contents);
		};


		var history = new SimpleUndo({
			maxLength: 200,
			provider: function(done) {
				done($('#'+e.target.id).val());
			},
			onUpdate: function() {
				//onUpdate is called in constructor, making history undefined
				if (!history) return;
			}
		});
		console.log(history);

		$('#undo' + e.target.id).click(function() {
			history.undo(setEditorContents);
		});
		$('#redo' + e.target.id).click(function() {
			history.redo(setEditorContents);
		});
		$('#delete' + e.target.id).click(function() {
			deleteTextInput(e.target.id);
		});
		$('#' + e.target.id).keyup(function() {
			console.log(history);
			history.save();
		});

	});
}