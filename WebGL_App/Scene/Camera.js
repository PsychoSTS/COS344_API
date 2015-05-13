var Camera = function(){
	var translateDirection = vec3.create();
	var xPos = 0.0;
	var yPos = -2.0;
	var zPos = -10.0;
	var speed = 0.1;

	var rotationAxis = vec3.create();
	var pitch = 0;
	var yaw = 0;
	var roll = 0;
	var rotationSpeed = 0.75; 

	this.updateMovement = function(){
		//TRANSLATION
		var camRotVecYaw = [];
		var camRotVecPitch = [];
		var camRotVecRoll = [];

		vec3.rotateY(camRotVecYaw, [speed,0,0], [0,0,0], degToRad(-yaw));
		vec3.rotateZ(camRotVecRoll, [speed,0,0], [0,0,0], degToRad(-roll));		
		
		if(translateDirection[0] == -1){
			xPos += camRotVecYaw[0];
			yPos += camRotVecRoll[1];
			zPos += camRotVecYaw[2];
		}
		else if(translateDirection[0] == 1){
			xPos -= camRotVecYaw[0];
			yPos -= camRotVecRoll[1];
			zPos -= camRotVecYaw[2];
		}

		if(translateDirection[1] == -1)
			yPos += speed;
		else if(translateDirection[1] == 1)
			yPos -= speed;	

		vec3.rotateY(camRotVecYaw, [0,0,speed], [0,0,0], degToRad(-yaw));
		vec3.rotateX(camRotVecPitch, [0,0,speed], [0,0,0], degToRad(-pitch));

		if(translateDirection[2] == -1){	
			zPos += camRotVecYaw[2];
			yPos += camRotVecPitch[1];
			xPos += camRotVecYaw[0];
		}
		else if(translateDirection[2] == 1){
			zPos -= camRotVecYaw[2];
			yPos -= camRotVecPitch[1];
			xPos -= camRotVecYaw[0];
		}

		//ROTATION
		if(rotationAxis[0] == 1)
			pitch += rotationSpeed;
		else if(rotationAxis[0] == -1)
			pitch -= rotationSpeed;

		if(rotationAxis[1] == -1)
			yaw += rotationSpeed;
		else if(rotationAxis[1] == 1)
			yaw -= rotationSpeed;

		if(rotationAxis[2] == 1)
			roll += rotationSpeed;
		else if(rotationAxis[2] == -1)
			roll -= rotationSpeed;
	}

	this.buildPerspective = function(){
		mat4.perspective(pMatrix, 45, (gl.viewportWidth / gl.viewportHeight), 0.1, 1000.0);
	}
	this.buildMVMatrix = function(){
		this.updateMovement();

		mat4.identity(mvMatrix);

		mat4.rotate(mvMatrix, mvMatrix, degToRad(pitch), [1,0,0]);
		mat4.rotate(mvMatrix, mvMatrix, degToRad(yaw), [0,1,0]);
		mat4.rotate(mvMatrix, mvMatrix, degToRad(roll), [0,0,1]);
		mat4.translate(mvMatrix, mvMatrix, [xPos, yPos, zPos]);

	}

		//TRANSLATION
	this.moveForward = function(){
		translateDirection[2] = -1;
	}
	this.clearForward = function(){
		translateDirection[2] = 0;
	}

	this.moveBack = function(){
		translateDirection[2] = 1;
	}
	this.clearBack = function(){
		translateDirection[2] = 0;
	}

	this.moveRight = function(){
		translateDirection[0] = 1;
	}
	this.clearRight = function(){
		translateDirection[0] = 0;
	}

	this.moveLeft = function(){
		translateDirection[0] = -1;
	}
	this.clearLeft = function(){
		translateDirection[0] = 0;
	}

	this.moveUp = function(){
		translateDirection[1] = 1;
	}
	this.clearUp = function(){
		translateDirection[1] = 0;
	}

	this.moveDown = function(){
		translateDirection[1] = -1;
	}
	this.clearDown = function(){
		translateDirection[1] = 0;
	}

	//ROTATION
	this.pitchUp = function(){
		rotationAxis[0] = 1;
	}
	this.clearPitchUp = function(){
		rotationAxis[0] = 0;
	}

	this.pitchDown = function(){
		rotationAxis[0] = -1;
	}
	this.clearPitchDown = function(){
		rotationAxis[0] = 0;
	}

	this.yawRight = function(){
		rotationAxis[1] = -1;
	}
	this.clearYawRight = function(){
		rotationAxis[1] = 0;
	}

	this.yawLeft = function(){
		rotationAxis[1] = 1;
	}
	this.clearYawLeft = function(){
		rotationAxis[1] = 0;
	}

	this.rollRight = function(){
		rotationAxis[2] = 1;
	}
	this.clearRollRight = function(){
		rotationAxis[2] = 0;
	}

	this.rollLeft = function(){
		rotationAxis[2] = -1;
	}
	this.clearRollLeft = function(){
		rotationAxis[2] = 0;
	}

	//info("Camera Ready");
}