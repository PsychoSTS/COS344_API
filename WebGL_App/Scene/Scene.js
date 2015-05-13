var Scene = function(){
	var assets = new AssetHandler();
	var camera = new Camera();
	var controler = new CameraControler(camera);
	var transform = new TransformConstructor();

	this.initScene = function(gridFloor){
		assets.addAsset(gridFloor);
	}
	this.addAsset = function(obj){
		assets.addAsset(obj);
	}

	this.draw = function(){
		controler.update();
		transform.buildTransforms(camera);

		//Need to happen last
		assets.draw();
	}

	//info("Scene Created");
};