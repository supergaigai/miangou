
$(function(){
	$("#menupan").hide();
	var boardList = $("div.bx_list table.list");
	boardList.find("tr:last-child").addClass("last");

	$("input.fileStyle").filestyle({ 
          image: "/images/common/btn_file.gif",
          imageheight : 20,
          imagewidth : 61,
          width : 147
	});


	$("#floatTop").hide();

	
});


function lineMap(i){ 
	var lineMapW = $("#linemap");
	var lineMap = $("#linemapSwf");
	lineMapW.height(i);
	lineMap.height(i);
}

//ie6 min-width bug fix
function minWidth(){
   /* var dWidth = $(document).width();
    if(dWidth <= 1000){
        $("body.sub").addClass("min");
        $("#header").addClass("header_min");
        $("#footer").addClass("footer_min");
    }else{
        $("body.sub").removeClass("min");
        $("#header").removeClass("header_min");
        $("#footer").removeClass("footer_min");
    }*/
}
function uiRefresh(){ 
	/*if( navigator.appName.indexOf("Microsoft") > -1 ){
		if( navigator.appVersion.indexOf("MSIE 6") > -1){
			minWidth();
	   }
	}*/
}


function playRollHot(){
	var playRepeatTime = 4000; 
	setInterval(function(){
			btnRollHot(1,0);
	},playRepeatTime);
	return false;
	
}

function btnRollHot(i,f){
	var rollWrap = $("#rollBanner"); 
	var roller = $("#wrapBanner");
	var btnL = $("#rollBtnL");
	var btnR = $("#rollBtnR");
	if(i==0){
		if(roller.is(':animated')){
			return;
		}else{
			roller.find(">li").eq(0).clone().appendTo(roller);
			roller.animate({left: "-196px"}, {duration: 300, complete: function() {
					roller.find(">li").eq(0).remove();
					roller.css("left","0");
				}
			});
		}
	}else if(i==1){
		if(roller.is(':animated')){
			return;
		}else{
			roller.find(">li:last").clone().prependTo(roller);
			roller.css("left", "-196px");
			roller.animate({left:"0"}, {duration: 300, complete: function() {
					roller.find(">li:last").remove();
				}
			});
		}
	}else{
		return;	
	}
}
//function btnRollHot(i,f){
//	var rollWrap = $("#rollBanner"); 
//	var roller = $("#wrapBanner");
//	var btnL = $("#rollBtnL");
//	var btnR = $("#rollBtnR");
//	if(i==0){
//		if(roller.is(':animated')){
//			return;
//		}else{
//			roller.find(">li").eq(0).clone().appendTo(roller);
//			roller.animate({left: "-196px"}, {duration: 300, complete: function() {
//					roller.find(">li").eq(0).remove();
//					roller.css("left","0");
//				}
//			});
//			if(f==1){
//				resetTimer = true;
//				playRollHot();
//			}else{
//				return;
//			}
//		}
//	}else if(i==1){
//		if(roller.is(':animated')){
//			return;
//		}else{
//			roller.find(">li:last").clone().prependTo(roller);
//			roller.css("left", "-196px");
//			roller.animate({left:"0"}, {duration: 300, complete: function() {
//					roller.find(">li:last").remove();
//				}
//			});
//			if(f==1){
//				resetTimer = true;
//				playRollHot();
//			}else{
//				return;
//			}
//		}
//	}else{
//		return;	
//	}
//}


function tabList(ele, active){
	var ele = document.getElementById(ele);
	if(active === undefined) active = 0;						

	var btn = ele.getElementsByTagName("*");
	for(var i=0; i<btn.length; i++){
		if(btn[i].className.indexOf('tabtit') != -1){
			btn = btn[i].nodeName;
			btn = ele.getElementsByTagName(btn);
			break;
		}
	}
	
	var layerName = btn[0].getElementsByTagName("A")[0].href.split("#")[1];
	layerName = layerName.slice(0, layerName.length-1);
	
	for(var i=0; i<btn.length; i++){
		ele["target" + i] = document.getElementById(layerName + (i+1)); // 노드저장 예) tab1, tab2, tab3
		ele["a" + i] = btn[i].getElementsByTagName("A")[0]; // 탭링크
		ele["img" + i] = btn[i].getElementsByTagName("IMG")[0]; // 이미지노드 저장
		btn[i].style.position = "absolute"; // 제목레이어 적용
	}
	
	/* 사회공헌 탭 */
	var oldActive = active

	for(var i=0; i<btn.length; i++){
		if (typeof(ele["a" + i]) !== "undefined"){
			ele["a" + i].cnt = i;
			ele["a" + i].onclick = function menuActive(){
				ele["target" + oldActive].style.display = "none";
				ele["img" + oldActive].src = ele["img" + oldActive].src.replace("_over", "_out");
				
				ele["target" + this.cnt].style.display = "block";
				ele["img" + this.cnt].src = ele["img" + this.cnt].src.replace("_out", "_over");
				oldActive = this.cnt;
				// 연혁 페이지에서 리사이즈 호출
				if($(".tab_history").length > 0) {
					resizeFrm();
				}
				return false;
			}
			
			if(active == i) continue; // 초기 활성화
			ele["target" + i].style.display = "none";
			ele["img" + i].src = ele["img" + i].src.replace("_over", "_out");
		}
	}
}

