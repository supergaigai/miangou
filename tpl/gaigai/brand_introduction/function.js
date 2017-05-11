var oEditors = [];
function setSelected(strSelector, varValue) {
	$(strSelector + " option").each(function () {
		if (typeof(varValue) == "object"){
			
			for (var i=0; i < varValue.length; i++) {
				if ($(this).val() == varValue[i]) {
					$(this).attr("selected", "selected");
					break;
				}
			}
		}
		else {
			if ($(this).val() == varValue) {
				$(this).attr("selected", "selected");
			}
		}
	});
}
function setChecked(strSelector, varValue) {
	$(strSelector).each(function () {
		if (typeof(varValue) == "object"){
			for (var i=0; i < varValue.length; i++) {
				if ($(this).val() == varValue[i]) {
					$(this).attr("checked", "checked");
					break;
				}
			}
		}
		else {
			if ($(this).val() == varValue) {
				$(this).attr("checked", "checked");
			}
		}
	});
}


$(document).ready(function () {
	$("input.noime").css("ime-mode", "disabled");

	/*
	$("input.number").keypress(function (event) {
		$(this).css("ime-mode", "disabled");
		if (event.which && (event.which  > 47 && event.which  < 58 || event.which == 8)) {} else {event.preventDefault();}
	});
	*/
	$("input.digits").keypress(function (event) {
		$(this).css("ime-mode", "disabled");
		if (event.which && (event.which  > 47 && event.which  < 58 || event.which == 8)) {} else {event.preventDefault();}
	});
	
	$("input.english").keypress(function (event) {
		$(this).css("ime-mode", "disabled");
		if (event.which && ((event.which  > 47 && event.which  < 58 || event.which == 8) || (event.which >= 65 && event.which <= 90) || (event.which >= 97 && event.which <= 122))) {} else {event.preventDefault();}
	});

});





function cutByteContents(objSelector, objBytesText, intBytes) {
	if (objSelector.lengthByte() > intBytes){
		alert("" + intBytes + "byte ," + intBytes + "Byte");
		objSelector.val(objSelector.cutByte(intBytes));
	}
	objBytesText.text(objSelector.lengthByte());
}

$.prototype.lengthByte = function() {
	var strValue = this.val();
	var strTemp;
	var intTempCount=0;
	var strTempChar;
	var intTotalCount = 0;
	strTemp = new String(strValue);
	intTempCount = strTemp.length;

	for (var i = 0; i < intTempCount; i++)	{
		strTempChar = strTemp.charAt(i);

		if (escape(strTempChar) =='%0D') {continue;} else if(escape(strTempChar) == '%0A'){intTotalCount += 2;} else if (escape(strTempChar).length > 4) {intTotalCount += 2; } else {intTotalCount++;}
	}
	return intTotalCount;
}

$.prototype.cutByte = function(intLength) {
	var strValue = this.val();
	var strTemp;
	var intTempCount=0;
	var strTempChar;
	var intTotalCount = 0;
	strTemp = new String(strValue);
	intTempCount = strTemp.length;

	for (var i = 0; i < intTempCount; i++)	{
		strTempChar = strTemp.charAt(i);
		if (escape(strTempChar) =='%0D') {continue;} else if(escape(strTempChar) == '%0A'){intTotalCount += 2;} else if (escape(strTempChar).length > 4) {intTotalCount += 2; } else {intTotalCount++;}
		if (intTotalCount > intLength){break;}
	}
	return strValue.substring(0, i);
}

$.fn.emptySelect = function(index) {return this.each(function(){if (this.tagName=='SELECT') this.options.length = index;});}
$.fn.loadSelect = function(optionsDataArray, selectCode) {
	return this.emptySelect().each(function(){
		if (this.tagName=='SELECT') {
			var selectElement = this;
			$.each(optionsDataArray,function(index,optionData){
				var option = new Option(optionData.caption,optionData.value,true, optionData.value==selectCode);
				if ($.browser.msie) {selectElement.add(option);}
				else {selectElement.add(option,null);}
			})
		}
	});
}


function openWindow(strUrl, strName, strWidth, strHeight, strOption) {
	var objPopup = window.open(strUrl, strName,'width=' + strWidth + ',height=' + strHeight + ', scrollbars=no');
	objPopup.focus();
}

function openWindow2(strUrl, strName, strWidth, strHeight, strOption) {
	var objPopup = window.open(strUrl, strName,'width=' + strWidth + ',height=' + strHeight + ', ' + strOption);
	objPopup.focus();
}


