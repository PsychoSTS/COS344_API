var Icosahedron = function(){

this.generateVerts = function(vertices, indices){
	var t = (0.5 + Math.sqrt(5.0)) / 2.0;
	var vertexData = [
		[-1,  t,  0],//0
		[ 1,  t,  0],//1
		[-1, -t,  0],//2
		[ 1, -t,  0],//3
 
		 [0, -1,  t],//4
		 [0,  1,  t],//5
		 [0, -1, -t],//6
		 [0,  1, -t],//7
 
		 [t,  0, -1],//8
		 [t,  0,  1],//9
		[-t,  0, -1],//10
		[-t,  0,  1]//11
	];

	var indexData = [
		// 5 faces around point 0
			[0, 11, 5],
			[0, 5, 1],
			[0, 1, 7],
			[0, 7, 10],
			[0, 10, 11],
		// 5 adjacent faces
			[1, 5, 9],
			[5, 11, 4],
			[11, 10, 2],
			[10, 7, 6],
			[7, 1, 8],
		// 5 faces around point 3
			[3, 9, 4],
			[3, 4, 2],
			[3, 2, 6],
			[3, 6, 8],
			[3, 8, 9],
		// 5 adjacent faces
			[4, 9, 5],
			[2, 4, 11],
			[6, 2, 10],
			[8, 6, 7],
			[9, 8, 1]
	];

        for(var i = 0; i < vertexData.length; i++){
        	vertices.push(vertexData[i]);
        }
        for(var i = 0; i < indexData.length; i++){
     		indices.push(indexData[i]);
     	}
     	return vertices;
}
};
