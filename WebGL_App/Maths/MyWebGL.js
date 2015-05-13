/*=====================================================================*
 *		WebGL base Matrix/Vector/Math Library's Classes
 *=====================================================================*/
var extra = {}; // EXTRA HELPER FUNCTIONS
var myGL = {}; // GENERAL MATRIX AND VECOR FUNCTIONS
var trans = {}; // TRANSFORMATION OPERATIONS

var vec = {}; // VECTOR SPECIFIC FUNCTIONS
var vec2 = {}; // VECTOR2 SPECIFIC FUNCTIONS
var vec3 = {}; // VECTOR3 SPECIFIC FUNCTIONS
var vec4 = {}; // VECTOR4 SPECIFIC FUNCTIONS

var mat = {}; // MATRIX SPECIFIC FUNCTIONS
var mat2 = {}; // MATRIX2 SPECIFIC FUNCTIONS
var mat3 = {}; // MATRIX3 SPECIFIC FUNCTIONS
var mat4 = {}; // MATRIX4 SPECIFIC FUNCTIONS

/*=====================================================================*
 *			Extra helper functions
 *=====================================================================*/

/**
    Converts the arguments to a SINGLE FLAT array
*/
function _argumentsToArray( args ){
    return [].concat.apply( [], Array.prototype.slice.apply(args) );
}
	
/**
	Debugging function
*/
extra.error = function(error){
	alert("** MyWebGL Error: Check console for error. **");
	console.error("** MyWebGL Error: " + error + ". **");
}

/**
	Returns the radians of the given degrees
*/
extra.radians=function( degrees ) {
    return degrees * Math.PI / 180.0;
}

/**
    Returns the negative of the given val
*/
extra.negative = function(val){
	return -val;
}

/*=====================================================================*
 *          VECTOR CONSTRUCTORS
 * Arguments accept 2 - 4 values for 2 - 4 vectors respectively
 *=====================================================================*/
/*=====================================================================*
 *			2 Dimensional Vector
 *=====================================================================*/

vec2.create = function(){
    var copy = _argumentsToArray(arguments);

    var result = [0,0];

    for(var i = 0; i < copy.length && i < 2; i++){
        result[i] = copy[i];
    }

    result.vector = true;
    result.dimension = 2;

    return result;
};

/*=====================================================================*
 *          2 Dimensional Vector copy constructor
 *=====================================================================*/

vec2.copy= function(){
    if(arguments.length == 1 && arguments[0].vector && arguments[0].dimension == 2){
        var result = vec2.create(arguments[0][0], arguments[0][1]);
        return result;
    }
    else{
        extra.error("Can only receive 1 vector of the 2nd dimension");
        return;
    }
}

/*=====================================================================*
 *			3 Dimensional Vector
 *=====================================================================*/

vec3.create = function(){
    var copy = _argumentsToArray(arguments);

    var result = [0,0,0];

    for(var i = 0; i < copy.length && i < 3; i++){
        result[i] = copy[i];
    }

    result.vector = true;
    result.dimension = 3;

    return result;
};

/*=====================================================================*
 *          3 Dimensional Vector copy constructor
 *=====================================================================*/

vec3.copy= function(){
    if(arguments.length == 1 && arguments[0].vector && arguments[0].dimension == 3){
        var result = vec3.create(arguments[0][0], arguments[0][1], arguments[0][2]);
        return result;
    }
    else{
        extra.error("Can only receive 1 vector of the 3rd dimension");
        return;
    }
}

/*=====================================================================*
 *			4 Dimensional Vector
 *=====================================================================*/

vec4.create = function(){
    var copy = _argumentsToArray(arguments);

    var result = [0,0,0,0];

    for(var i = 0; i < copy.length && i < 4; i++){
        result[i] = copy[i];
    }

    result.vector = true;
    result.dimension = 4;

    return result;
};

/*=====================================================================*
 *          4 Dimensional Vector copy constructor
 *=====================================================================*/

vec4.copy= function(){
    if(arguments.length == 1 && arguments[0].vector && arguments[0].dimension == 4){
        var result = vec4.create(arguments[0][0], arguments[0][1], arguments[0][2], arguments[0][3]);
        return result;
    }
    else{
        extra.error("Can only receive 1 vector of the 4th dimension");
        return;
    }
}

