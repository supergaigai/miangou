// JavaScript Document


	$(document).ready(function(){
		showDepth2Fn();
		changeDepth2Img();
		$('.closeDepth2').click(function(){
			resetDepth2();
			$('.goMallBtn').focus();
			return false;
		});
		$('#gnb h1 a,.goMallBtn').focus(function(){
			resetDepth2();
		});

	});

	function showDepth2Fn(){
		$('.depth1>a').bind('focus mouseover',function(){
			$('.depth2Ul a').each(function(){
				$(this).removeClass('on');
			});
			$(this).next().find('li').eq(0).find('a').addClass('on');
			$('#header').css('background','url(images/bg_header_on.gif) 0 0 repeat-x'); 
			$('.depth1 .menu1 img').each(function(){
				var menu1Onsrc = $(this).attr('src');
				$(this).attr('src',menu1Onsrc.replace('_on.gif','_off.gif'));
			});
			var offSrc = $(this).find('img').attr('src');
			$(this).find('img').attr('src',offSrc.replace('_off.gif','_on.gif'));
			showDepth2All();
		});
	}

	function showDepth2All(){
		$('.depth2background,.depth2Ul,.closeDepth2').show();
	}
	function changeDepth2Img(){
		$('.depth2Ul a').bind('focus mouseover',function(){
			var depth2Index = $(this).parentsUntil('.depth1').parent().index();
			$('.depth1 .menu1 img').each(function(){
				var menu1Onsrc = $(this).attr('src');
				$(this).attr('src',menu1Onsrc.replace('_on.gif','_off.gif'));
			});
			$('.depth1').eq(depth2Index).find('.menu1 img').attr('src',$('.depth1').eq(depth2Index).find('.menu1 img').attr('src').replace('_off.gif','_on.gif'));
			$('.depth2Ul a').each(function(){
				$(this).removeClass('on');
			});
			$(this).addClass('on');
		});
	}

	function resetDepth2(){
		$('.depth1 .menu1 img').each(function(){
			var menu1Onsrc = $(this).attr('src');
			$(this).attr('src',menu1Onsrc.replace('_on.gif','_off.gif'));
		});
		$('.depth2background,.depth2Ul,.closeDepth2').hide();
		$('#header').css('background','url(images/bg_header.gif) 0 0 repeat-x');
		setPage();
	}

	$(document).bind('mouseover', function(e) {
		var $clicked = $(e.target);
		if (! $clicked.parents().hasClass("gnbNavi")){
			resetDepth2();
		}
	});
	function setPage() { 
	
	
		var hn= parseInt($('#container').attr('tag'));
		var ha= parseInt();
		if (hn>6){
			return false;
		}else if (ha>=0){
			return false;
		}else{
			$('.depth1Ul').find('.depth1').eq((hn)).find('.menu1 img').attr('src',$('.depth1Ul').find('.depth1').eq((hn)).find('.menu1 img').attr('src').replace('_off.gif','_on.gif'));
		}
	}
	function setTitle(arg) {
		var convertObj = function(obj) {
			$.each(obj, function(key, val) {
				if(val == "") {
					var value = -1;
				} else {
					var value = Number(val);
				}
				eval("obj." + key+"=" + value);
			});
		}
		convertObj(arg);

	}
