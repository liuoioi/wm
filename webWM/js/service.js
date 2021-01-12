$(function(){

	function setScroll(){
		var win = $(window);
		var hWin = win.height();
		var wWin = win.width();
		var scroll = win.scrollTop();

		var move = $(".big, .service-list");


		move.each(function(){
			var tCont = $(this).offset().top;

			if(scroll > tCont - hWin*0.9){
				$(this).addClass("show");
			}

		})
	}


	//$(window).load(function(){
	//	$("#loading").addClass("show").delay(800).fadeTo(10,1,function(){
	//		$(".loading").addClass("show").delay(800).fadeTo(500,1,function(){
	//			$(".loading").removeClass("show").fadeTo(1000,0,function(){
	//				$("#loading").removeClass("show").delay(500).fadeOut(1000,function(){
	//					setScroll(); 
	//				});
	//			});
	//		});
	//	});
	//})

	$(window).load(function(){
		setScroll();
		$(".scrolldown").addClass("open");
	})

	$(window).scroll(function(){
		setScroll(); 
		$(".scrolldown").removeClass("open");
	})

	


})