/*=====================================================================*
 *          MATRIX CONSTRUCTORS 
 * Arguments only accept 2 - 4 parameters of 2 - 4 dimensional vectors
 * respective of the matrix dimensions.
 *=====================================================================*/
/*=====================================================================*
 *			2 Dimensional Matrix constructor
 *=====================================================================*/

mat2.create = function(){
    if(arguments.length > 2){
        extra.error("Too many arguments on matrix constructor. Matrix of 2 dimensions reguires only 2 vectors");
        return;
    }

    var copy = [];

    for(var i = 0; i < arguments.length; i++){
        if(!arguments[i].vector){
            extra.error("Matrix constructor may only receive vectors as arguments");
            return;
        }
        copy[i] = arguments[i];
    }

    var result = [vec2.create(), vec2.create()];

    for(var i = 0; i < copy.length && i < 2; i++){
        for(var k = 0; k < copy[i].length && k < 2; k++){
            result[k][i] = copy[i][k];
        }
    }

    result.matrix = true;
    result.dimension = 2;
    return result;
}

/*=====================================================================*
 *          2 Dimensional Matrix copy constructor
 *=====================================================================*/

mat2.copy= function(){
    if(arguments.length == 1 && arguments[0].matrix && arguments[0].dimension == 2){
        var result = mat2.create(
                vec.copy(arguments[0][0]),
                vec.copy(arguments[0][1])
            );
        return result;
    }
    else{
        extra.error("Can only receive 1 matrix of the 2nd dimension");
        return;
    }
}

/*=====================================================================*
 *			3 Dimensional Matrix constructor
 *=====================================================================*/

mat3.create = function(){
    if(arguments.length > 3){
        extra.error("Too many arguments on matrix constructor. Matrix of 3 dimensions reguires only 3 vectors");
        return;
    }

    var copy = [];

    for(var i = 0; i < arguments.length; i++){
        if(!arguments[i].vector){
            extra.error("Matrix constructor may only receive vectors as arguments");
            return;
        }
        copy[i] = arguments[i];
    }

    var result = [vec3.create(), vec3.create(), vec3.create()];

    for(var i = 0; i < copy.length && i < 3; i++){
        for(var k = 0; k < copy[i].length && k < 3; k++){
            result[k][i] = copy[i][k];
        }
    }

    result.matrix = true;
    result.dimension = 3;
    return result;
}

/*=====================================================================*
 *          3 Dimensional Matrix copy constructor
 *=====================================================================*/

mat3.copy= function(){
    if(arguments.length == 1 && arguments[0].matrix && arguments[0].dimension == 3){
        var result = mat3.create(
                vec.copy(arguments[0][0]),
                vec.copy(arguments[0][1]),
                vec.copy(arguments[0][2])
            );
        return result;
    }
    else{
        extra.error("Can only receive 1 matrix of the 3rd dimension");
        return;
    }
}

/*=====================================================================*
 *			4 Dimensional Matrix constructor
 *=====================================================================*/

mat4.create = function(){
    if(arguments.length > 4){
        extra.error("Too many arguments on matrix constructor. Matrix of 4 dimensions reguires only 4 vectors");
        return;
    }

    var copy = [];

    for(var i = 0; i < arguments.length; i++){
        if(!arguments[i].vector){
            extra.error("Matrix constructor may only receive vectors as arguments");
            return;
        }
        copy[i] = arguments[i];
    }

    var result = [vec4.create(), vec4.create(), vec4.create(), vec4.create()];
    
    for(var i = 0; i < copy.length && i < 4; i++){
        for(var k = 0; k < copy[i].length && k < 4; k++){
            result[i][k] = copy[i][k];
        }
    }

    result.matrix = true;
    result.dimension = 4;
    return result;
}

/*=====================================================================*
 *          4 Dimensional Matrix copy constructor
 *=====================================================================*/

mat4.copy= function(){
    if(arguments.length == 1 && arguments[0].matrix && arguments[0].dimension == 4){
        
        var result = mat4.create(
                vec.copy(arguments[0][0]),
                vec.copy(arguments[0][1]),
                vec.copy(arguments[0][2]),
                vec.copy(arguments[0][3])
            );
        
        return result;
    }
    else{
        extra.error("Can only receive 1 matrix of the 4th dimension");
        return;
    }
}

/*=====================================================================*
 *
 *                  VECTOR SPECIFIC OPERATIONS
 *
 *=====================================================================*/
 
/*=====================================================================*
 *                  VECTOR Print function
 *=====================================================================*/

