
var commonFunc = {
	addDate: function(d, add){
		var currentDate;
		currentDate = d.getDate()+add*1;
		d.setDate(currentDate);
		return d;
	},
	addMonth: function(m, add){
		var currentMonth;
		currentMonth = m.getMonth()+add*1;
		m.setMonth(currentMonth);
		return m;
	},
	popCwin: function(url, name, w, h, scroll){
		var wl = (window.screen.width/2) - ((w/2) + 10);
		var wt = (window.screen.height/2) - ((h/2) + 50);
		var option = "height="+h+",width="+w+",left="+wl+",top="+wt+",screenX="+wl+",screenY="+wt+",scrollbars="+scroll + ", status=yes";

		commonPopWin = window.open( url, name, option );
		commonPopWin.focus();
		
		return false;
	}
};

var subFunc = {
	vocWrite: function(){
		$('select[name=VisitDateYear]').bind('change', subFunc.visitDateYearChange);
	},
	visitDateYearChange: function(){
		$('select[name=VisitDateMonth]').unbind('change');
		if($(this).val()==''){
			$(this).next().empty().html('<option value="">월</option>');
			$(this).next().next().empty().html('<option value="">일</option>');
		}else{
			var str='<option value="">월</option>';
			for(i=1; i<=12; i++){
				str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
			}
			$(this).next().html(str);
			$(this).next().next().empty().html('<option value="">일</option>');
			$('select[name=VisitDateMonth]').bind('change', subFunc.visitDateMonthChange);
		}
	},
	visitDateMonthChange: function(){
		if($(this).val()==''){
			$(this).next().empty().html('<option value="">일</option>');
		}else{
			var year = $(this).prev().val();
			var month = $(this).val();
			var monthArray = new Array(31,29,31,30,31,30,31,31,30,31,30,31);
			var maxDays = monthArray[month-1];

			if(month==2){
				if((year/4)!=parseInt(year/4)) maxDays=28;
				else maxDays = 29;
			}

			var str = '<option value="">일</option>';
			for(var i=1; i<=maxDays; i++){
				str += '<option value="'+(String(i).length>1?i:'0'+i)+'">'+(String(i).length>1?i:'0'+i)+'</option>';
			}
			$(this).next().html(str);
		}
	}
};

var boardFunc = {
	imgTxtPopInit: function(){
		$('#imgTxtBtnSubmit').bind('click', boardFunc.imgTxtPopSubmit);
	},
	imgTxtPopSubmit: function(){
		var $frm = $('form[name=Frm]');
		var $data = $frm.serialize();
		$.ajax({
			type: 'post',
			url : '/RiaSuperVisor/Board/Attach_Ajax.asp',
			data : $data,
			datatype: 'json',
			success: function(data){
				var ret = eval('(' + data +')');
				if(ret.state){
					window.close();
				}
			}
		});
	},
	imgFileTxt: function(idx){
		commonFunc.popCwin('/RiaSuperVisor/Board/Attach_Txt.asp?Idx='+idx, 'imgTxt', '500', '50', 'no');
	}
};

var cfFunc = {
	init: function(){
		$('.listAjax').bind('click', cfFunc.ajaxView);
	},
	ajaxView: function(){
		var idx = $(this).data('idx');
		var $data = {
			'idx' : idx
		};
		$.ajax({
			type: 'post',
			url : '/Company/CF_Ajax.asp',
			data : $data,
			datatype: 'json',
			success: function(data){
				var ret = eval('(' + data +')');
				var viewWrap = $('.clfix');
				$('#h3Title').html(ret.strSubject);
				viewWrap.find('#divPlayer').find('iframe').attr('src', 'http://www.youtube.com/embed/' + ret.strYoutubeUrl);
				viewWrap.find('.subtitleH').html(ret.strSubject);
				viewWrap.find('.subtitleP').html(ret.strSubtitles);
				viewWrap.find('.subtitlesDown').attr('href', 'CF_Download.asp?Idx=' + ret.intListIdx);

				document.title = '광고자료('+ret.strSubject+') | 롯데리아';
			}
		});

		$('html').focus();
	}
	
}

window.fbAsyncInit = function() {
	FB.api('/Lotteria?fields=picture,name', function(fresponse){
		FB.api('/Lotteria/posts', {access_token:'651605184866995|PHPK-MVCJ1GC0G8NqxkAAARacak', limit:10},function(data){
			try{
				var str = '';
				var idx = 0;
				$.each(eval(data.data), function($i, $ret){
					if($.type($ret.message)!=='undefined'){
						var fid = $ret.id;
						var fTid = '';
						if(fid.indexOf('_') > 0) {
							fTid = fid.split('_')[1];
						}
						if(idx == 0){
						str += '<li class="first">';
						}else{
						str += '<li>';
						}
						str += '<div class="faceTop clfix">';
						str += '<img src="'+fresponse.picture.data.url+'" alt="롯데리아 로고" class="faceThumbImg"/>';
						str += '<div class="headingTxt">';
						str += '<h4>'+fresponse.name+'</h4>';
						str += '<p>'+$ret.created_time.substr(0, 10)+'</p>';
						str += '</div>';					
						str += '</div>';
						str += '<p><a href="https://www.facebook.com/'+fresponse.id+'/posts/'+fTid+'" target="_blank" title="새창열기">'+$ret.message+'</a></p>';
						str += '</li>';
					
						idx++;
						if(idx == 5) return false;
					}
				});
				$('#facebook_wrap').html(str);
				//$(".snsRoll").snsInit();
			}catch(e){}
		});
	});
};


