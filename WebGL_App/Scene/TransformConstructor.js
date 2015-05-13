var TransformConstructor = function(){
	this.buildTransforms = function(cam){
		cam.buildPerspective();
		cam.buildMVMatrix();

		this.sendTransforms();
	}
	this.sendTransforms = function(){
		gl.uniformMatrix4fv(shaderProgram.uPMatrix, false, pMatrix);
    	gl.uniformMatrix4fv(shaderProgram.uMVMatrix, false, mvMatrix);
	}

	//info("Transform Constructor Ready");
};