vec.toString = function(vec){
    if(!vec.vector){
        extra.error("Function can only print vectors");
        return;
    }else{
        var ret = "Vector " + vec.dimension + " : [";
        for(var i = 0; i < vec.dimension; i++){
            ret = ret + vec[i];
            if(i != vec.dimension -1)
                ret = ret + ',';
            else ret = ret + ']';
        }
        return ret;
    }
 }

/*=====================================================================*
 *          General VECTOR cobstructor function
 * -> creates a vector of size dim
 *=====================================================================*/
vec.create = function(dim){
    switch(dim){
        case 2:
            return vec2.create();
            break;
        case 3:
            return vec3.create();
            break;
        case 4:
            return vec4.create();
            break;
    }
}

/*=====================================================================*
 *          General VECTOR copy cobstructor function
 * -> copies a vector of size dim
 *=====================================================================*/
vec.copy = function(){
    if(arguments.length == 1 && arguments[0].vector){
        var dim = arguments[0].dimension;
        switch(dim){
            case 2:
                return vec2.copy(arguments[0]);
                break;
            case 3:
                return vec3.copy(arguments[0]);
                break;
            case 4:
                return vec4.copy(arguments[0]);
                break;
        }
    }
    else{
        extra.error("Can only receive 1 matrix");
        return;
    }
}

/*=====================================================================*
 *          DOT PRODUCT
 * -> Calculates the dot product of VECTORS u and v
 *=====================================================================*/
vec.dot = function(u,v){
    if(!u.vector || !v.vector){
        extra.error("vec.dot(): only vectors allowed");
        return;
    }
    if ( u.dimension != v.dimension ) {
        extra.error("vec.dot(): vectors are not the same dimension");
        return;
    }

    var sum = 0;
    for ( var i = 0; i < u.dimension; ++i ) {
        sum += u[i] * v[i];
    }

    return sum;
}

/*=====================================================================*
 *          CROSS PRODUCT
 * -> Calculates the cross product of VECTORS u and v
 *=====================================================================*/
vec.cross = function(u,v){
    if(!u.vector || !v.vector){
        extra.error("vec.cross(): only vectors allowed");
        return;
    }
    if ( u.dimension != v.dimension ) {
        extra.error("vec.cross(): vectors are not the same dimension");
        return;
    }
    if(u.dimension < 3 || v.dimension < 3){
        extra.error("vec.cross(): arguments is not vectors of at least 3");
        return;
    }

    var result = vec3.create( 
        u[1]*v[2] - u[2]*v[1],
        u[2]*v[0] - u[0]*v[2],
        u[0]*v[1] - u[1]*v[0]
    );

    return result;
}

/*=====================================================================*
 *          NORMALIZE VECTOR
 * -> Normalizes the given vector u
 * -> A normalized vector maintains its direction but its Length becomes 1
 * -> The resulting vector is often called a unit vector
 * -> A vector is normalized by dividing the vector by its own Length
 *=====================================================================*/
vec.normalize = function(u){
    if(u && !u.vector){
        extra.error("vec.length() : needs a vector as parameter");
    }

    var length = vec.length(u);
    var result = vec.create(u.dimension);
    for(var i = 0; i < u.dimension; i++){
        result[i] = u[i]/length;
    }

    return result;
}

/*=====================================================================*
 *          LENGTH OF THE VECTOR
 * -> Calculates the length of the vector u
 *=====================================================================*/
 vec.length = function(u){
    return Math.sqrt(vec.dot(u, u));
}

vec.radians = function(u){
    if(!u.vector){
        extra.error("vec.radians() : Parameter needs to be a vector");
        return;
    }

    var result = vec.create(u.dimension);
    for(var i = 0; i < u.dimension; i++){
        result[i] = extra.radians(u[i]);
    }
    return result;
}

/*=====================================================================*
 *          ADD SCALAR FUNCTION
 * -> Adds a scalar value to the vector
 *=====================================================================*/
vec.addScalar = function(vector, scalar){
    if(!vector.vector){
        extra.error("vec.addScalar() : Parameter needs to be a vector");
        return;
    }
    for(var i = 0; i < vector.dimension; i++){
        if(vector[i] != 0)
            vector[i] += scalar;
    }
}

/*=====================================================================*
 *          NEGATIVE FUNCTION
 * -> Makrs vector values negative
 *=====================================================================*/
