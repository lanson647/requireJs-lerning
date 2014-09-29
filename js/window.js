define(["jquery"],function($){
	function Window(){};
	Window.prototype = {
		alert: function(content,handler){
			var boundingBox = $('<div class="window_boundingBox"></div>');
			var btn  = $('<input type="button" value="确定" />');
			boundingBox.html(content);
			btn.appendTo(boundingBox);
			boundingBox.appendTo('body');
			btn.click(function() {
				handler && handler();
				boundingBox.remove();
			});
		},
		confirm:function(){

		},
		prompt:function(){

		}
	};//end Window
	return {
		Window: Window
	}
});