
// .mainVisualControll > li (0~3)

var nowIndex = -1;
var nextIndex = 0;
var maxIndex;
var timer;
var timerFlag = true;
var timerTime = 6;

$(document).ready(function(){
	maxIndex = $(".mainVisualUl li").length;
	
	setMainVisualBtns();
	setMainVisual();
	
	startTimer();
});

function startTimer() {
	timer = setInterval(function(){
		if (nowIndex == maxIndex-1) {
			nextIndex = 0;
		} else {
			nextIndex++;
		}
		
		changeImageOrigin();
	},timerTime*1000);
}

function stopTimer() {
	clearInterval(timer);
}

function setMainVisual() {
	changeImageOrigin();
}

function setMainVisualBtns() {
	$(".mainVisualUl li").find("> img").each(function(){
		$(this).attr("myOriginLeft",$(this).css("left").replace("px", ""));
		$(this).attr("myOriginTop",$(this).css("top").replace("px", ""));
	});
	
	$(".mainVisualUl li").find("> a").each(function(){
		$(this).attr("myOriginLeft",$(this).css("left").replace("px", ""));
		$(this).attr("myOriginTop",$(this).css("top").replace("px", ""));
	});
	
	$('.mainVisualControll a').bind('mouseover focus',function(){
		if($(this).parent().hasClass('intervalBtn')){return false;}
		$('.mainVisualControll a img').each(function(){
			var onSrc = $(this).attr('src');
			$(this).attr('src',onSrc.replace('_on.gif','.gif'));
		});
		var offSrc = $(this).find('img').attr('src');
		$(this).find('img').attr('src',offSrc.replace('.gif','_on.gif'));
		
		if (timerFlag == true) {
			stopTimer();
		}
	});
	
	$('.mainVisualControll a').bind('mouseout blur',function(){
		if($(this).parent().hasClass('intervalBtn')){return false;}
		
		$('.mainVisualControll a img').each(function(){
			var onSrc = $(this).attr('src');
			$(this).attr('src',onSrc.replace('_on.gif','.gif'));
		});
		
		if (timerFlag == true) {
			stopTimer();
			startTimer();
		}
	});
	
	$(".mainVisualControll a").each(function(){
		if($(this).parent().hasClass('intervalBtn')){return false;}
		
		$(this).click(function(){
			if (timerFlag == true) {
				stopTimer();
				startTimer();
			}
			
			nextIndex = $(this).parent().index();
			changeImageOrigin();
		})
	})
	
	$(".intervalBtn a").click(function(){
		if (timerFlag) {
			timerFlag = false;
			$(this).find('img').attr({
				'src':'/images/btn_controll_play.gif',
				'alt':'play'
			});
			stopTimer();
		} else {
			timerFlag = true;
			$(this).find('img').attr({
				'src':'/images/btn_controll_pause.gif',
				'alt':'pause'
			});
			stopTimer();
			startTimer();
		}
	})
}

function changeImageOrigin() {
	if (nowIndex < nextIndex) {

		$(".mainVisualUl li").eq(nowIndex).find("> img").each(function(){
			var myOriginLeft = Number($(this).attr("myOriginLeft"));
			var myOriginTop =  Number($(this).attr("myOriginTop"));
			
			$(this).animate({"top":myOriginTop-1000},500);
		});
		
		$(".mainVisualUl li").eq(nowIndex).find("> a").each(function(){
			var myOriginLeft = Number($(this).attr("myOriginLeft"));
			var myOriginTop =  Number($(this).attr("myOriginTop"));
			
			$(this).animate({"top":myOriginTop-1000},500);
		});
		
		$(".mainVisualUl li").fadeOut();
		$(".mainVisualUl li").eq(nextIndex).show();
			

		$(".mainVisualUl li").eq(nextIndex).find("> img").each(function(){
			var myOriginLeft = Number($(this).attr("myOriginLeft"));
			var myOriginTop =  Number($(this).attr("myOriginTop"));
			
			$(this).css("top",myOriginTop+1000);
			$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
		});
		
		$(".mainVisualUl li").eq(nextIndex).find("> a").each(function(){
			var myOriginLeft = Number($(this).attr("myOriginLeft"));
			var myOriginTop =  Number($(this).attr("myOriginTop"));
			
			$(this).css("top",myOriginTop+1000);
			$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
		});
	} else {
		if (nextIndex == 0 && nowIndex == maxIndex-1) {
			$(".mainVisualUl li").eq(nowIndex).find("> img").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).animate({"top":myOriginTop-1000},500);
			});
			
			$(".mainVisualUl li").eq(nowIndex).find("> a").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).animate({"top":myOriginTop-1000},500);
			});
			
			$(".mainVisualUl li").eq(nextIndex).show();
			$(".mainVisualUl li").eq(nextIndex).find("> img").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).css("top",myOriginTop+1000);
				$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
			});
			
			$(".mainVisualUl li").eq(nextIndex).find("> a").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).css("top",myOriginTop+1000);
				$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
			});
		} else {

			$(".mainVisualUl li").eq(nowIndex).find("> img").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).animate({"top":myOriginTop+1000},500);
			});
			
			$(".mainVisualUl li").eq(nowIndex).find("> a").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).animate({"top":myOriginTop+1000},500);
			});
			
			$(".mainVisualUl li").eq(nextIndex).show();

			$(".mainVisualUl li").eq(nextIndex).find("> img").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).css("top",myOriginTop-1000);
				$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
			});
			
			$(".mainVisualUl li").eq(nextIndex).find("> a").each(function(){
				var myOriginLeft = Number($(this).attr("myOriginLeft"));
				var myOriginTop =  Number($(this).attr("myOriginTop"));
				
				$(this).css("top",myOriginTop-1000);
				$(this).delay($(this).index()*50).animate({"top":myOriginTop},1000);
			});
		}
	}
	
	nowIndex = nextIndex;
}