var AssetHandler = function(){
	var objects = [];
	var lights = [];
	var vertexShaders = [];
	var fragmentShaders = [];

	this.addAsset = function(object){
		objects.push(object);
	}

	this.draw = function(){
		for(var i = 0; i < objects.length; i++){
			var obj = objects[i];
			obj.draw();
		}
	}

	//info("Asset Handler Ready");
}