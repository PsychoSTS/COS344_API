var Plane = function(){
	this.vertices;
    this.colors;
    this.textureCoords;
    this.indices;

    this.generateVerts = function(){
    	var vertices = [
    		1,  1,	0,
    		-1, 1,	0,
    		-1,	-1,	0,
    		1,	-1,	0
    	];

    	this.vertices = vertices;
    }
    this.generateColors = function(){
    	var colors = [
    		0.5,0.5,0.5,1.0,
    		0.5,0.5,0.5,1.0,
    		0.5,0.5,0.5,1.0,
    		0.5,0.5,0.5,1.0
    	];

    	this.colors = colors;
    }
    this.generateTextureCoords = function(){
    	var textureCoords = [
    		1,	1,
    		0, 	1,
    		0,	0,
    		1,	0
    	];
    }
    this.generateIndices = function()[
    	0,1,3,		1,2,3
    ];

    this.generateVerts();
	this.generateTextureCoords();
	this.generateColors();
	this.generateIndices();
}