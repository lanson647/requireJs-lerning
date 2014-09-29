define(function(){
	function Window(){

	};
	Window.prototype = {
		alert: function(){

		},
		confirm:function(){

		},
		prompt:function(){

		}
	};//end Window
	return {
		Window = Window;
	}
});