function openWindow3(strUrl, strName, strWidth, strHeight, strOption) {
	var objPopup = window.open(strUrl, strName,'width=' + strWidth + ',height=' + strHeight + ', scrollbars=yes');
	objPopup.focus();
}




function isURL(str) {
	var RegH = /^(http)\:\/\/((?:[a-z\d\-]{2,}\.)+[a-z]{2,})/;
	if(!RegH.test(str)){
		return false;
	} else {return true};
}


function getCookie(sName) {
  var aCookie = document.cookie.split("; ");

  for (var i=0; i < aCookie.length; i++) {
    var aCrumb = aCookie[i].split("=");

    if (sName == aCrumb[0]) {
        return unescape(aCrumb[1]);
    }
  }
  return null;
}

function setCookie(name, value, expiredays) {
   var todayDate = new Date();
   todayDate.setDate( todayDate.getDate() + expiredays );
   document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

function fnPopupClose(strID) {
	//alert($("#chkPopup_" + strID + ":checked").length);
	if ($("#chkPopup_" + strID + ":checked").length > 0) {
		setCookie("Popup_" + strID, "done" , 1);
		
	}
	$("#divPopup_" + strID).hide();
}


$.fn.editor = function(strSkinUrl) {
	if (typeof(nhn) == "undefined"){
		alert("error.");
		return;
	}
	if(this.is(":visible")) {
		nhn.husky.EZCreator.createInIFrame({
			oAppRef: oEditors,
			elPlaceHolder: this.attr("id"),
			sSkinURI: strSkinUrl + '?id=' + this.attr("id"),
			fCreator: "createSEditorInIFrame"
		});
	}	
	this.parent("form").children("input:first").focus();
}


function onlyNumber(element){
	element.keydown(function(){	

        if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46){
			return true;
		}
        else{
            return false;
		}
	});	
}


function onlyTelFax(element){
	element.keydown(function(){	

        if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 46 || event.keyCode == 109 || event.keyCode == 189 || event.keyCode == 192){
			return true;
		}
        else{
            return false;
		}
	});	
}


function onlyTimeType(element){
	element.keyup(function() {

		if (typeof(element) == "object"){
			var objValue = $(this).val();
			for (var i=0; i < objValue.length; i++) {
				if(objValue.substring(i,i+1) != ":" && (objValue.substring(i,i+1) < "0" || objValue.substring(i,i+1) > "9")){

					$(this).val("");
					$(this).focus();
					return false;
				}
			}
		}


	});
}


function jumincheck(jumin1, jumin2) {
	var year = jumin1.substring(0,2);
	var month = jumin1.substring(2,4);
	var day = jumin1.substring(4,6);
	var sex = jumin2.substring(0,1);

	if ((year <25 || month<1 || month>12 ||day<1) || (jumin1.length != 6 ) ) {
		alert ("error");
		return false;
	}


	if ( (sex != 1 && sex != 2 ) || (jumin2.length != 7 ) ) {
		alert("error");
		form.Jumin2.focus();
		return false;
	}

	var val = 0;
	for (var i = 0; i <=5 ; i++){ 
		val = val + ((i%8+2) * parseInt(jumin1.substring(i,i+1)))
	}

	for (var i = 6; i <=11 ; i++){ 
		val = val + ((i%8+2) * parseInt(jumin2.substring(i-6,i-5)))
	}

	val = 11 - (val %11)
	val = val % 10

	if (val != jumin2.substring(6,7)) {
		alert ("error");
		return false;
	}

	return true;
}


function emailcheck(semail){
	if (semail == "")
	{
		alert('email error'); 
        return false;
	}

	var chk_email = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(semail);

	if (!chk_email)
	{
		alert('email error'); 
        return false;
	}

	return true;
}


DateDiff = {
    inDays: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000));
    },   inWeeks: function(d1, d2) {
        var t2 = d2.getTime();
        var t1 = d1.getTime();
 
        return parseInt((t2-t1)/(24*3600*1000*7));
    },   inMonths: function(d1, d2) {
        var d1Y = d1.getFullYear();
        var d2Y = d2.getFullYear();
        var d1M = d1.getMonth();
        var d2M = d2.getMonth();
 
        return (d2M+12*d2Y)-(d1M+12*d1Y);
    },
 
    inYears: function(d1, d2) {
        return d2.getFullYear()-d1.getFullYear();
    }
}

var checkLogin	= function (strReturnUrl, strQueryStr) {
	if (confirm("")) {
		if (strQueryStr == "")
		{
			document.location.href='/login.php?returnUrl=' + strReturnUrl;
		} else {
			document.location.href='/login.php?returnurl=' + strReturnUrl + '?'+strQueryStr;
		}
	}	
}