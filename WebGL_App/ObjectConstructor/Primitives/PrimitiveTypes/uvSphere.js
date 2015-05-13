/*=====================================================================*
 *          UV SPHERE Start
 *=====================================================================*/
var UVSphere = function(){
    this.vertices;
    this.colors;
    this.textureCoords;
    this.indices;
    this.normals;
    this.tangents;

    /*GENERATES VERTICES, INDICES, TEXTURE COORDINATES
 *NORMALS AND TANGENTS*/
this.generateData = function(longit, lat, rad){
    var latitudeBands = lat;
    var longitudeBands = longit;
    var radius = rad;

    var vertexPositionData = [];
    var normalData = [];
    var textureCoordData = [];
    var tangents = [];
    for (var latNumber = 0; latNumber <= latitudeBands; latNumber++) {
      
      var theta = latNumber * Math.PI / latitudeBands;
      //NORMAL VECTOR
      var sinTheta = Math.sin(theta);
      var cosTheta = Math.cos(theta);
      //TANGENT VECTOR
      var negSinTheta = -1 * sinTheta;


      for (var longNumber = 0; longNumber <= longitudeBands; longNumber++) {
        var phi = longNumber * 2 * Math.PI / longitudeBands;
        //NORMAL VECTOR
        var sinPhi = Math.sin(phi);
        var cosPhi = Math.cos(phi);

        //VERTICES
        var x = cosPhi * sinTheta;
        var y = cosTheta;
        var z = sinPhi * sinTheta;
        //TANGENT
        var xUV = cosPhi * cosTheta;
        var yUV = negSinTheta;
        var zUV = sinPhi * cosTheta;
        //TEXTURE COORDS
        var u = 1 - (longNumber / longitudeBands);
        var v = 1 - (latNumber / latitudeBands);

        normalData.push(x);
        normalData.push(y);
        normalData.push(z);
        textureCoordData.push(u);
        textureCoordData.push(v);
        vertexPositionData.push(radius * x);
        vertexPositionData.push(radius * y);
        vertexPositionData.push(radius * z);
        tangents.push(xUV);
        tangents.push(yUV);
        tangents.push(zUV);
        }
    }

    var indexData = [];
    for (var latNumber = 0; latNumber < latitudeBands; latNumber++) {
      for (var longNumber = 0; longNumber < longitudeBands; longNumber++) {
        var first = (latNumber * (longitudeBands + 1)) + longNumber;
        var second = first + longitudeBands + 1;
        indexData.push(first);
        indexData.push(second);
        indexData.push(first + 1);

        indexData.push(second);
        indexData.push(second + 1);
        indexData.push(first + 1);
      }
    }

    
    this.vertices = vertexPositionData;
    this.normals = normalData;
    this.textureCoords = textureCoordData;
    this.indices = indexData;
    this.tangents = tangents;

    /*var ret = [ vertexPositionData, 
                normalData, 
                textureCoordData, 
                indexData, 
                tangents];*/
    //return ret;
 }

this.generateRandColors = function(vertices){
    var count = 0;
    var colors = [];
    for (var i=0; i < (vertices.length/3); i++) {
        if(count == 0){
            count++;
            colors.push([1.0, 0.0, 0.0, 1.0]);
        }else if(count == 1){
            count++;
            colors.push([0.0, 1.0, 0.0, 1.0]);
        }else if(count == 2){
            count++;
            colors.push([0.0, 0.0, 1.0, 1.0]);
        }else if(count == 3){
            colors.push([0.0, 1.0, 1.0, 1.0]);
            count = 0;
        }
    }

    var colorsOut = [];
    for(var i = 0; i < colors.length; i++){
        for(var k = 0; k < colors[i].length; k++){
            colorsOut.push(colors[i][k]);
        }
    }
    
    this.colors = colorsOut;
    //return /*myGL.flatten(*/colors/*)*/;
}

 this.generateData(30,30,1);
 this.generateRandColors(this.vertices);


};

