var ShaderConstructor = function(){
	/*==========================================================*
	    Function that will retreive a given shader
	*===========================================================*/
	this.getShader = function(gl, id) {
	    var shaderScript = document.getElementById(id);
	    if (!shaderScript) {
	        return null;
	    }

	    var str = "";
	    var k = shaderScript.firstChild;
	    while (k) {
	        if (k.nodeType == 3) {
	            str += k.textContent;
	        }
	        k = k.nextSibling;
	    }

	    var shader;
	    if (shaderScript.type == "x-shader/x-fragment") {
	        shader = gl.createShader(gl.FRAGMENT_SHADER);
	    } else if (shaderScript.type == "x-shader/x-vertex") {
	        shader = gl.createShader(gl.VERTEX_SHADER);
	    } else {
	        return null;
	    }

	    gl.shaderSource(shader, str);
	    gl.compileShader(shader);

	    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
	        alert(gl.getShaderInfoLog(shader));
	        return null;
	    }

	    return shader;
	}

	/*==========================================================*
	    Initialise the shaders to be used during the WebGL app
	*===========================================================*/
	this.initShaders = function() {
	    var fragmentShader = this.getShader(gl, "shader-fs");
	    var vertexShader = this.getShader(gl, "shader-vs");
		
	    shaderProgram = gl.createProgram();
	    gl.attachShader(shaderProgram, vertexShader);
	    gl.attachShader(shaderProgram, fragmentShader);
	    gl.linkProgram(shaderProgram);

	    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
	        alert("Could not initialise shaders");
	    }

	    gl.useProgram(shaderProgram);

	    shaderProgram.aVertexPosition = gl.getAttribLocation(shaderProgram, "aVertexPosition");
	    gl.enableVertexAttribArray(shaderProgram.aVertexPosition);

	    shaderProgram.aVertexTextureCoord = gl.getAttribLocation(shaderProgram, "aVertexTextureCoord");
	    gl.enableVertexAttribArray(shaderProgram.aVertexTextureCoord);

	    shaderProgram.aVertexNormal = gl.getAttribLocation(shaderProgram, "aVertexNormal");
	    gl.enableVertexAttribArray(shaderProgram.aVertexNormal);

	    /*shaderProgram.aVertexTangent = gl.getAttribLocation(shaderProgram, "aVertexTangent");
	    gl.enableVertexAttribArray(shaderProgram.aVertexTangent);*/

	    shaderProgram.aVertexColor = gl.getAttribLocation(shaderProgram, "aVertexColor");
	    gl.enableVertexAttribArray(shaderProgram.aVertexColor);

	    //BOOLEAN SELECTORS
	    shaderProgram.uUseMaterial = gl.getUniformLocation(shaderProgram, "uUseMaterial");
	    //shaderProgram.uUseCubeMap = gl.getUniformLocation(shaderProgram, "uUseCubeMap");

	    //TRANSFORMATION MATRICES
	    shaderProgram.uPMatrix = gl.getUniformLocation(shaderProgram, "uPMatrix");
	    shaderProgram.uMVMatrix = gl.getUniformLocation(shaderProgram, "uMVMatrix");
	    shaderProgram.uMMatrix = gl.getUniformLocation(shaderProgram, "uMMatrix");
	   	shaderProgram.uNMatrix = gl.getUniformLocation(shaderProgram, "uNMatrix");

	    //TEXTURING
	    shaderProgram.uTSampler = gl.getUniformLocation(shaderProgram, "uTSampler");
	    /*shaderProgram.uNSampler = gl.getUniformLocation(shaderProgram, "uNSampler");
	    shaderProgram.uCubeSampler = gl.getUniformLocation(shaderProgram, "uCubeSampler");*/

	    //MATERIAL PROPERTIES
	    shaderProgram.uMaterialAmbient = gl.getUniformLocation(shaderProgram, "uMaterialAmbient");
	    shaderProgram.uMaterialSecular = gl.getUniformLocation(shaderProgram, "uMaterialSecular");
	    shaderProgram.uMaterialDiffuse = gl.getUniformLocation(shaderProgram, "uMaterialDiffuse");
	   	shaderProgram.uMaterialShininess = gl.getUniformLocation(shaderProgram, "uMaterialShininess");

	    //LIGHT PROPERTIES
	    shaderProgram.uUseLighting = gl.getUniformLocation(shaderProgram, "uUseLighting");
	    shaderProgram.uLightPosition = gl.getUniformLocation(shaderProgram, "uLightPosition");
	    shaderProgram.uLightAmbient = gl.getUniformLocation(shaderProgram, "uLightAmbient");
	    shaderProgram.uLightSecular = gl.getUniformLocation(shaderProgram, "uLightSecular");
	    shaderProgram.uLightDiffuse = gl.getUniformLocation(shaderProgram, "uLightDiffuse");
	}

	this.initGridShader = function(){
		var fragmentShader = this.getShader(gl, "shader-fs-grid");
	    var vertexShader = this.getShader(gl, "shader-vs-grid");
		
	    gridShaderProgram = gl.createProgram();
	    gl.attachShader(gridShaderProgram, vertexShader);
	    gl.attachShader(gridShaderProgram, fragmentShader);
	    gl.linkProgram(gridShaderProgram);

	    if (!gl.getProgramParameter(gridShaderProgram, gl.LINK_STATUS)) {
	        alert("Could not initialise shaders");
	    }

	    gl.useProgram(gridShaderProgram);

	    gridShaderProgram.aVertexPosition = gl.getAttribLocation(gridShaderProgram, "aVertexPosition");
	    gl.enableVertexAttribArray(gridShaderProgram.aVertexPosition);
		gridShaderProgram.aVertexColor = gl.getAttribLocation(gridShaderProgram, "aVertexColor");
	    gl.enableVertexAttribArray(gridShaderProgram.aVertexColor);

	    gridShaderProgram.uPMatrix = gl.getUniformLocation(gridShaderProgram, "uPMatrix");
	    gridShaderProgram.uMVMatrix = gl.getUniformLocation(gridShaderProgram, "uMVMatrix");
	    gridShaderProgram.uMMatrix = gl.getUniformLocation(gridShaderProgram, "uMMatrix");
	}
	//info("Shader Program Created");
};