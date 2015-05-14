var TransformConstructor = function(){
	this.buildTransforms = function(cam){
		cam.buildPerspective();
		cam.buildMVMatrix();
	}
	this.sendTransforms = function(){
		gl.uniformMatrix4fv(currentProgram.uPMatrix, false, pMatrix);
    	gl.uniformMatrix4fv(currentProgram.uMVMatrix, false, mvMatrix);
	}

	//info("Transform Constructor Ready");
};