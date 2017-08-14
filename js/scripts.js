$(document).ready(function(){
  $("#grocery").submit(function(event) {
    var addItem = $("input#items").val();
    var groceryItems = addItem.split(", ");

    event.preventDefault();
    groceryItems.sort();
    var sortedList = groceryItems.map(function(groceryItem) {
      $("#listItems").append("<li>" + groceryItem.toUpperCase() + "</li>");
      });
    $("#grocery").hide();
  });
});
