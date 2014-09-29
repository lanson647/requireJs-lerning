require.config({
	paths:{
		jquery: "jquery.min"
	}
});

require(["jquery","window"],function($,w){
	$("#a").click(function() {
		new w.Window().alert("welcome!",function(){
			alert("you click the confirm button");
		},{
			width:300,
			height:150,
			y:50
		});
	});

});