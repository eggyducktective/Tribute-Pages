$(document).ready(function(){
  $('#search-form').on('submit', function() {
    alert('I am beary sorry, Rilakkuma is still finding himself.');
  })

  $('#articles').empty();

  $.ajax({
    url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCx_Ck1brqajWu0Or7XzHKy7nIuM5AZfMc&cx=001298698508350342078:kwhep6ux4b4&q=rilakkuma+news',
    success: function(result) {
      console.log(result.items)
      result.items.forEach(function(item){
        $('<a>', {
          href: item.formattedUrl,
          html: item.title,
          target: "_blank",
          id: 'articles'
        }).appendTo('#articles');
        $('<br>').appendTo('#articles');
      })
    }
  })

});
