var Light = function(t){
	var type = t;

	var diffuse = [1.0,1.0,1.0, 1.0];
	var specular = [1.0,1.0,1.0, 1.0];
	var ambient = [0.03, 0.03, 0.03, 1.0];

	var position = [1,1,1];
	var direction = [1,1,1];

	this.draw = function(){
		gl.uniform3fv(shaderProgram.uLightPosition, position);
		gl.uniform4fv(shaderProgram.uLightAmbient, ambient);
        gl.uniform4fv(shaderProgram.uLightSpecular, specular);
        gl.uniform4fv(shaderProgram.uLightDiffuse, diffuse);
	}

	this.setPosition = function(p){
		position = p;
	}
}