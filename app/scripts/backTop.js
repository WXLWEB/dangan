$(function(){
	var tophtml="<div id=\"izl_rmenu\" class=\"izl-rmenu\">" +

        "<div class=\"btn btn-top\">" +
        "<i class=\"iconfont IconTop\">&#xe600;</i>"+
        "</div>" +
        "</div>";
	$("#top").html(tophtml);
	$("#izl_rmenu").each(function(){
		$(this).find(".btn-qrcode").on({mouseover:function(){
            $(this).find(".qrcode").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".qrcode").fadeOut("fast");
        }});
        $(this).find(".btn-top").on({mouseover:function(){
            $(this).find(".top").fadeIn("fast");
        },mouseout:function(){
            $(this).find(".top").fadeOut("fast");
        }});
		$(this).find(".btn-top").click(function(){
			$("html, body").animate({
				"scroll-top":0
			},"fast");
		});
	});
	var lastRmenuStatus=false;
	$(window).scroll(function(){//bug
		var _top=$(window).scrollTop();
		if(_top>200){
			$("#izl_rmenu").data("expanded",true);
		}else{
			$("#izl_rmenu").data("expanded",false);
		}
		if($("#izl_rmenu").data("expanded")!=lastRmenuStatus){
			lastRmenuStatus=$("#izl_rmenu").data("expanded");
			if(lastRmenuStatus){
				$("#izl_rmenu .btn-top").slideDown();
			}else{
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});
