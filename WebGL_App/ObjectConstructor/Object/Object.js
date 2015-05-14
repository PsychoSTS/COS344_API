var Object = function(t, data, useMat){
	var type = t;

	var position = [0,0,0];
	var rotation = [0,0,0];
	var scale = 1;

	var material = new Material();

	var vertices = data[0];
	var indices = data[1];
	var colors, matData;
	var textureCoords;
	var normals;
	if(!useMat){
		colors = data[2];
	}
	else {
		matData = data[2];
		if(data[3] != null){
			textureCoords = data[3];
			//info(data[3] + " " +type);
			if(type != UVSPHERE){
				for(var i = 0 ; i < textureCoords.length; i++){
					textureCoords[i] = textureCoords[i]*15;
				}
			}
			
		}
		normals = data[4];
	}

	var useMaterial = useMat;

	var vertexBuffer;
	var colorBuffer;
	var indexBuffer;
	var textureBuffer;
	var normalBuffer;

	this.initBuffers = function(){
		//Initialise the vertex buffer
		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		vertexBuffer.itemSize = 3;
		vertexBuffer.numItems = vertices.length/3;
		info(vertexBuffer.numItems);
		
		//Initialise the texture buffer
		if(textureCoords){
			textureBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoords), gl.STATIC_DRAW);
			textureBuffer.itemSize = 2;
			textureBuffer.numItems = textureCoords.length/2;
		}

		//Initialise the color buffer
		if(colors && textureCoords == null){
			colorBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
			colorBuffer.itemSize = 4;
			colorBuffer.numItems = colors.length/4;
		}
		
		//BUFFER FOR THE NORMALS
		if(normals){
			normalBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
			gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
			normalBuffer.itemSize = 3;
			normalBuffer.numItems = normals.length/3;
		}
		

		//BUFFER FOR THE NORMALS
		/*tangentBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, tangentBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(tangents), gl.STATIC_DRAW);
		tangentBuffer.itemSize = 3;
		tangentBuffer.numItems = tangents.length/3;*/

		if(indices){
			indexBuffer = gl.createBuffer();
			gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
			gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
			indexBuffer.itemSize = 1;
			indexBuffer.numItems = indices.length;
		}

	}

	this.draw = function(){
		this.buildMM();
		//MATERIAL SET PROPERTIES
		if(useMaterial)
			material.setProperties();
		gl.uniform1i(currentProgram.uUseMaterial, useMaterial);

		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
	    gl.vertexAttribPointer(currentProgram.aVertexPosition, vertexBuffer.itemSize , gl.FLOAT, false, 0, 0);

	    if(colors && colors.length > 0 && textureCoords == null){
	    	gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    		gl.vertexAttribPointer(currentProgram.aVertexColor, colorBuffer.itemSize, gl.FLOAT, false, 0, 0);
	    }
	    else gl.disableVertexAttribArray(1);

    	if(textureCoords && textureCoords.length > 0){
    		gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer);
    		gl.vertexAttribPointer(currentProgram.aVertexTextureCoord, textureBuffer.itemSize, gl.FLOAT, false, 0, 0);
    	}
    	else gl.disableVertexAttribArray(2);

    	if(normals && normals.length > 0){
    		gl.bindBuffer(gl.ARRAY_BUFFER, normalBuffer);
    		gl.vertexAttribPointer(currentProgram.aVertexNormal, normalBuffer.itemSize, gl.FLOAT, false, 0, 0);
    	}
    	else gl.disableVertexAttribArray(3);

    	if(type == GRID && indices != null && indices.length > 0){
    		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
		    gl.drawElements(gl.LINES, indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
    	}
    	else if(indices != null && indices.length > 0){
		    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
		    gl.drawElements(gl.TRIANGLES, indexBuffer.numItems, gl.UNSIGNED_SHORT, 0);
		}
		else{
	    	gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.numItems);
		}
	}
	var deg = 0;
	this.buildMM = function(){
		//if(type == UVSPHERE){
			//rotation = [1,1,1];
			//deg += 0.01;
		//}

		mat4.identity(mmMatrix);
		mat4.rotate(mmMatrix, mmMatrix, degToRad(deg), rotation);
		mat4.scale(mmMatrix, mmMatrix, [scale, scale, scale]);
		mat4.translate(mmMatrix, mmMatrix, position);
		gl.uniformMatrix4fv(currentProgram.uMMatrix, false, mmMatrix);

		if(useMaterial){
			var mv = [];
			mat4.multiply(mv, mmMatrix, mvMatrix);
			var nMatrix = [];
			mat4.copy(nMatrix, mv);
			mat4.invert(nMatrix, nMatrix);
			mat4.transpose(nMatrix, nMatrix);
			gl.uniformMatrix4fv(currentProgram.uNMatrix, false, nMatrix);
		}
	}

	this.addTexture = function(type, src){
		switch(type){
			case "textureMap":
				material.addTexture(src);
				break;
			case "bumpMap":
				material.addBump(src);
				break;
			/*case "Environment":
				material.mapEnvironment(src);
				break;*/
		}
	}

	this.setPosition = function(p){
		position = p;
	}
	this.getPosition = function(){
		return position;
	}
	this.setScale = function(s){
		scale = s;
	}
	this.setRotation = function(r, d){
		rotation = r;
		deg = d;
	}
	this.getRotation = function(){
		return rotation;
	}

	this.ofType = function(t){
		if(type === t)
			return true;
		else return false;
	}

	this.initBuffers();
}