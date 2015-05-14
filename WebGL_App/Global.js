//GLOBAL CONSTANTS
var PLANE = 0;
var CUBE = 1;
var PYRAMID = 2;
var ICOSAHEDRON = 3;
var ICOSPHERE = 4;
var UVSPHERE = 5;
var GRID = 6;
var CAMERA = 7;

//EXTERNAL MODELS
var FOREST_FLOOR = forestFloor;
var FOREST_TREE_001 = forestTree001;
var FOREST_ROCK_001 = forestRock001;
var COULDRON = couldron;


//GL Context
var gl;
//Shader program
var currentProgram;
var shaderProgram;
var gridShaderProgram;

//Main transforms
var mvMatrix = [];
var pMatrix = [];
var mmMatrix = [];

//Debugging 
function info(i){
	console.info(i);
}
function error(e){
	console.error(e);
}

/*==========================================================*
	Degrees to Radians converter
*===========================================================*/
function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

//info("Global Declaerations Finished");