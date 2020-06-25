
$('#search').keyup(function() {
  const $searchInput = $('#search').val().toLowerCase();

   $('a').each(function() {
     let $caption = $(this).attr('data-title').toLowerCase();
     
     if ($caption.indexOf($searchInput) > -1) {
         $(this).parent().show();
     } else {
         $(this).parent().hide();
     }
   });
});

lightbox.option({
    'resizeDuration': 500,
    'fadeDuration': 900,
    'showImageNumberLabel': false,
    'maxWidth': 1000,
});
