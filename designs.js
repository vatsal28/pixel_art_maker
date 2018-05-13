// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$( "#sizePicker" ).submit(function( event ) {
  makeGrid();
  return false;
});


function makeGrid() {

var height = $("#inputHeight").val();
var weight = $("#inputWeight").val();
var color = $("#colorPicker").val();
var table = $("#pixelCanvas");
table.children().remove();

for (var i = 0; i < height; i++)
{

	table.append('<tr></tr>');
		// table.append('<td></td>');
} 

for (var j = 0; j < weight; j++) {
	$("tr").append("<td></td>");
}


$("td").mousedown(function() {
    $(this).attr('style', 'background-color:' + color);
  });


let mousestatus = false;
 
$("table").mousedown(function() {
  mousestatus = true;
  }).mouseup(function(){
             mousestatus = false;
             });
  
  $("#pixelCanvas").on("mousemove", "td", function(){
              if(mousestatus){
                $(this).css("backgroundColor", color);
              }         
    });

// Your code goes here!

}
