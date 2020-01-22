$(function(){

    var $gnb = $('#header .gnb > li'),
        $btn_notice = $('.notice_info');
       

    //table css
    $('.even_tb tr th:even').css('background','#f9f8f8');

    if($('.aws_page_wrap').length > 0){
        $('#header').css('min-width','1920px');
        $('#footer').css('min-width','1920px');
    }else{
        $('#header').css('min-width','1420px');
        $('#footer').css('min-width','1420px');
    }

    //gnb
    $gnb.on({
        'mouseenter':function(){
            var $g_sub = $(this).find('.gshow'),
                sub_w = $g_sub.outerWidth(),
                cal_w = sub_w/2,
                h2_w = $(this).find('a').outerWidth(),
                h2_s = h2_w/2;
            
            $(this).find('.gshow').css('margin-left', -(cal_w-h2_s));
            $g_sub.stop().fadeIn('fast');
        },
        'mouseleave':function(){
            var $g_sub = $(this).find('.gshow');
            $g_sub.stop().fadeOut('fast');
        }
    })

    //notice bubble
    $btn_notice.on({
        'mouseenter':function(e){
            $(this).children('.ly_notice').css('display','block');
        },
        'mouseleave':function(event){
            $(this).children('.ly_notice').css('display','none');
        }
    })

    //scrollbar
    $('.detail_list ul, .cont_box .total_area, .message_box, .tb_inner').niceScroll({
        cursorcolor: "#d3d4d9",
        cursorwidth: "3px",
        cursorborder: "1px solid #d3d4d9", 
        
    });

    //select
    $('.date_select').SumoSelect({
        floatWidth : 124,
    });

    $('.account_select').SumoSelect({
        placeholder: 'ACCOUNT',
    });

    $('.product_select').SumoSelect({
        placeholder: 'PRODUCT',
    });

    $('.graph_type_select').SumoSelect({
        placeholder: '누적그래프',
    });
    
    /***** layer popup *****/
    //button
    $('#btn_qna, .btn_notice_more, .btn_member_info').on({
		'click':function(e){
            e.preventDefault();
            var idName = $(this).attr('id');
            console.log(idName);
			var lySj = '.ly_pop_wrap';
            lyPopup(lySj);

            if(idName == "btn_qna"){
                $(".qna_view").css("dispay","block");
            }
		}
    });
    
    $('.btn_qna_reg').on({
		'click':function(e){
			e.preventDefault();
			var lySj = '.ly_pop_wrap2';
			lyPopup2(lySj);
		}
    });
    
    $('.btn_account_reg').on({
		'click':function(e){
			e.preventDefault();
			var lySj = '.ly_account_reg';
			lyPopup3(lySj);
		}
    });
    
    //popup1
	function lyPopup(prm){
        var window_w = $(window).innerWidth(),
            window_h = $(window).innerHeight();

        if(window_w <= 1000){
            $('.ly_pop_wrap').css({
                'width': window_w
            });
        }else{
            $('.ly_pop_wrap').css({
                'width': '1000px'
            });
        }
        
        if(window_h <= 800){
            $('.ly_pop_wrap').css({
                'height': window_h
            });
        }else{
            $('.ly_pop_wrap').css({
                'height': '800px'
            });
        }

		$(prm).css({
			'position': 'fixed',
			'left': '50%',
			'top': '50%'
		});
	
		$(prm).css({
			'margin-left': -$(prm).outerWidth() / 2 + 'px',
			'margin-top': -$(prm).outerHeight() / 2 + 'px'
		});
	
		$(prm).show();
		$('.ly_dim').addClass('on');
	}
	
    //popup2
    function lyPopup2(prm){
        var window_w = $(window).innerWidth(),
            window_h = $(window).innerHeight();

        if(window_w < 780){
            $('.ly_pop_wrap2').css({
                'width': window_w
            });
        }
        
        if(window_h < 670){
            $('.ly_pop_wrap2').css({
                'height': window_h
            });
        }

		$(prm).css({
			'position': 'fixed',
			'left': '50%',
			'top': '50%'
		});
	
		$(prm).css({
			'margin-left': -$(prm).outerWidth() / 2 + 'px',
			'margin-top': -$(prm).outerHeight() / 2 + 'px'
		});
	
		$(prm).show();
		$('.ly_dim2').addClass('on');
    }
     
	//popup3 (normal)
    function lyPopup3(prm){
        var window_w = $(window).innerWidth(),
            window_h = $(window).innerHeight();

		$(prm).css({
			'position': 'fixed',
			'left': '50%',
			'top': '50%'
		});
	
		$(prm).css({
			'margin-left': -$(prm).outerWidth() / 2 + 'px',
			'margin-top': -$(prm).outerHeight() / 2 + 'px'
		});
	
		$(prm).show();
		$('.ly_dim').addClass('on');
	}
    
    //resize
	$(window).resize(function() {
        var window_w = $(window).innerWidth(),
            window_h = $(window).innerHeight();

        $('.ly_pop_wrap').css({
            'position': 'fixed',
            'left': '50%',
            'top': '50%',
        });
        
		$('.ly_pop_wrap2').css({
			'position': 'fixed',
			'left': '50%',
            'top': '50%',
        });

        
        if(window_w <= 1000){
            $('.ly_pop_wrap').css({
                'width': window_w
            });
        }else{
            $('.ly_pop_wrap').css({
                'width': '1000px'
            });
        }
        
        if(window_h <= 800){
            $('.ly_pop_wrap').css({
                'height': window_h
            });
        }else{
            $('.ly_pop_wrap').css({
                'height': '800px'
            });
        }

        if(window_w < 780){
            $('.ly_pop_wrap2').css({
                'width': window_w
            });
        }else{
            $('.ly_pop_wrap2').css({
                'width': '780px'
            });
        
        }
        
        if(window_h < 670){
            $('.ly_pop_wrap2').css({
                'height': window_h
            });
        }else{
            $('.ly_pop_wrap2').css({
                'height': '670px'
            });
        }

        $('.ly_pop_wrap').css({
			'margin-left': -$('.ly_pop_wrap').outerWidth() / 2 + 'px',
			'margin-top': -$('.ly_pop_wrap').outerHeight() / 2 + 'px'
        });
        
		$('.ly_pop_wrap2').css({
			'margin-left': -$('.ly_pop_wrap2').outerWidth() / 2 + 'px',
			'margin-top': -$('.ly_pop_wrap2').outerHeight() / 2 + 'px'
        });
    });

    //close button
    $('.btn_ly_close').on({
		'click':function(e){
			e.preventDefault();
			$(this).parent().parent().hide();
			$('.ly_dim').removeClass('on');
		}
    });

    $('.btn_ly_close2').on({
		'click':function(e){
			e.preventDefault();
			$(this).parent().parent().hide();
			$('.ly_dim2').removeClass('on');
		}
    });

   
    //toggle
    $('.tb_cont_tit, .tg_cont_tit, .tg_cont_detail_tit').on({
        'click':function(){
            if($(this).siblings().length > 0){
                $(this).siblings().show();
                //snb height
                var aws_h = $('.aws_content').innerHeight(),
                    footer_h = $('#footer').innerHeight();
                $('.snb_wrap').css('height', aws_h+footer_h);

                if($(this).hasClass('on')){
                    $(this).removeClass('on');
                    $(this).siblings().hide();
                    //snb height
                    var aws_h = $('.aws_content').innerHeight(),
                        footer_h = $('#footer').innerHeight();
                    $('.snb_wrap').css('height', aws_h+footer_h);
                }else{
                    $(this).addClass('on');
                }
                
            }else{
               
            }
            
        }
    });

    //tab
    var tab = $('.report_toggle_wrap .tab_box li');
    var cont =  $('.report_toggle_wrap .toggle_box');

    cont,tab.each(function(){
        var idx = $(this).index()-1;
        idx++;

        $(this).click(function(e){
            e.preventDefault();
            cont.hide().eq(idx).show();
            tab.removeClass('active');
            tab.eq(idx).addClass('active');
            //snb height
            var aws_h = $('.aws_content').innerHeight(),
                footer_h = $('#footer').innerHeight();
            $('.snb_wrap').css('height', aws_h+footer_h);
        });

    });
    cont.eq(0).show();
    tab.eq(0).addClass('active');

    if($('.pay_report_cont .in_box.report2').length > 0){
        $( '.pay_report_cont .in_box .tit_area h5').text( '총합' );
    }else{
        $( '.pay_report_cont .in_box .tit_area h5').text( '예상총액' );
    }

});

//snb height
$('.aws_content').ready(function(){
    var aws_h = $('.aws_content').innerHeight(),
        footer_h = $('#footer').innerHeight();

    $('.snb_wrap').css('height', aws_h+footer_h);
});


