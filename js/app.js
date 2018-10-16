var listData = [];
function showData() {
  localforage.getItem('benapp').then(function(benappValue) {
    if (typeof benappValue !== 'undefined' && benappValue !== null) {
      listData = benappValue;
    }
    $("#dataVal").html(listData);
    $("#checklist").html(_.template($("#listTemplate").html(), listData));
  }).catch(function(err) {
    console.log(err);
  });
}

var listData = [
  {
    name: "one",
    checked: true
  },
  {
    name: "true",
    checked: false
  }
];

$(document).ready(function(){
  showData();
  $("#addButton").click(function() {
    var itemInputValue = $("#itemToAdd").val();

    $("#checklist").append("");

    $("#itemToAdd").val("");
    listData.push(itemInputValue);
    localforage.setItem('benapp', listData).then(function (value) {
      showData();
    }).catch(function(err) {
        console.log(err);
    });
  });

  $("#resetList").click(function() {
    $("#checklist").empty();
    $("#itemToAdd").val("");
  });

  $("body").on("click", ".listItem", function() {
    if ($(this).hasClass("grayBG")) {
      $(this).removeClass("grayBG");
    } else {
      $(this).addClass("grayBG");
      $(this).insertAfter($('#checklist').children().last());
    }
  });

  $("body").on("click", ".deleteButton", function() {
    $(this).parent().remove();
    e.stopPropagation();
  });
  //My plan was to
  //1. Use a variable doneItem to store the .listText value
  //2. Use indexof to find its position in the array
  //3. Delete the item from the array
  //4. Push the variable doneItem into the array
  //5. Save local localforage
  //6. showData
  //*** Downside of this is that an unchecked item does not move back to original position***


  $('body').on('click', '.deleteButton', function() {
    $(this).parent().remove();
    var listTextValue = $(this).parent().children('.listText').text();

});

// var listItems;
// $("#listResults").html(_.template($("#listTemplate").html(), listItems));
