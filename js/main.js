$(document).on("click",".btn-default",function(){
  $(".collapse").removeClass('in');
  $(".btn-default").attr("aria-expanded","false");

  
});

$(document).on("click",".t-btn",function(){
  $(".collapse").removeClass('in');
  $(".t-btn").attr("aria-expanded","false");
  $(".t-btn").removeClass("active");
 $(this).addClass("active");
  
});


$(function() {

	$('#toolbarCollapseReplenish .tabs > div').click(function() {

		var index = $(this).index();

		$('.tab_sections > div').removeClass('active');
		$('.tab_sections > div:eq('+index+')').addClass('active');

		$('.tabs > div').removeClass('active');
		$(this).addClass('active');

		return false;
	});
});

