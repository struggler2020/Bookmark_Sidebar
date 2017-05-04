/*! (c) Philipp König under GPL-3.0 */
"use strict";!function(a){window.TemplateHelper=function(b){this.loading=function(){return a('<div class="loading"> <div>  <div class="circle-clipper left">   <div></div>  </div>  <div class="gap-patch">   <div></div>  </div>  <div class="circle-clipper right">   <div></div>  </div> </div></div>')},this.footer=function(){var b=a('<footer> <a id="copyright" href="https://moonware.de/extensions" target="_blank">  &copy; <span class="created">2016</span>&ensp;<strong>Moonware</strong> </a></footer>'),c=+b.find("span.created").text(),d=(new Date).getFullYear();return d>c&&b.find("span.created").text(c+" - "+d),b}},window.I18nHelper=function(b){var c=this;this.init=function(a){"function"==typeof a&&a()},this.parseHtml=function(d){a(d).find("["+b.opts.attr.i18n+"]").forEach(function(d){var e=null,f=a(d).attr(b.opts.attr.i18n);f&&(e=c.get(f)),e?a(d).html(e):a(d).remove()})},this.get=function(a){var b=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=chrome.i18n.getMessage(a);return c&&(b.forEach(function(a,b){c=c.replace(new RegExp("\\{"+(b+1)+"\\}"),a)}),c=c.replace(/\[b\](.*)\[\/b\]/,"<strong>$1</strong>"),c=c.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),c=c.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>")),c}},window.translation=function(){var b=this;this.languages={af:"Afrikaans",ar:"Arabic",hy:"Armenian",be:"Belarusian",bg:"Bulgarian",ca:"Catalan","zh-CN":"Chinese (Simplified)","zh-TW":"Chinese (Traditional)",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch",en:"English",eo:"Esperanto",et:"Estonian",tl:"Filipino",fi:"Finnish",fr:"French",de:"German",el:"Greek",iw:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",it:"Italian",ja:"Japanese",ko:"Korean",lv:"Latvian",lt:"Lithuanian",no:"Norwegian",fa:"Persian",pl:"Polish",pt:"Portuguese",ro:"Romanian",ru:"Russian",sr:"Serbian",sk:"Slovak",sl:"Slovenian",es:"Spanish",sw:"Swahili",sv:"Swedish",th:"Thai",tr:"Turkish",uk:"Ukrainian",vi:"Vietnamese"},this.opts={elm:{title:a("head > title"),header:a("body > header"),content:a("section#content"),wrapper:{overview:a("section#content > div[data-name='overview']"),langvars:a("section#content > div[data-name='langvars']")}},classes:{hidden:"hidden",progress:"progress"},attr:{i18n:"data-i18n"},ajax:{info:"https://moonware.de/ajax/extensions/bs/i18n/info",langvars:"https://moonware.de/ajax/extensions/bs/i18n/langvars"},manifest:chrome.runtime.getManifest()},this.run=function(){b.opts.elm.wrapper.langvars.addClass(b.opts.classes.hidden),d(),c(),b.helper.i18n.init(function(){b.helper.template.footer().insertAfter(b.opts.elm.content),b.helper.i18n.parseHtml(document),b.opts.elm.title.text(b.opts.elm.title.text()+" - "+b.opts.manifest.short_name),e()})};var c=function(){b.opts.elm.header.prepend('<svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"/></svg>')},d=function(){b.helper={template:new window.TemplateHelper(b),i18n:new window.I18nHelper(b)}},e=function(){var c=new XMLHttpRequest;c.open("POST",b.opts.ajax.info,!0),c.onload=function(){var d=JSON.parse(c.responseText);if(d&&d.languages){var e=a("<ul />").appendTo(b.opts.elm.wrapper.overview.children("div"));d.languages.unshift({name:"sw",varsAmount:111}),d.languages.unshift({name:"pl",varsAmount:31}),d.languages.unshift({name:"fr",varsAmount:156}),d.languages.unshift({name:"cs",varsAmount:179}),d.languages.sort(function(a,b){return b.varsAmount-a.varsAmount});var f=Object.assign({},b.languages);d.languages.forEach(function(c){if(delete f[c.name],b.languages[c.name]){var g=12*Math.PI*2,h=c.varsAmount/d.varsAmount*100;a("<li />").append("<strong>"+b.languages[c.name]+"</strong>").append("<svg class="+b.opts.classes.progress+" width='32' height='32' viewPort='0 0 16 16'><circle r='12' cx='16' cy='16'></circle><circle r='12' cx='16' cy='16' stroke-dashoffset='"+(100-h)/100*g+"' stroke-dasharray='"+g+"'></circle></svg>").append("<span class='"+b.opts.classes.progress+"'>"+Math.round(c.varsAmount/d.varsAmount*100)+"%</span>").appendTo(e)}});var g=a("<select name='language' />").appendTo(b.opts.elm.wrapper.overview.children("div"));a("<option value='' />").text("Add language").appendTo(g),Object.keys(f).forEach(function(c){a("<option value='"+c+"' />").text(b.languages[c]).appendTo(g)})}},c.send()}},(new window.translation).run()}(jsu);