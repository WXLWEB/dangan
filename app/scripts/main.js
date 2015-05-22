$('.filesDetail').click(function(){
  $('#myTab li').removeClass('active');
});
$('.filesDetail').click(function(){
  $('#myTab li').removeClass('active');
});
  $(".choose").change(function () {
    $(".price").html($(this).find("option:selected").val() * 300 + 50);
  });
  $(".choose").change(function () {
    $(".dan_price").html($(this).find("option:selected").val() * 300 );
  });
$(".fileText").each(function(i){
  var divH = $(this).height();
  var $p = $("p", $(this)).eq(0);
  while ($p.outerHeight() > divH) {
    $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
  }
});
$(window).resize(function(){
  $(".fileText").each(function(i){
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
      $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
    }
  });
});

$('#SecondNav a').click(function(){
  $('navbar-collapse').removeClass('in');
});
console.log($('#myTab li:hidden').html());
$('#moreNav').on({
  click:function(){
    $('#hidden-more-nav').toggle();
  }
});

$('#qrcode').hover(function(){
  $('#qrcode :target').toggle();
});
console.log($('#myTab li:hidden').html());

