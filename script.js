$(document).ready(function () {

	//changing the color of the input box while hovering
	$("input").focus(function(){
        $("input").css({
            'outline-color':'green',
            'background-color':'white'
            });
    });


	$("#btn").on('click', function () {
		//getting input value of the box and storing in a variable.
		var item = $("input").val();
		
		//check whether box has a value or not.
		//if the box has no value it'll alert to enter some value.
		if(item.length == 0){
			alert("please enter something");
		}
		//if box have value means then it'll added to the list.
		else{
			var printedItem = $("ol").append("<li>" + item + "&nbsp; &nbsp;" + "<i id='dlt' class='fa fa-trash-o' aria-hidden='true'></i>" + "</li>");
			$('input').val('');
		}


		//removing parent element of the delete button.
		$("#list").on('click','#dlt',function () {
			$(this).parent().remove();
		});
		
	});
	//sorting facility for list items
	$("ol").sortable();


    
});

