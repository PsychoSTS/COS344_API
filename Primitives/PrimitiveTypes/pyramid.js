/*=====================================================================*
 *          Pyramid Start
 *=====================================================================*/
var pyramid = {};

pyramid.generateVerts = function(){
	var vertices = [
        // Front face
         0.0,  1.0,  0.0,  //Vertex 1
        -1.0, -1.0,  1.0,  //Vertex 2
         1.0, -1.0,  1.0,  //Vertex 3
         // Right face
         0.0,  1.0,  0.0,  //Vertex 1
         1.0, -1.0,  1.0,  //Vertex 3
         1.0, -1.0, -1.0,  //Vertex 4
        // Back face
         0.0,  1.0,  0.0,  //Vertex 1
         1.0, -1.0, -1.0,  //Vertex 4
        -1.0, -1.0, -1.0,  //Vertex 5
        // Left face
         0.0,  1.0,  0.0,  //Vertex 1
        -1.0, -1.0, -1.0,  //Vertex 5
        -1.0, -1.0,  1.0,  //Vertex 2
        //Bottom face Tr1
        -1.0, -1.0, 1.0,  //Vertex 2
         1.0, -1.0, 1.0,  //Vertex 3
        -1.0, -1.0, -1.0,  //Vertex 5
        //Bottom face Tr2
         1.0, -1.0, 1.0,  //Vertex 3
         1.0, -1.0, -1.0, //Vertex 4
        -1.0, -1.0, -1.0   //Vertex 5
    ];
    return vertices;
 }
 
pyramid.generateBasicInterpolatedColors = function(){
	var colors = [
        // Front face
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        // Right face
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        // Back face
        1.0, 0.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        // Left face
        1.0, 0.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        //Bottom face Tri1
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        //Bottom face Tri2
        0.0, 0.0, 1.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 0.0, 1.0, 1.0
    ];
    
    return colors;
 }

pyramid.generateBasicColors = function(){
    var colors = [
        // Front face
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        // Right face
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        // Back face
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        1.0, 0.0, 0.0, 1.0,
        // Left face
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        0.0, 1.0, 0.0, 1.0,
        //Bottom face Tri1
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        //Bottom face Tri2
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0,
        0.0, 0.0, 1.0, 1.0
    ];
    
    return colors;
 }

pyramid.generateTextureCoords = function(){
 	var textureCoords = [
 		0,0,
 		0.5,1,
 		0,1,

 		0,0,
 		0.5,1,
 		0,1,

 		0,0,
 		0.5,1,
 		0,1,

 		0,0,
 		0.5,1,
 		0,1,

 		0,0,
 		1,0,
 		1,1,

 		0,0,
 		1,1,
 		0,1,
 	];
 	return textureCoords;
 }

pyramid.generateNormals = function(){
    
}