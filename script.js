$(document).ready(function() {
$('#button').click(function() {
    var toAdd = $('input[name=checkListItem]').val();
$('.list').append('<div class ="item">'+ toAdd + " " + '<div class = "buttonremove"> Remove  </div>' + '</div>');

    });

$(document).on('click','.buttonremove',function() {
    $(this).parents('.item').remove();
});
});