$(function(){var e="noname-browser",o=navigator.userAgent.toLowerCase();o.indexOf("msie")!=-1&&(e="msie"),o.indexOf("trident")!=-1&&(e="msie"),o.indexOf("konqueror")!=-1&&(e="konqueror"),o.indexOf("firefox")!=-1&&(e="firefox"),o.indexOf("safari")!=-1&&(e="safari"),o.indexOf("chrome")!=-1&&(e="chrome"),o.indexOf("chromium")!=-1&&(e="chromium"),o.indexOf("opera")!=-1&&(e="opera"),o.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){});
$(".objacts-item__item").on("mouseover",function(){$(this).toggleClass("is--hover")}),$(".objacts-item__item").on("mouseout",function(){$(this).toggleClass("is--hover")});
$("img").addClass("img-responsive"),$(".text-block ul").addClass("ul-site"),$(".text-block table").addClass("table table-bordered"),$(".text-block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(".text-block img").parent().addClass("_tb__img");
var url=window.location.pathname;$('.navbar__nav a[href="'+url+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+url+'"]').parent().addClass("is--active");