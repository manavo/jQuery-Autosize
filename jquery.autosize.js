(function( $ ) {
	$.fn.autosize = function() {
		return $(this).each(function() {
			var size;
			var desired_width = $(this).width();
			var resizer = $(this).clone().css({'width': 'auto', 'float': 'left', 'visibility': 'hidden'}).appendTo('body');

			resizer.html($(this).html()).css('font-size', $(this).css("font-size"));

			while(resizer.width() > desired_width) {
				size = parseInt(resizer.css("font-size"), 10);
				resizer.css("font-size", size - 1);
			}

			$(this).css("font-size", resizer.css("font-size"));
			
			resizer.remove();
		});
	};
})( jQuery );