function tabList2(ele, active){
	var ele = document.getElementById(ele);
	if(active === undefined) active = 0;						
	
	// tabtit를 포함하는 제목 노드들 수집 
	var btn = ele.getElementsByTagName("*");
	for(var i=0; i<btn.length; i++){
		if(btn[i].className.indexOf('tabtitt') != -1){
			btn = btn[i].nodeName;
			btn = ele.getElementsByTagName(btn);
			break;
		}
	}

	var layerName = btn[0].getElementsByTagName("A")[0].href.split("#")[1];
	layerName = layerName.slice(0, layerName.length-1);
	
	for(var i=0; i<btn.length; i++){
		ele["target" + i] = document.getElementById(layerName + (i+1)); // 노드저장 예) tab1, tab2, tab3
		ele["a" + i] = btn[i].getElementsByTagName("A")[0]; // 탭링크
		ele["img" + i] = btn[i].getElementsByTagName("IMG")[0]; // 이미지노드 저장
		btn[i].style.position = "absolute"; // 제목레이어 적용
	}
	
	/* 사회공헌 탭 */
	var oldActive = active

	for(var i=0; i<btn.length; i++){
		if (typeof(ele["a" + i]) !== "undefined"){
			ele["a" + i].cnt = i;
			ele["a" + i].onclick = function menuActive(){
				ele["target" + oldActive].style.display = "none";
				ele["img" + oldActive].src = ele["img" + oldActive].src.replace("_over", "_out");
				
				ele["target" + this.cnt].style.display = "block";
				ele["img" + this.cnt].src = ele["img" + this.cnt].src.replace("_out", "_over");
				oldActive = this.cnt;
				// 연혁 페이지에서 리사이즈 호출
				if($(".tab_history").length > 0) {
					resizeFrm();
				}
				return false;
			}
			
			if(active == i) continue; // 초기 활성화
			ele["target" + i].style.display = "none";
			ele["img" + i].src = ele["img" + i].src.replace("_over", "_out");
		}
	}
}

/* 출석체크 달력부분 */
$(function(){
	var objLastTr	= $("div.calendar_table table tr:last");
	objLastTr.addClass("last");
	objLastTr.find("td:first").addClass("lb");
	objLastTr.find("td:last").addClass("rb");
	$(".calendar_table td:last-child").css("border-right","none");
	$(".calendar_table .last td").css("border-bottom","none");
	$(".calendar_table td:first-child").css("color","#d81e0f");
	$(".calendar_table td:last-child").css("color","#295480");
	
});

/* 모금/지원현황 테이블 */
$(function(){
	$(".th_left th:first-child").css("padding-left","20px");
	$(".th_left th:last-child").css("padding-right","20px").css("text-align","right");
	$(".tex_td td:first-child").css("padding-left","20px");
	$(".tex_td td").css("text-align","left");
	$(".tex_td td:last-child").css("padding-right","20px").css("text-align","right");
});


//팝업 
function openPopup(url,w,h){
	window.open(url,"Popup", "width=" + w + ",height=" +  h + ",toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no");
	return false;
}

//팝업 v,h 중앙
function posPopup(){ 
    var x,y; 
    if (self.innerHeight) { // IE 외 모든 브라우저 
        x = (screen.availWidth - self.innerWidth) / 2; 
        y = (screen.availHeight - self.innerHeight) / 2; 
    }else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict 모드 
        x = (screen.availWidth - document.documentElement.clientWidth) / 2; 
        y = (screen.availHeight - document.documentElement.clientHeight) / 2; 
    }else if (document.body) { // 다른 IE 브라우저( IE < 6) 
        x = (screen.availWidth - document.body.clientWidth) / 2; 
        y = (screen.availHeight - document.body.clientHeight) / 2; 
    } 
    window.moveTo(x,y); 
}

