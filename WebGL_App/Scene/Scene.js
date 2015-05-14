var Scene = function(){
	var assets = new AssetHandler();
	var lights = [];
	var grid;
	var camera = new Camera();
	var controler = new CameraControler(camera);
	var transform = new TransformConstructor();

	this.initScene = function(gridFloor){
		assets.addAsset(gridFloor);
	}
	this.addAsset = function(obj){
		assets.addAsset(obj);
	}
	this.addLight = function(l){
		lights.push(l);
	}
	this.addGrid = function(g){
		grid = g;
	}

	this.draw = function(){
		controler.update();
		transform.buildTransforms(camera);

		/*currentProgram = gridShaderProgram;
		gl.useProgram(gridShaderProgram);
		transform.sendTransforms();
		grid.draw();*/

		currentProgram = shaderProgram;
		gl.useProgram(shaderProgram);
		transform.sendTransforms();

		//Need to happen last
		lights[0].draw();
		assets.draw();




	}

	
	//info("Scene Created");
};