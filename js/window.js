define(["jquery"],function($){
	function Window(){
		this.cfg = {
			width: 500,
			height: 300
		};
	};
	Window.prototype = {
		alert: function(content,handler,cfg){
			var boundingBox = $('<div class="window_boundingBox"></div>');
			var btn  = $('<input type="button" value="确定" />');
			boundingBox.html(content);
			btn.appendTo(boundingBox);
			boundingBox.appendTo('body');
			btn.click(function() {
				handler && handler();
				boundingBox.remove();
			});
			$.extend(this.cfg,cfg);
			boundingBox.css({
				width: this.cfg.width + "px",
				height: this.cfg.height + "px",
				left: (this.cfg.x || (window.innerWidth - this.cfg.width) / 2) + "px",
				top: (this.cfg.y || (window.innerHeight - this.cfg.height) / 2) + "px"
			});
		},//end alert
		confirm:function(){

		},
		prompt:function(){

		}
	};//end Window
	return {
		Window: Window
	}
});