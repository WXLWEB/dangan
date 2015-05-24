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
$('#myTab li').each(function (i){
  //dom方法
  var node = $(this);
  //alert(this.value);
  if( $(this).is(':visible')){
    console.log( $(this).html());
  }

});
console.log($('#myTab li').last().is(':hidden'));

$('#moreNav').on({
  click:function(){
    $('#hidden-more-nav').toggle();
  }
});
$('#hidden-more-nav a').click(function(){
  $('#hidden-more-nav').hide();
});

$('#qrcode').hover(function(){
  $('#qrcode :target').toggle();
});

