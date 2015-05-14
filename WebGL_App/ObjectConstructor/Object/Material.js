var Material = function(){
	var diffuse = [1.0,1.0,1.0, 1.0];
	var specular = [1.0,1.0,1.0, 1.0];
	var ambient = [1.0, 1.0, 1.0, 1.0];
	var materialShininess = 250;

	var opacity = 1;

	var texture;
    var bump;

    this.Constructor = function(){
        texture = gl.createTexture();
        texture.image = new Image();

        bump = gl.createTexture();
        bump.image = new Image();

        /*ambientColor = [ 0.1, 0.1, 0.1, 1.0 ];
        diffuseColor = [ 0.8, 0.8, 0.8, 1.0 ];
        specularColor = [ 1.0, 0.0, 0.0, 1.0 ];
        materialShininess = 10.0;*/
    }
    this.Constructor();

	this.setDiffuse = function(diff){
		diffuse = diff;
	}
	this.setSpecular = function(spec){
		specular = spec;
	}
	this.setAmbient = function(amb){
		ambient = amb;
	}
	this.setOpacity = function(op){
		opacity = op;
	}

	this.setProperties = function(){
		gl.uniform4fv(currentProgram.uMaterialDiffuse, diffuse);
		gl.uniform4fv(currentProgram.uMaterialSpecular, specular);
		gl.uniform4fv(currentProgram.uMaterialAmbient, ambient);
		gl.uniform1f(currentProgram.uMaterialShininess, materialShininess);

		gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.uniform1i(currentProgram.uTSampler, 0);
	}

	var handleLoadedTexture = function(texture){
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.image);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.bindTexture(gl.TEXTURE_2D, null);
    };

    //PUBLIC METHODS
    this.addTexture = function(src){
        texture.image.onload = function () {
            handleLoadedTexture(texture);
        }

        texture.image.src = src;
    }
    this.addBump = function(src){
        bump.image.onload = function () {
            handleLoadedTexture(bump);
        }

        bump.image.src = src;
    }

    this.getTexture = function(){
    	return texture;
    }
}