vec.negative = function(vector){
    if(!vector.vector){
        extra.error("vec.negative() : Parameter needs to be a vector");
        return;
    }
    result = vec.create(vector.dimension);
    for(var i = 0; i < vector.dimension && i < 3; i++){
        if(vector[i] != 0)
            result[i] = extra.negative(vector[i]);
    }
    return result;
}

/*=====================================================================*
 *          NEGATE FUNCTION
 * -> Negates this vector. The vector has the same magnitude as before, 
 *      but its direction is now opposite. 
 *=====================================================================*/

vec.negate = function( u ){
    if(!u.vector){
        extra.error("vec.negate() : Parameter needs to be a vector");
        return;
    }
    result = vec.create(u.dimension);
    for ( var i = 0; i < u.dimension; ++i ) {
        result[i] = -u[i];
    }

    return result;
}

/*=====================================================================*
 *
 *                  MATRIX SPECIFIC OPERATIONS
 *
 *=====================================================================*/
/*=====================================================================*
 *          General MATRIX cobstructor function
 * -> creates a matrix of size dim
 *=====================================================================*/
mat.create = function(dim){
    switch(dim){
        case 2:
            return mat2.create();
            break;
        case 3:
            return mat3.create();
            break;
        case 4:
            return mat4.create();
            break;
    }
}

/*=====================================================================*
 *          General MATRIX copy cobstructor function
 * -> copies a matrix of size dim
 *=====================================================================*/
mat.copy = function(){
    if(arguments.length == 1 && arguments[0].matrix){
        var dim = arguments[0].dimension;
        switch(dim){
            case 2:
                return mat2.copy(arguments[0]);
                break;
            case 3:
                return mat3.copy(arguments[0]);
                break;
            case 4:
                return mat4.copy(arguments[0]);
                break;
        }
    }
    else{
        extra.error("Can only receive 1 matrix");
        return;
    }
}

/*=====================================================================*
 *          MATRIX Print function
 * -> Ues the corresponding vector print functions for each internal vector
 *=====================================================================*/
mat.toString= function(mat){
    if(!mat.matrix){
        extra.error("mat.toString() : Function can only print matrices");
        return;
    }
    else{
        var ret = "Matrix " + mat.dimension + " : [\n";
        for(var i = 0; i < mat.dimension; i++){
            ret = ret + "\t " + vec.toString(mat[i]); 
            if(i != mat.dimension -1)
                ret = ret + ",\n";
            else ret = ret + "\n\t]";
        }
    }
    return ret;
}

/*=====================================================================*
 *          TRANSPOSE MATRIX mat
 * -> reflect A over its main diagonal (which runs from top-left to bottom-right) to obtain AT.
 * -> write the rows of A as the columns of AT.
 * -> write the columns of A as the rows of AT.
 *=====================================================================*/
mat.transpose=function(matrix){
    if(!matrix.matrix){
        extra.error("mat.transpose() : Can only transpose a matrix");
        return;
    }

    var dim = matrix.dimension;
    var result = mat.create(dim);
    for (var i = 0; i < dim; ++i) {
        for (var j = 0; j < dim; ++j ) {
            result[i][j] = matrix[j][i];
        }
    }
    return result;
}

/*=====================================================================*
 *          MULTIPLY MATRICES U AND V
 * -> Normal matrix multiplication
 *=====================================================================*/
mat.mult = function(u, v){
    if(!u.matrix || !v.matrix){
        extra.error("mat.mult() can only multiply matrices");
        return null;
    }
    else if(u.dimension != v.dimension){
        extra.error("mat.mult() can only multiply matrices of same dimension");
        return null;
    }

    var result = mat.create(u.dimension);
    for ( var i = 0; i < u.dimension; i++ ) {
        for ( var j = 0; j < u.dimension; j++ ) {
            var sum = 0.0;
            for ( var k = 0; k < u.dimension; k++ ) {
                sum = sum + (u[i][k] * v[k][j]);
            }
            result[i][j] = sum;
        }
    }

    return result;
}

/*=====================================================================*
 * Set a mat to the identity matrix
 *=====================================================================*/
mat.identity = function(matrix){
    var result = mat.create(matrix.dimension);

    result[0][0] = 1;
    result[1][1] = 1;
    if(matrix.dimension == 3 || matrix.dimension == 4)
        result[2][2] = 1;
    if(matrix.dimension == 4)
        result[3][3] = 1;

    return result;
}

