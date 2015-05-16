var particleSystem = function(origin, useMat)
{
	var position = origin;
	var scale;
	var rotation;
	var deg;

	var parts = 50;
	var particles = [];

	var lastTime = 0;
	var useMaterial = useMat;
	var material;

	var partsVertexBuffer;
    var partsTextureBuffer;

    this.initBuffers = function(){
		for (var i in parts)
		{
			particles[i].initBuffers();
		}
	}

	this.initParticles = function() {
        for (var i = 0; i < parts; i++) {
        	var life = Math.floor(Math.random() *501)+500;

            particles.push(new Particle(origin, life));
        }
    }
    

	this.draw = function(){
		for (var i in parts)
		{
			particles[i].draw();
		}
	}

	this.addTexture = function(type, src){
		if (!useMaterial)
		{
			useMaterial = true;
			this.material = new Material();

		}

		switch(type){
			case "textureMap":
				this.material.addTexture(src);
				break;
			case "bumpMap":
				this.material.addBump(src);
				break;
		}

		for (var i in particles)
		{
			particles[i].addTexture(type, src);
		}
	}

	function animate() {
        var timeNow = new Date().getTime();
        if (lastTime != 0) {
            var elapsed = timeNow - lastTime;

            for (var i in stars) {
                stars[i].animate(elapsed);
            }
        }
        lastTime = timeNow;
    }

    this.setPosition = function(p){
        position = p;
    }
    this.getPosition = function(){
        return position;
    }
    this.setScale = function(s){
        scale = s;
        for (var i in particles)
        	particles[i].setScale(s);
    }
    this.setRotation = function(r, d){
        rotation = r;
        deg = d;
        for (var i in particles)
        	particles[i].setRotation(r,d);
    }
    this.getRotation = function(){
        return rotation;
    }

	this.initParticles();
	this.initBuffers();
}