function layerPop(i,id){
	if(i == 0){
		document.getElementById(id).style.display = "none";
		return false;
	}else if(i == 1){
		document.getElementById(id).style.display = "block";
		return false;
	}else{
		return false;
	}
}

function footerPop(name, url, left, top, width, height, toolbar, menubar, statusbar, scrollbar, resizable) {
	var objPopup;
	toolbar_str 	= 	toolbar 	? 'yes' : 'no';	
	menubar_str 	= 	menubar 	? 'yes' : 'no';	
	statusbar_str = 	statusbar   ? 'yes' : 'no';	
	scrollbar_str = 	scrollbar   ? 'yes' : 'no';	
	resizable_str = 	resizable   ? 'yes' : 'no';		
	objPopup = window.open(url, name, 'left='+left+',top='+top+',width='+width+',height='+height+',toolbar='+toolbar_str+',menubar='+menubar_str+',status='+statusbar_str+',scrollbars='+scrollbar_str+',resizable='+resizable_str);
	return objPopup;
}

/* 메뉴판 플래시 */
function menuPan(strHome) {
	if (typeof(strHome) == "undefined"){strHome = "0"}

	//$("#menupanwrapper").css("background-color", "#666").show();
		//, function () {
		
	//});
	$('#menupanwrapper').slideDown(400, function () {
			$(this).css("background-color", "")
			swfobject.embedSWF("/images/swf/menupan.swf?xmlURL=/library/xml/MenupanToXML.asp&amp;home=" + strHome, "menupan", "100%", "100%", "10.0.0","/library/js/expressInstall.swf", "", {scrollbar:"no",menu:"false", wmode:"transparent"}, "");
	});
	$("#content object").hide();
	scrollTo(0, 0);
	$("html").css("overflow","hidden");
	
}

/* 메뉴판 플래시닫기 */
function closeMenuPan() {
	$("#menupan").html("");
	$("#menupan").hide();
	$("#menupanwrapper").slideUp(400, function () {
	});
	
	$("#content object").show();
	$("html").css("overflow","auto");
}
//$(document).ready(function(){
//	function setPage(arg) { //navigation hn:1depth, sn:2depth, cn:3depth 를 받음
//		page = jQuery.extend({
//			hn : "",
//			sn : ""
//		}, arg || {});
//		var $gnb = $("#gnb"),
//			$menu = $gnb.find("> h2 > a"),
//			$subs = $gnb.find("> div.sub"),
//			$cSub = $("#gnb ul.hn" + page.hn).parent(),
//			cSiz = $cSub.find("> ul").find("li").size(),
//			timer,
//			speed = 200,
//			ease = "linear";
//
//		$("#gnb > h2.hn" + page.hn + "> a").addClass("on"); //1depth 활성
//		$cSub.css("display","block").animate({ //2depth 활성
//			"height" : cSiz * 30 + 40
//		},{
//			queue : false,
//			duration : speed,
//			easing : ease,
//			complete : function() {
//				$(this).find("> ul > li.sn" + page.sn + "> a").addClass("on");
//			}
//		});
//		$menu.bind("click", function() { // 1depth click
//			if($(this).attr("href") == "#") {
//				var i = $menu.index($(this)[0])
//					$tSub = $(this).parent().next("div.sub"),
//					tSiz = $tSub.find("> ul").find("li").size();
//				$subs.not($tSub).animate({
//					"height" : "0"
//				},{
//					queue : false,
//					duration : speed,
//					easing : ease,
//					complete : function() {
//						$(this).css("display","none");
//					}
//				});
//				$tSub.css("display","block").animate({
//					"height" : tSiz * 30 + 40
//				},{
//					queue : false,
//					duration : speed,
//					easing : ease
//				});
//				return false;
//			}
//		});
//		$gnb.bind("mouseenter", function() {
//			clearTimeout(timer);
//		});
//		$gnb.bind("mouseleave", function() { //reset
//			timer = setTimeout(function(){
//				$subs.not($cSub).animate({
//					"height" : "0"
//				},{
//					queue : false,
//					duration : speed,
//					easing : ease,
//					complete : function() {
//						$(this).css("display","none");
//					}
//				});
//				$cSub.css("display","block").animate({
//					"height" : cSiz * 30 + 40
//				},{
//					queue : false,
//					duration : speed,
//					easing : ease
//				});			
//			}, 1000);
//
//		});
//	}
//});
$(document).ready(function(){
	$('iframe').attr('allowTransparency','true');
});