$('a.open_close').on("click",function() {
	 'use strict';
	$('.main-menu').toggleClass('show');
	$('.layer').toggleClass('layer-is-visible');
});
$('a.show-submenu').on("click",function() {
	 'use strict';
	$(this).next().toggleClass("show_normal");
});
$('a.show-submenu-mega').on("click",function() {
	 'use strict';
	$(this).next().toggleClass("show_mega");
});
if($(window).width() <= 480){
	 'use strict';
	$('a.open_close').on("click",function() {
	$('.cmn-toggle-switch').removeClass('active')
});
}