/*=====================================================================*
 * Flattem a multidimesnional matrix to a flat array
 *=====================================================================*/
mat.flatten = function(matrix){
    if(!matrix.matrix){
        extra.error("mat.flatten() : Can only flatten a matrix");
        return;
    }
    var result = [];
    for(var i = 0; i < matrix.dimension; i++){
        for(var k = 0; k < matrix[i].dimension; k++){
            result.push(matrix[k][i]);
        }
    }
    return result;
}

/*=====================================================================*
 *
 *          GENERAL MATRIX AND VECTOR SPECIFIC OPERATIONS
 *
 *=====================================================================*/
/*=====================================================================*
 *          EQUALS FUNCTION
 * -> Tests if u and v is equal
 * -> Returns a boolean
 *=====================================================================*/
myGL.equal = function(u, v){
    if(u.dimension != v.dimension){
        extra.error("Cannot test equal, dimensions differ");
        return false;
    }
    if((!u.matrix && !u.vector) || (!v.matrix && !v.vector)){
        extra.error("Parameters must be a Vector or Matrix");
        return false;
    }
    
    if(u.matrix && v.matrix){
        for(var i = 0; i < u.dimension; i++){
            if(!myGL.equal(u[i], v[i])){
                return false;
            }
        }
        return true;
    }else if(u.vector && v.vector){
        for(var i = 0; i < u.dimension; i++){
            if(u[i] != v[i])
                return false;
        }
        return true;
    }else{
        extra.error("Cannot test equals on a matrix and vector");
        return false;
    }
}

/*=====================================================================*
 *          ADDITION FUNCTION
 * -> Adds the vectors/matrices to one another
 * -> Returns the result
 *=====================================================================*/
myGL.add = function(u, v){
    if(u.dimension != v.dimension){
        extra.error("Cannot add, dimensions differ");
        return 0;
    }
    if((!u.matrix && !u.vector) || (!v.matrix && !v.vector)){
        extra.error("Parameters must be a Vector or Matrix");
        return 0;
    }

    if(u.matrix && v.matrix){
        var result = mat.create(u.dimension);
        for(var i = 0; i < u.dimension; i++){
            result[i] = myGL.add(u[i], v[i]);
        }
    }else if(u.vector && v.vector){
        var result = vec.create(u.dimension);
        for(var i = 0; i < u.dimension; i++){
            result[i] = u[i] + v[i];
        }
        return result;
    }else{
        extra.error("Cannot add a matrix to a vector");
        return 0;
    }
}

/*=====================================================================*
 *          SUBTRACTION FUNCTION
 * -> Subtracts the vectors/matrices from one another
 * -> Returns the result
 *=====================================================================*/
myGL.subtract = function(u, v){
    if(u.dimension != v.dimension){
        extra.error("Cannot subtract, dimensions differ");
        return 0;
    }
    if((!u.matrix && !u.vector) || (!v.matrix && !v.vector)){
        extra.error("Parameters must be a Vector or Matrix");
        return 0;
    }

    if(u.matrix && v.matrix){
        var result = mat.create(u.dimension);
        for(var i = 0; i < u.dimension; i++){
            result[i] = myGL.subtract(u[i], v[i]);
        }
    }else if(u.vector && v.vector){
        var result = vec.create(u.dimension);
        for(var i = 0; i < u.dimension; i++){
            result[i] = u[i] - v[i];
        }
        return result;
    }else{
        extra.error("Cannot subtract a matrix to a vector");
        return 0;
    }
}

/*=====================================================================*
 *          MULTIPLICATION FUNCTION
 * -> Multiplies the vectors/matrices to one another
 * -> Returns the result
 *=====================================================================*/
myGL.mult = function(u, v, type){
    if((u.matrix || u.vector) && type=="Scalar"){
        if(u.vector){
            for(var i = 0; i < u.dimension; i++){
                u[i] *= v;
            }
        }
        else if(u.matrix){
            for(var i = 0; i < u.dimension; i++){
                myGL.mult(u[i], v, "Scalar");
            }
        }
        return;
    }
    if(u.dimension != v.dimension){
        extra.error("Cannot multply, dimensions differ");
        return 0;
    }
    if((!u.matrix && !u.vector) || (!v.matrix && !v.vector)){
        extra.error("Parameters must be a Vector or Matrix");
        return 0;
    }

    if(u.matrix && v.matrix){
        return mat.mult(u,v);
    }else if(u.vector && v.vector){
        if(type == ""){
            extra.error("Need to specify dot or cross product");
            return 0;
        }
        else if(type == "dot"){
            return vec.dot(u,v);
        }
        else if(type == "cross"){
            return vec.cross(u,v);
        }
    }else if(u.matrix && v.vector){
        return myGL.mult.vecMat(u,v);
    }else if(u.vector && v.matrix){
        return myGL.mult.vecMat(v,u);
    }else{
        extra.error("Cannot multply a matrix to a vector");
        return false;
    }
}

