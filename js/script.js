$(window).load(function () {
	$('.slides').slides({
		generatePagination: false,
		generateNextPrev: true,
		container: 'container',
		effect: 'slide',
		slidespeed: 250,
		play: 10000,
		pause: 0
	});
});
$(document).ready(function () {

	$('.b-search a').click( function(event){
		event.preventDefault();
		if ($(this).hasClass('default') ) {
			$(this).parent().find('p input').stop(true, true).animate({'left': '0'}, 500, 'easeInQuad');         
			$(this).removeClass('default');
		} else {
			$(this).parent().find('p input').stop(true, true).animate({'left': '239px'}, 500, 'easeInQuad'); 
			$(this).addClass('default');
		}
		return false;
	});

	$('.b-search p input').click(function() {
		$(this).parent().parent().children('ul').slideDown(0);
		return false;
	});
	$('.b-search ul li').click(function() {
		$(this).parent().parent().find('p input').val($(this).text());
		$(this).parent().slideUp(0);
	});

	$('.scrollable').jScrollPane({
		mouseWheelSpeed: 100,
		showArrows: true,
		autoReinitialise: true,
		autoReinitialiseDelay: 100
	});

	$('nav ul li').hover(
		function() {
			$(this).children('ul').fadeIn(150);
			$(this).addClass('active');
		},
		function() {
			$(this).children('ul').fadeOut(0);
			$(this).removeClass('active');
		}
	);
	$('nav ul li').has('ul').addClass('sub');

    function bindHoverFlux(){
        $('.slidecontainer .images div').hover(
            function() {
                $('nav, header > h1').fadeOut(0);
                var text = "";
                var text = $(this).attr('data-inform');
                $('.slide-insert').append(text);
            },
            function() {
                $('nav, h1').fadeIn(0);
                $('.slide-insert').empty();
            }
        );
    }

	bindHoverFlux();

	var sliderheight = $('.b-slider').height();
	
	
	$('nav li.show > a').bind('click', 
		function() {
			var objectid = $(this).attr('data-accessory');
			$('.object.'+objectid).fadeIn(1000);
			$('nav, header h1').fadeOut(0);
			var text = "";
			var text = $(this).attr('data-inform');
			$('.slide-insert').empty();
			$('.slide-insert').append(text);
			$('.tip-nav li.home > a, .b-logo a').bind('click', 
				function() {
					$('.slide-insert').empty();
					$('nav, header h1').fadeIn(0);
					$('.object').fadeOut(1000);
					$('.object .info').css({'left': -2*pwidth+'px'});
					$('.object .slides').css({'left': '0'});
					$('.object .slides .show').fadeIn(0);
					$('.object .slides .pagination').removeClass('active');
					return false;
				}
			);
			return false;
		}
	);
	
	$('.b-slider .images > div').bind('click', 
		function() {
			var objectid = $(this).attr('data-accessory');
			$('.object.object'+objectid).fadeIn(1000);
			var text = "";
			var text = $(this).attr('data-inform');
			$('.slide-insert').append(text);
			$('.tip-nav li.home > a, .b-logo a').bind('click', 
				function() {
					$('.slide-insert').empty();
					$('nav, header h1').fadeIn(0);
					$('.object').fadeOut(1000);
					$('.object .info').css({'left': -2*pwidth+'px'});
					$('.object .slides').css({'left': '0'});
					$('.object .slides .show').fadeIn(0);
					$('.object .slides .pagination').removeClass('active');
					return false;
				}
			);
			return false;
		}
	);

//	$('nav li.show > a.object2, #slider2 .image1').bind('click',
//		function() {
//            $('.object-fade').fadeIn(250);
//            $('.object.object1').css({'display' : 'none'}).css({left : 0}).fadeIn();
//            $('nav, header h1').fadeOut(0);
//            var text = "";
//            var text = $(this).attr('data-inform');
//            $('.slide-insert').append(text);
//            $('.tip-nav li.home > a, .b-logo a').bind('click',
//                function() {
//                    $('.object-fade').delay(0).queue(function(){ $(this).fadeOut(); $(this).dequeue(); });
//                    $('.object.object1').fadeOut().css({'left' :'-100%'}).fadeIn();
//                    $('.object.object1 .info').fadeOut().css({'left': -infowidth + 'px'}).fadeIn();
//                    $('.object.object1 .slides').fadeOut().css({'left': '0'}).fadeIn();
//                    $('.object.object1 .slides .show').fadeIn();
//                    $('.slides .pagination').removeClass('active');
//                    $('.object.object1 .slides .show').fadeIn();
//                    $('.slide-insert').empty();
//                    $('nav, header h1').fadeIn(0);
//                    return false;
//                }
//            );
//            return false;
//        }
//	);

	// Object sizes
	
	var logoposition = $('.slidewrap:first-child').width() - 68;
	$('.b-logo').css({'padding-left': logoposition + 'px'});
	var topmargin = logoposition + 250;
	$('nav, header h1').css({'margin-left': topmargin + 'px'});
	$('.slide-insert, .slide-insert2').css({'left': topmargin + 'px'});
	
	var splitter = 4;
	var pwidth = $('.object').width()*0.1;
	var pheight = $('.b-content').height()*0.33;
	
	$('.object .info').css({'left': -2*pwidth+'px', 'width': 2*pwidth+'px'});
	
	$('.object .info .opacity').css({'width': pwidth*2-34+'px'});
	
	$('.slides .container > div img.horizontal').css({'width': pwidth*5+'px'});
	$('.slides .container > div img.vertical').css({'left': pwidth*1+'px', 'width': pwidth*3+'px'});

	$('.object, .object-fade, .object .info, .object .info .scrollable, .mCSB_container, .object .slides, .object .slides .container, .object .slides .container div,  .object .slides .pagination, .slides .container > div img').css({'height': pheight*3-splitter+'px'});
	$('.object .slides .container, .object .slides .container div').css({'width': pwidth*5+'px'});
	$('.slides ul.pagination').css({'left': pwidth*5+'px', 'margin-left': splitter+2+'px', 'margin-top': 0+'px'});
	
	// 3 previews
	
	$('.slides ul.pagination.size3 li.img1 img.big').css({'width': pwidth*3-splitter+'px', 'height': pheight*3-splitter+'px'});
	$('.slides ul.pagination.size3 li.img2 img.big').css({'left': pwidth*3+'px', 'width': pwidth*2+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size3 li.img3 img.big').css({'left': pwidth*3+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size3 li.img1 img.small').css({'width': pwidth*3+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size3 li.img2 img.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size3 li.img3 img.small').css({'left': pwidth+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	
	// 5 previews
	
	$('.slides ul.pagination.size5 li.img1 img.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img2 img.big').css({'left': pwidth*2+'px', 'width': pwidth*3+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img3 img.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img4 img.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img5 img.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size5 li.img1 img.small').css({'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size5 li.img2 img.small').css({'left': pwidth*2+'px', 'width': pwidth+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img3 img.small').css({'left': pwidth*2+'px', 'top': pheight-splitter+'px', 'width': pwidth+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img4 img.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight+'px'});
	$('.slides ul.pagination.size5 li.img5 img.small').css({'left': pwidth+'px', 'top': pheight*2+'px', 'width': pwidth*2+'px', 'height': pheight-splitter+'px'});
	
	// 7 previews
	
	$('.slides ul.pagination.size7 li.img1 img.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img2 img.big').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img3 img.big').css({'left': pwidth*3+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size7 li.img4 img.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size7 li.img5 img.big').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img6 img.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img7 img.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img1 img.small').css({'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img2 img.small').css({'left': pwidth+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img3 img.small').css({'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img4 img.small').css({'left': pheight+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img5 img.small').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img6 img.small').css({'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size7 li.img7 img.small').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	
	// 9 previews
	
	$('.slides ul.pagination.size9 li.img1 img.big').css({'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img2 img.big').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img3 img.big').css({'left': pwidth*3+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img4 img.big').css({'top': pheight+'px', 'width': pwidth*2-splitter+'px', 'height': pheight*2-splitter+'px'});
	$('.slides ul.pagination.size9 li.img5 img.big').css({'left': pwidth*2+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img6 img.big').css({'left': pwidth*3+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img7 img.big').css({'left': pwidth*4+'px', 'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img8 img.big').css({'left': pwidth*2+'px', 'top': pheight*2+'px', 'width': pwidth*2-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img9 img.big').css({'left': pwidth*4+'px', 'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img1 img.small').css({'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img2 img.small').css({'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img3 img.small').css({'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img4 img.small').css({'top': pheight+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img5 img.small').css({'top': pheight+'px', 'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img6 img.small').css({'top': pheight+'px', 'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img7 img.small').css({'top': pheight*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img8 img.small').css({'top': pheight*2+'px', 'left': pwidth+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	$('.slides ul.pagination.size9 li.img9 img.small').css({'top': pheight*2+'px', 'left': pwidth*2+'px', 'width': pwidth-splitter+'px', 'height': pheight-splitter+'px'});
	
	$('.object .slides .show').click(
		function() {
			$(this).parents('.object').find('.info').animate({left:'0'}, 500, 'easeOutQuint');
			$(this).parents('.object').find('.slides').animate({'left': 2*pwidth+'px'}, 500, 'easeOutQuint');
			$(this).parents('.object').find('.slides .show').fadeOut(250);
			$(this).parents('.object').find('.pagination').delay(300).queue(function(){ $(this).toggleClass('active'); $(this).dequeue(); });
		}
	);
	
	$('.object .info .slidehide').click(
		function() {
			$(this).parents('.object').find('.info').animate({'left': -2*pwidth+'px'}, 500, 'easeInQuint');
			$(this).parents('.object').find('.slides').animate({'left': '0'}, 500, 'easeInQuint');
			$(this).parents('.object').find('.slides .show').fadeIn(250);
			$(this).parents('.object').find('.pagination').removeClass('active');
		}
	);
	var scrolldrag = $('.jspVerticalBar').height() - 12;
	$('.jspVerticalBar').css({'height': 'scrolldrag'});
	
	var navigationleft = $('.b-history .column1').width();
	$('.navigation').css({'left': '20%'});
	
	
    // count a size of all elements
    var documentWidth = Math.floor($(document).width());
    var documentHeight = Math.floor(documentWidth/3.2);

    $('.b-history').css({width : documentWidth, height: + documentHeight});

    var column1Width;
    var column2Width;
    var column3Width;

    column1Width = Math.floor( documentWidth / 10 * 2) - splitter;
    column3Width = Math.floor( documentWidth / 10 * 3) - splitter;
    column2Width = Math.floor( documentWidth / 10 * 5) - splitter;

    $('.column1').css({width:column1Width, height: documentHeight});
    $('.column2').css({width:column2Width, height: documentHeight});
    $('.column3').css({width:column3Width, height: documentHeight});


    $('.sliderwrap').css({width:column3Width});


    $('.column1').children('img').css({width:column1Width, height: documentHeight});
	
	
	var swidth = Math.floor( documentWidth / 10);
	var sheight = Math.floor (documentHeight / 3) + 2;
	
	$('.column1 .stage1').css({'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage2').css({'left': swidth+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage3').css({'top': sheight+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage4').css({'left': swidth+'px', 'top': sheight+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage5').css({'top': sheight*2+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});
	$('.column1 .stage6').css({'left': swidth+'px', 'top': sheight*2+'px', 'width': swidth-splitter+'px', 'height': sheight-splitter+'px'});


    // load mCustomScrollBar if it must be here
    if($('.column2').length>0){
        $('.column2').mCustomScrollbar({
            theme:"dark",
            scrollButtons:{
                enable:true
            },
            callbacks:{
                whileScrolling:function(){
                    scrolling();
                }
            }

        });
    }

    // load flexslider if it must be here
    if($('#b-slider-history').length>0){
        $('#b-slider-history').flexslider();
    }
    if($('#b-slider-history2').length>0){
        $('#b-slider-history2').flexslider();
    }
    if($('#b-slider-history3').length>0){
        $('#b-slider-history3').flexslider();
    }
    if($('#b-slider-history4').length>0){
        $('#b-slider-history4').flexslider();
    }
    if($('#b-slider-history5').length>0){
        $('#b-slider-history5').flexslider();
    }
    if($('#b-slider-history6').length>0){
        $('#b-slider-history6').flexslider();
    }
    // функции перемотки слайдеров
    var myoffset = 1;
    var countofsliders; //сколько всего слайдеров
    var downoffset; // счетчик для прокрутки вниз
    countofsliders = $('div[data-isslider="1"]').length;

    $('.up').bind("click", function(){
        if(myoffset<countofsliders){
            $('#b-slider-history').animate({"margin-top" : "-" + documentHeight * myoffset + "px"}, 300);
            myoffset = myoffset + 1;
        }
        console.log('после сдвига вверх офсет стал ' + myoffset);
    });
    $('.down').bind("click", function(){
        downoffset=countofsliders-myoffset;
        console.log(documentHeight * myoffset-documentHeight);
        if(myoffset===1){

        }else{
            $('#b-slider-history').animate({"margin-top" : "-"+ (documentHeight * myoffset-(documentHeight*2)) + "px"}, 300);
            myoffset = myoffset-1;
            console.log('после сдвига вниз офсет стал ' + myoffset);
        }


    });

    //ищем позицию span-a
    $('.there').bind('click', function(){
        console.log('Положение спанчика ' + $('.a').offset().top);
        console.log('Положение родителя ' + $('.column2').offset().top);

    });

    //перелистываем слайдеры

    function scrolling(){
	
		if ($('.column2').hasClass('active1')) {
			if($('.a').offset().top>302 && $('.a').offset().top>=301){
				$('#b-slider-history').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active1');
			}
		}
		else {
			if($('.a').offset().top<300 && $('.a').offset().top<=301){
				$('#b-slider-history').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active1');
			}
		}

		if ($('.column2').hasClass('active2')) {
			if($('.b').offset().top>302 && $('.b').offset().top>=301){
				$('#b-slider-history2').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active2');
			}
		}
		else {
			if($('.b').offset().top<300 && $('.b').offset().top<=301){
				$('#b-slider-history2').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active2');
			}
		}

		if ($('.column2').hasClass('active3')) {
			if($('.c').offset().top>302 && $('.c').offset().top>=301){
				$('#b-slider-history3').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active3');
			}
		}
		else {
			if($('.c').offset().top<300 && $('.c').offset().top<=301){
				$('#b-slider-history3').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active3');
			}
		}

		if ($('.column2').hasClass('active4')) {
			if($('.d').offset().top>302 && $('.d').offset().top>=301){
				$('#b-slider-history4').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active4');
			}
		}
		else {
			if($('.d').offset().top<300 && $('.d').offset().top<=301){
				$('#b-slider-history4').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active4');
			}
		}

		if ($('.column2').hasClass('active5')) {
			if($('.e').offset().top>302 && $('.e').offset().top>=301){
				$('#b-slider-history5').animate({"margin-top" : "0"}, 300);
				$('.column2').removeClass('active5');
			}
		}
		else {
			if($('.e').offset().top<300 && $('.e').offset().top<=301){
				$('#b-slider-history5').animate({"margin-top" : "-" + documentHeight + "px"}, 300);
				$('.column2').addClass('active5');
			}
		}

    }
	
	$('.history-stages .stage1').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.a');
	});
	$('.history-stages .stage2').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.b');
	});
	$('.history-stages .stage3').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.c');
	});
	$('.history-stages .stage4').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.d');
	});
	$('.history-stages .stage5').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.e');
	});
	$('.history-stages .stage6').click(function() {
		$('.column2').mCustomScrollbar('scrollTo', 'span.year.f');
	});
	

});