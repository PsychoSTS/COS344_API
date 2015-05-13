var CameraControler = function(cameraRef){
	var camera = cameraRef;
	var currentlyPressedKeys = [];

	this.handleKeyDown = function(event){
		currentlyPressedKeys[event.keyCode] = true;
	}

	this.handleKeyUp = function(event){
		currentlyPressedKeys[event.keyCode] = false;
	}

	this.update = function(){
		//TRANSLATION
		if(currentlyPressedKeys[87])
			camera.moveForward();
		else if(!currentlyPressedKeys[83]) 
			camera.clearForward();

		if(currentlyPressedKeys[83])
			camera.moveBack();
		else if(!currentlyPressedKeys[87])
			camera.clearBack();

		if(currentlyPressedKeys[65])
			camera.moveLeft();
		else if(!currentlyPressedKeys[68])
			camera.clearLeft();

		if(currentlyPressedKeys[68])
			camera.moveRight();
		else if(!currentlyPressedKeys[65])
			camera.clearRight();

		if(currentlyPressedKeys[69])
			camera.moveUp();
		else if(!currentlyPressedKeys[81])
			camera.clearUp();

		if(currentlyPressedKeys[81])
			camera.moveDown();
		else if(!currentlyPressedKeys[69])
			camera.clearDown();

		//ROTATION
		if(currentlyPressedKeys[38])
			camera.pitchUp();
		else if(!currentlyPressedKeys[40])
			camera.clearPitchUp();

		if(currentlyPressedKeys[40])
			camera.pitchDown();
		else if(!currentlyPressedKeys[38])
			camera.clearPitchDown();

		if(currentlyPressedKeys[37])
			camera.yawLeft();
		else if(!currentlyPressedKeys[39])
			camera.clearYawLeft();

		if(currentlyPressedKeys[39])
			camera.yawRight();
		else if(!currentlyPressedKeys[37])
			camera.clearYawRight();

		if(currentlyPressedKeys[96])
			camera.rollRight();
		else if(!currentlyPressedKeys[17])
			camera.clearRollRight();

		if(currentlyPressedKeys[17])
			camera.rollLeft();
		else if(!currentlyPressedKeys[96])
			camera.clearRollLeft()
	}

	document.onkeydown = this.handleKeyDown;
    document.onkeyup = this.handleKeyUp;
}