/*=====================================================================*
 *   MULTIPLICATION FUNCTION HELPER FOR VECTOR MATRIC MULTIPLICATION
 * -> Multiplies the vectors/matrices to one another
 * -> Returns the resulting vector
 *=====================================================================*/
myGL.mult.vecMat = function(matrix,vector){
    var result = vec.create(vector.dimension);

    for(var i = 0; i < vector.dimension; i++){
        var matRowSum = 0;
        for(var k = 0; k < vector.dimension; k++ ){
            matRowSum += matrix[i][k] * vector[i];
        }
        result[i] = matRowSum;
    }
    return result;
}

/*=====================================================================*
 *
 *          VIEW MATRIX SPECIFIC OPERATIONS
 *
 *=====================================================================*/
/*=====================================================================*
 * Generates a perspective projection matrix with the given bounds
 *=====================================================================*/ 
myGL.perspective=function( fovy, aspect, near, far ){
    var f = 1.0 / Math.tan( extra.radians(fovy) / 2 );
    var distance = far - near;

    var result = mat.identity(mat4.create());
    result[0][0] = f / aspect;
    result[1][1] = f;
    result[2][2] = -(near + far) / distance;
    result[2][3] = -2 * near * far / distance;
    result[3][2] = -1;
    result[3][3] = 0.0;

    return result;
}

/*=====================================================================*
 * Generates an orthogonal projection matrix with the given bounds
 *=====================================================================*/ 
myGL.orthogonal = function(leftBound, rightBound, bottomBound, topBound, near, far){
	if(leftBound === rightBound)
		extra.error("myGL.orthogonal, left and right bounds cannot same.");
	if(topBound === bottomBound)
		extra.error("myGL.orthogonal, top and bottom bounds cannot be same.");
	if(topBound === bottomBound)
		extra.error("myGL.orthogonal, top and bottom bounds cannot same.");
	
	var width  = rightBound - leftBound;
	var height = topBound - bottomBound;
	var distance = far-near;
	
	var result = mat.identity(mat4.create());
	result[0][0] = 2.0/(width);
	result[1][1] = 2.0/(height);
	result[2][2] = extra.negative(2.0/distance);
	result[0][3] = extra.negative((leftBound+rightBound)/width);
	result[1][3] = extra.negative((topBound+bottomBound)/height);
	result[2][3] = extra.negative((far+near)/distance);

	return result;
}

/*=====================================================================*
 * Generates an oblique projection matrix with the given bounds
 *=====================================================================*/ 
myGL.oblique = function(theta, phi, ortho){
    var cotTheta = -1/Math.tan(extra.radians(theta));
    var cotPhi = -1/Math.tan(extra.radians(phi));

    var Hshear = mat.identity(mat4.create());
    Hshear[0][2] = cotTheta;
    Hshear[1][2] = cotPhi;

    var oblique = myGL.mult(ortho,Hshear);
    
    return oblique;
}

myGL.flatten = function(array){
    var result = [];
    for(var i = 0; i < array.length; i++){
        for(var k = 0; k < array[i].length; k++){
            result.push(array[i][k]);
        }
    }
    return result;
}

/*=====================================================================*
 *
 *          TRANSLATION MATRIX AND VECTOR SPECIFIC OPERATIONS
 *
 * -> All is non-affined
 *=====================================================================*/

/*=====================================================================*
 * Translate a mat4 by the given vector
 *=====================================================================*/

trans.translate = function(matrix, trans){
    if(!matrix.matrix && !trans.vector){
        extra.error("trans.translate() : Parameters should be a matrix and a vector");
        return;
    }
    if(matrix.dimension != trans.dimension){
        extra.error("trans.translate() : Matrix and vector need same dimensions");
        return;
    }
    if(matrix.dimension < 4 || trans.dimension < 4){
        extra.error("trans.translate() : Matrix and vector need to be in homogeonous coordinates");
        return;
    }

    var result = mat.copy(matrix);

    for(var i = 0; i < matrix.dimension; i++){
        result[i][matrix.dimension-1] = matrix[i][matrix.dimension-1] + trans[i];
    }

    return result;
}

