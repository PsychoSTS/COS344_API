var Particle = function(origin, _lifetime){
	var direction;
	var position = origin;
    var rotation;
    var deg;
    var scale;
	var lifetime = _lifetime;
    var useMat = false;
    var material;

    var vertexBuffer;
    var colorBuffer;
    var indexBuffer;
    var textureBuffer;
    var normalBuffer;

    var primitive = new PrimitiveConstructor();
    var lateral = new Object(PLANE, primitive.getPrimitive(PLANE), true);
    lateral.addTexture("textureMap", "WebGL_App/Textures/forestFloor_Edit.jpg");
    lateral.setPosition(this.position);
    var cross = new Object(PLANE, primitive.getPrimitive(PLANE), true);
    cross.addTexture("textureMap", "WebGL_App/Textures/forestFloor_Edit.jpg");
    cross.setPosition(this.position);
//NB    //rotate one plane by 90 degrees   MUST HAPPEN        --------------------------------------------------

    var X = Math.floor(Math.random() * 2) - 1;
    var Y = Math.floor(Math.random() * 2) - 1;
    var Z = Math.floor(Math.random() * 3);



    this.draw = function () {
        
        //Wat de fok nou?

    };

    this.animate = function(elapsedTime) {
                
        this.position[0] += directionVector[0];
        this.position[1] += directionVector[1];
        this.position[2] += directionVector[2];

        lateral.setPosition(this.position);
        cross.setPosition(this.position);

        this.lifetime -= elapsedTime;
    };		

    this.addTexture = function(type, src){
        if (!useMat)
        {
            useMat = true;
            this.material = new Material();
        }

        switch(type){
            case "textureMap":
                this.material.addTexture(src);
                lateral.addTexture(src);
                cross.addTexture(src);
                break;
            case "bumpMap":
                this.material.addBump(src);
                lateral.addBump(src);
                cross.addBump(src);
                break;
        }
    }

    this.buildMM = function(){
        mat4.identity(mmMatrix);
        mat4.rotate(mmMatrix, mmMatrix, degToRad(deg), rotation);
        mat4.scale(mmMatrix, mmMatrix, [scale, scale, scale]);
        mat4.translate(mmMatrix, mmMatrix, position);
        gl.uniformMatrix4fv(currentProgram.uMMatrix, false, mmMatrix);

        if(useMat){
            var mv = [];
            mat4.multiply(mv, mmMatrix, mvMatrix);
            var nMatrix = [];
            mat4.copy(nMatrix, mv);
            mat4.invert(nMatrix, nMatrix);
            mat4.transpose(nMatrix, nMatrix);
            gl.uniformMatrix4fv(currentProgram.uNMatrix, false, nMatrix);
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
}