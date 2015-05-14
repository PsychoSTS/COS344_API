var Light = function(t){
	var type = t;

	var diffuse = [1.0,1.0,1.0, 1.0];
	var specular = [1.0,1.0,1.0, 1.0];
	var ambient = [0.03, 0.03, 0.03, 1.0];

	var position = [1,1,1];
	var direction = [1,1,1];

	this.draw = function(){
		gl.uniform3fv(currentProgram.uLightPosition, position);
		gl.uniform4fv(currentProgram.uLightAmbient, ambient);
        gl.uniform4fv(currentProgram.uLightSpecular, specular);
        gl.uniform4fv(currentProgram.uLightDiffuse, diffuse);
	}

	this.setPosition = function(p){
		position = p;
	}
}