/*=====================================================================*
 * Scale a given matrix
 *=====================================================================*/
trans.scale = function(matrix, vector){
    if(!matrix.matrix && !vector.vector){
        extra.error("trans.translate() : Parameters should be a matrix and a vector");
        return;
    }
    if(matrix.dimension != vector.dimension){
        extra.error("trans.translate() : Matrix and vector need same dimensions");
        return;
    }
    if(matrix.dimension < 4 || vector.dimension < 3){
        extra.error("trans.translate() : Matrix and vector need to be in homogeonous coordinates");
        return;
    }

    var res = mat.copy(matrix);

    res[0][0] = matrix[0][0] * vector[0];
    res[1][1] = matrix[1][1] * vector[1];
    res[2][2] = matrix[2][2] * vector[2];

    return res;
}

/*=====================================================================*
 * Shears a given matrix
 *=====================================================================*/
trans.shear = function(matrix, rad, axis){
    var cot = 1/Math.tan(rad);
    var res = mat.identity(mat4.create());
    var x=0, y=0, z=0;
    
    if(axis == "x")
        x = cot;
    else if(axis == "y")
        y = cot;
    else if(axis == "z")
        z = cot;
    
    mat.identity(res, 4);

    res[0][1] = x;
    res[1][2] = y;
    res[2][0] = z;
    
    return myGL.mult(res, matrix);
}

/*=====================================================================*
 * Rotate a mat4 by the given vector
 *=====================================================================*/
trans.rotate = function(matrix,deg){
    if(!matrix.matrix || !deg.vector){
        extra.error("trans.rotate() : Requires Matrix and Degrees-(as a vector) as parameters");
    }

    var angles = vec.radians(deg);
    var cos = [Math.cos(angles[0]), Math.cos(angles[1]), Math.cos(angles[2])];
    var sin = [Math.sin(angles[0]), Math.sin(angles[1]), Math.sin(angles[2])];

    var rx = mat4.create(
         vec4.create(1.0,  0.0,  0.0, 0.0),
         vec4.create(0.0,  cos[0],  sin[0], 0.0),
         vec4.create(0.0, -sin[0],  cos[0], 0.0),
         vec4.create(0.0,  0.0,  0.0, 1.0) 
    );

    var ry = mat4.create(
        vec4.create(cos[1], 0.0, -sin[1], 0.0),
        vec4.create(0.0, 1.0,  0.0, 0.0),
        vec4.create(sin[1], 0.0,  cos[1], 0.0),
        vec4.create(0.0, 0.0,  0.0, 1.0)  
    );

    var rz = mat4.create(
        vec4.create(cos[2], -sin[2], 0.0, 0.0),
        vec4.create(sin[2],  cos[2], 0.0, 0.0),
        vec4.create(0.0,  0.0, 1.0, 0.0),
        vec4.create(0.0,  0.0, 0.0, 1.0)
    );

    return myGL.mult(myGL.mult(myGL.mult(matrix, rz),ry),rx);
}

trans.lookAt = function( eye, at, up )
{
    if ( !eye.vector || eye.dimension != 3) {
        throw "trans.lookAt() : first parameter [eye] must be an a vec3";
    }

    if ( !at.vector || at.dimension != 3) {
        throw "trans.lookAt() : first parameter [at] must be an a vec3";
    }

    if ( !up.vector || up.dimension != 3) {
        throw "trans.lookAt() : first parameter [up] must be an a vec3";
    }

    if ( myGL.equal(eye, at) ) {
        return mat4.create();
    }
    var v = vec.normalize( myGL.subtract(at, eye) );  // view direction vector
    var n = vec.normalize( vec.cross(v, up) );       // perpendicular vector
    var u = vec.normalize( vec.cross(n, v) );        // "new" up vector

    v = vec.negate( v );
    var result = mat4.create(
        vec4.create( n, -vec.dot(n, eye),0,0 ),
        vec4.create( u, -vec.dot(u, eye),0,0 ),
        vec4.create( v, -vec.dot(v, eye),0,0 ),
        vec4.create()
    );

    return result;
}