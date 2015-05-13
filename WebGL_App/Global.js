//GLOBAL CONSTANTS
var CUBE = 0;
var PYRAMID = 1;
var ICOSAHEDRON = 2;
var ICOSPHERE = 3;
var UVSPHERE = 4;
var GRID = 5;
var CAMERA = 6;

//EXTERNAL MODELS
var FOREST_FLOOR = forestFloor;
var FOREST_TREE_001 = forestTree001;
var FOREST_ROCK_001 = forestRock001;
var COULDRON = couldron;


//GL Context
var gl;
//Shader program
var shaderProgram;

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