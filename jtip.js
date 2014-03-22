(function(e){var t=1;var n=1;e.fn.tooltip=function(r){function s(t){e("#"+t).stop().show().hide()}function o(t){e("#"+t).stop().hide().show()}function u(t){e("#"+t).stop().toggle()}function a(t){var n=e(window).width();var r=e(window).height();if(t.alignmentType==="RIGHT"){f(t)}else if(t.alignmentType==="LEFT"){l(t)}else if(t.alignmentType==="TOP-CENTER"){h(t)}else if(t.alignmentType==="TOP-LEFT"){c(t)}else if(t.alignmentType==="TOP-RIGHT"){p(t)}else if(t.alignmentType==="BOTTOM-CENTER"){v(t)}else if(t.alignmentType==="BOTTOM-LEFT"){d(t)}else if(t.alignmentType==="BOTTOM-RIGHT"){m(t)}t.tooltipElement.css({position:"static",left:t.tooltipXPos,top:t.tooltipYPos});if(t.arrowAlignmentType==="TOP-LEFT")g(t);else if(t.arrowAlignmentType==="TOP-CENTER")y(t);else if(t.arrowAlignmentType==="TOP-RIGHT")b(t);else if(t.arrowAlignmentType==="BOTTOM-LEFT")w(t);else if(t.arrowAlignmentType==="BOTTOM-CENTER")E(t);else if(t.arrowAlignmentType==="BOTTOM-RIGHT")S(t);else if(t.arrowAlignmentType==="RIGHT")x(t);else if(t.arrowAlignmentType==="LEFT")T(t)}function f(t){t.tooltipXPos=t.elementXPos+t.elementWidth+t.gapBetweenElementAndTooltip;t.tooltipYPos=t.elementYPos;t.arrowAlignmentType="LEFT";if(t.tooltipXPos+t.tooltipWidth>e(window).width()){m(t)}}function l(e){e.tooltipXPos=e.elementXPos-e.gapBetweenElementAndTooltip-e.tooltipWidth;e.tooltipYPos=e.elementYPos;e.arrowAlignmentType="RIGHT";if(e.tooltipXPos<0||e.tooltipXPos+e.tooltipWidth+e.gapBetweenElementAndTooltip>e.elementXPos){d(e)}}function c(e){e.tooltipXPos=e.elementXPos;e.tooltipYPos=e.elementYPos-e.tooltipHeight-e.gapBetweenElementAndTooltip;e.arrowAlignmentType="BOTTOM-LEFT";if(e.tooltipXPos<0)p(e);else if(e.tooltipYPos<0)d(e)}function h(e){e.tooltipXPos=(e.elementXPos+e.elementWidth)/2-e.tooltipWidth/2;e.tooltipYPos=e.elementYPos-e.tooltipHeight-e.gapBetweenElementAndTooltip;e.arrowAlignmentType="BOTTOM-CENTER";if(e.tooltipXPos<0)p(e);else if(e.tooltipYPos<0)v(e)}function p(e){e.tooltipXPos=e.elementXPos+e.elementWidth-(e.tooltipWidth+2*e.borderWidth+2*e.borderWidth);e.tooltipYPos=e.elementYPos-e.tooltipHeight-e.gapBetweenElementAndTooltip;e.arrowAlignmentType="BOTTOM-RIGHT";if(e.tooltipXPos<=0||e.tooltipXPos+e.tooltipWidth<=0)c(e);else if(e.tooltipYPos<0)m(e)}function d(e){e.tooltipXPos=e.elementXPos;e.tooltipYPos=e.elementYPos+e.elementHeight+e.gapBetweenElementAndTooltip;e.arrowAlignmentType="TOP-LEFT";if(e.tooltipXPos<0)m(e)}function v(e){e.tooltipXPos=e.elementXPos+e.elementWidth/2-e.tooltipWidth/2;e.tooltipYPos=e.elementYPos+e.elementHeight+e.gapBetweenElementAndTooltip;e.arrowAlignmentType="TOP-CENTER";if(e.tooltipXPos<0)m(e)}function m(e){e.tooltipXPos=e.elementXPos+e.elementWidth-(e.tooltipWidth+2*e.borderWidth+2*e.borderWidth);e.tooltipYPos=e.elementYPos+e.elementHeight+e.gapBetweenElementAndTooltip;e.arrowAlignmentType="TOP-RIGHT";if(e.tooltipXPos<=0||e.tooltipXPos+e.tooltipWidth<=0)d(e)}function g(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.arrowWidth,top:e.tooltipYPos-(e.arrowWidth-(e.borderWidth+e.borderWidth/2)),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.arrowWidth,top:e.tooltipYPos-e.arrowWidth})}function y(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.tooltipWidth/2-e.arrowWidth,top:e.tooltipYPos-(e.arrowWidth-(e.borderWidth+e.borderWidth/2)),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.tooltipWidth/2-e.arrowWidth,top:e.tooltipYPos-e.arrowWidth})}function b(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.tooltipWidth-2*e.arrowWidth,top:e.tooltipYPos-(e.arrowWidth-(e.borderWidth+e.borderWidth/2)),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.tooltipWidth-2*e.arrowWidth,top:e.tooltipYPos-e.arrowWidth})}function w(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.arrowWidth,top:e.tooltipYPos+e.tooltipHeight-(e.borderWidth+e.borderWidth/2),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.arrowWidth,top:e.tooltipYPos+e.tooltipHeight+e.borderWidth})}function E(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.tooltipWidth/2-e.arrowWidth,top:e.tooltipYPos+e.tooltipHeight-(e.borderWidth-e.borderWidth/2),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":"12px","border-top-style":"solid","border-top-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.tooltipWidth/2-e.arrowWidth,top:e.tooltipYPos+e.tooltipHeight+e.borderWidth})}function S(e){e.tooltipArrow.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":e.backgroundColor});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.tooltipWidth-2*e.arrowWidth-e.arrowWidth/2,top:e.tooltipYPos+(e.tooltipHeight-(e.borderWidth+e.borderWidth/2)),"z-index":"1000"});e.tooltipArrowOuter.css({width:"0",height:"0","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":"transparent","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.tooltipWidth-2*e.arrowWidth-e.arrowWidth/2,top:e.tooltipYPos+e.tooltipHeight+e.borderWidth})}function x(e){e.tooltipArrow.css({width:"0",height:"0","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":"transparent","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":e.backgroundColor,"z-index":"1000"});e.tooltipArrow.css({position:"static",left:e.tooltipXPos+e.tooltipWidth+2*e.borderWidth+e.borderWidth/2,top:e.tooltipYPos+(2*e.borderWidth+e.borderWidth/2)});e.tooltipArrowOuter.css({width:"0",height:"0","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":"transparent","border-left-width":e.arrowWidth+"px","border-left-style":"solid","border-left-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos+e.tooltipWidth+4*e.borderWidth,top:e.tooltipYPos+(2*e.borderWidth+e.borderWidth/2)})}function T(e){e.tooltipArrow.css({width:"0",height:"0","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":e.backgroundColor,"z-index":"1000"});e.tooltipArrow.css({position:"static",left:e.tooltipXPos-2*e.borderWidth,top:e.tooltipYPos+3*e.borderWidth});e.tooltipArrowOuter.css({width:"0",height:"0","border-top-width":e.arrowWidth+"px","border-top-style":"solid","border-top-color":"transparent","border-bottom-width":e.arrowWidth+"px","border-bottom-style":"solid","border-bottom-color":"transparent","border-right-width":e.arrowWidth+"px","border-right-style":"solid","border-right-color":e.borderColor});e.tooltipArrowOuter.css({position:"static",left:e.tooltipXPos-4*e.borderWidth,top:e.tooltipYPos+3*e.borderWidth})}function N(t,n,r){var i=t;var s=document.createElement("span");s.style.position="static";s.style.top="111px";s.style.left="111px";s.style.width=n+"px";s.style.minHeight="40px";s.style.overflow="auto";s.style.wordWrap="break-word";s.id="wid";s.innerHTML=i;document.body.appendChild(s);var o=document.getElementById("wid").offsetHeight;var u=document.getElementById("wid").scrollHeight;e("#wid").remove();return o}var i={tooltipType:"default",tooltipIcon:"",backgroundColor:"black",borderColor:"black",fontColor:"black",fontWeight:"bold",fontFamily:"Helvetica,Arial, Verdana",fontSize:"12px",alignmentType:"LEFT",width:200,height:40,padding:"0px 3px 0px 3px","word-wrap":"break-word",overflow:"auto",borderWidth:2,arrowWidth:10,borderRadius:5,gapBetweenElementAndTooltip:10,text:"",visibility:"hidden",mouseover:"visible",mouseout:"hidden",focus:"visible",hideOnClick:"true",opacity:.8,displayIcon:"true",inputMouseOut:function(t){e(t).stop().show().hide()},inputMouseOver:function(t){e(t).stop().hide().show()},inputFocus:function(e){},inputBlur:function(e){},inputClick:function(e){},inputHover:function(e){},tteMouseOut:function(e){},tteMouseOver:function(e){},tteBlur:function(e){},tteFocus:function(e){},tteClick:function(t){e(t).stop().show().hide()},tteHover:function(e){}};if(r){e.extend(i,r)}this.each(function(){var r=i.backgroundColor;var s=i.borderColor;var o=i.fontColor;var u=i.fontWeight;var f=i.fontFamily;var l=i.fontSize;var c=i.alignmentType;var h=i.text;var p=e(this);var d=p.offset();var v=d.left;var m=d.top;var g=e("<span>");var y=i.tooltipType;var b=i.tooltipIcon;if(o!=null&&o!=undefined&&o.length>0)i.fontColor=o;if(r!=null&&r!=undefined&&r.length>0)i.backgroundColor=r;if(s!=null&&s!=undefined&&s.length>0)i.borderColor=s;var w="";if(i.displayIcon==="false")b="";if(b==="")w="<span></span><span>";else w="<span><img src='"+b+"' width='24' height='24' style='vertical-align:text-top;'/></span><span>";if(h!=null&&h!=undefined&&h.length>0)w+=h;else w+="This is a Tooltip ";w+="</span>";g.html(w);var E=e("<span></span>");var S=e("<span></span>");var x=i.gapBetweenElementAndTooltip;var T=i.width;var C=i.height;var k=i.visibility;var L=i.hideOnClick;var A=i.opacity;if(c==="TOP-LEFT"||c==="TOP-CENTER"||c==="TOP-RIGHT"){var O=N(h,T,C);if(O>=C)c="BOTTOM-LEFT"}if(b!=null&&b!=undefined&&b.length>0);else{switch(y){case"info":g.addClass("jtip-info");break;case"warning":g.addClass("jtip-warn");break;case"error":g.addClass("jtip-error");break;case"success":g.addClass("jtip-success");break;case"fail":g.addClass("jtip-fail");break;case"custom":g.addClass("jtip-custom");default:}i.backgroundColor=g.css("background-color");i.borderColor=g.css("border-left-color");i.fontColor=g.css("color")}var M={tooltipWidth:i.width,tooltipHeight:i.height,elementXPos:v,elementYPos:m,elementWidth:e(this).outerWidth(),elementHeight:e(this).outerHeight(),gapBetweenElementAndTooltip:i.gapBetweenElementAndTooltip,alignmentType:c,tooltipElement:g,tooltipArrow:E,tooltipArrowOuter:S,backgroundColor:i.backgroundColor,borderColor:i.borderColor,arrowAlignmentType:"LEFT",tooltipXPos:0,tooltipYPos:0,arrowWidth:i.arrowWidth,borderWidth:i.borderWidth};console.log("BG Color : "+i.backgroundColor+" Border C : "+i.borderColor);a(M);g.css({background:i.backgroundColor,"border-color":i.borderColor,"border-style":"solid","border-width":M.borderWidth+"px","border-radius":i.borderRadius,color:i.fontColor,"font-weight":u,"font-family":f,"font-size":l,width:T,"max-width":T,"min-height":C,padding:"0px 3px 0px 3px","word-wrap":"break-word",overflow:"auto"});var _="tooltip-"+t;var D=e("<span id='"+_+"'></span>");D.append(g);D.append(E);D.append(S);D.css({opacity:A});e("body").append(D);if(k==="hidden")e("#"+_).hide();p.bind("mouseout",function(){i.inputMouseOut.call(this,e("#"+_))});p.bind("mouseover",function(){i.inputMouseOver.call(this,e("#"+_))});p.bind("focus",function(){i.inputFocus.call(this,e("#"+_))});p.bind("blur",function(){i.inputBlur.call(this,e("#"+_))});p.bind("click",function(){i.inputClick.call(this,e("#"+_))});p.bind("hover",function(){i.inputHover.call(this,e("#"+_))});e("#"+_).bind("mouseout",function(){i.tteMouseOut.call(this,e("#"+_))});e("#"+_).bind("mouseover",function(){i.tteMouseOver.call(this,e("#"+_))});e("#"+_).bind("focus",function(){i.tteFocus.call(this,e("#"+_))});e("#"+_).bind("blur",function(){i.tteBlur.call(this,e("#"+_))});e("#"+_).bind("click",function(){i.tteClick.call(this,e("#"+_))});e("#"+_).bind("hover",function(){i.tteHover.call(this,e("#"+_))});var P=p.attr("id");if(P==null||P==undefined||P.length==0){P=p.prop("tagName")+"-"+n;p.attr("id",P);n++}var H=e("#"+P).data("tooltipIDList");if(H==null||H==undefined||H.length==0)e("#"+P).data("tooltipIDList",""+_);else{var B=H+","+_;e("#"+P).data("tooltipIDList",""+B)}t++});return this}})(jQuery)