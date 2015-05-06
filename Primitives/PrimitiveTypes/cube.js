/*=====================================================================*
 *          Cube Start
 *      Self-Invoked class that returns cube properties
 *=====================================================================*/
var cube = {};

cube.generateVerts = function(){
	var vertices = [
        // Front face
        -1.0, -1.0,  1.0,
         1.0, -1.0,  1.0,
         1.0,  1.0,  1.0,
        -1.0,  1.0,  1.0,

        // Back face
        -1.0, -1.0, -1.0,
        -1.0,  1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0, -1.0, -1.0,

        // Top face
        -1.0,  1.0, -1.0,
        -1.0,  1.0,  1.0,
         1.0,  1.0,  1.0,
         1.0,  1.0, -1.0,

        // Bottom face
        -1.0, -1.0, -1.0,
         1.0, -1.0, -1.0,
         1.0, -1.0,  1.0,
        -1.0, -1.0,  1.0,

        // Right face
         1.0, -1.0, -1.0,
         1.0,  1.0, -1.0,
         1.0,  1.0,  1.0,
         1.0, -1.0,  1.0,

        // Left face
        -1.0, -1.0, -1.0,
        -1.0, -1.0,  1.0,
        -1.0,  1.0,  1.0,
        -1.0,  1.0, -1.0
    ];
    return vertices;
 }
 
cube.generateTextureCoords = function(){
	var textureCoords = [
 		0,0,
 		1,0,
 		1,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,
 		0,1,
 	];
 	return textureCoords;
 }

cube.generateBasicColors = function(){
	var colors = [
        1.0, 0.0, 0.0, 1.0, // Front face RED
        1.0, 0.0, 0.0, 1.0, // Back face RED
        0.0, 0.0, 1.0, 1.0, // Top face BLUE
        0.0, 0.0, 1.0, 1.0, // Bottom face BLUE
        0.0, 1.0, 0.0, 1.0, // Right face GREEN
        0.0, 1.0, 0.0, 1.0  // Left face GREEN
    ];
    return colours;
 };
 
cube.generateIndices = function(){
	var indices = [
        0, 1, 2,      0, 2, 3,    // Front face
        4, 5, 6,      4, 6, 7,    // Back face
        8, 9, 10,     8, 10, 11,  // Top face
        12, 13, 14,   12, 14, 15, // Bottom face
        16, 17, 18,   16, 18, 19, // Right face
        20, 21, 22,   20, 22, 23  // Left face
    ];
    
    return indices;
 }

cube.generateNormals = function(){
    var normals = [
         0,  0,  1,         //FRONT FACE
         0,  0, -1,         //BACK FACE
         0,  1,  0,         //TOP FACE         
         0, -1,  1,         //BOTTOM FACE
         1,  0,  0,         //RIGHT FACE
        -1,  0,  0,         //LEFT FACE
    ];

    var normalsPerVert = [];
    for(var i = 0; i < normals.length; i += 3){
        for(var k = 0; k < 4; k++){
            normalsPerVert.push(normals[i]);
            normalsPerVert.push(normals[i+1]);
            normalsPerVert.push(normals[i+2]);
        }
    }

    return normalsPerVert;
 }