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
$('.bj').height($(document).height());
$('#moreNav').on({
  click:function(){
    $('#hidden-more-nav').toggle();
    $('.bj').show();
  }
});
$
$('#hidden-more-nav a').click(function(){
  $('#hidden-more-nav').hide();
  $('.bj').hide();
});

$('#qrcode').hover(function(){
  $('#qrcode :target').toggle();
});

var index = 0;
$('.btn_r').click(function(){
  index++;
  $('.Pop_up_box ul li').eq(index-1).animate({'margin-left':'-50%'},1000).siblings().css('margin-left',0).hide();
  $('.Pop_up_box ul li').eq(index).show();
  if(index == 3){
    index = -1;
  }
});

$('.list dl dt img').click(function(){
  $('.bj').height($(document).height())
  $('.Pop_up_box').show();
  $('.bj').show();
})
$('.bj,.close-2').click(function(){
  $('.Pop_up_box').hide();
  $('.bj').hide();
  $('#hidden-more-nav').hide();
})
