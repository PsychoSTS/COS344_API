var IcoSphere = function(){

this.generateVerts = function(vertices, indices, detail){
	var vertexData = icosahedron.generateVerts(vertices, indices);
	var indexData = [];
	var count = detail;

	for(var i = 0; i < indices.length; i++){
		indexData.push(indices[i]);
	}

	if(detail > 0)
	{
		//Refine triangle faces
		var tmpVerts = [];
		var tmpIndices = [];
		for(var k = 0; k < indexData.length; k++){ //For each face (3 opeenvolgende indices)
			//Replace curr triangle by 4 new triangles
			var a = indexData[k][0];
			var b = indexData[k][1];
			var c = indexData[k][2];

			icosphere.subdivideFace(count, vertexData[a], vertexData[b], vertexData[c], tmpIndices, tmpVerts);
		}
		
		tmpVerts = myGL.flatten(tmpVerts);
		tmpIndices = myGL.flatten(tmpIndices);
		
		for(var i = 0; i < tmpVerts.length; i++){
			vertices[i] = (tmpVerts[i]);
		}
		for(var i = 0; i < tmpIndices.length; i++){
			indices[i] = (tmpIndices[i]);
		}
	}
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
	
	return myGL.flatten(colors);
}

this.subdivideFace = function(count, p1, p2, p3, indices, vertices){
	var countTmp = count;
	p1 = icosphere.movePointToSphere(p1);
	p2 = icosphere.movePointToSphere(p2);
	p3 = icosphere.movePointToSphere(p3);

	var pMid1 = icosphere.getMid(p1, p2);
	//console.log(p1 + "	 ===== 		" + p2 + "		====== 		" + pMid1);
	var pMid2 = icosphere.getMid(p2, p3);
	var pMid3 = icosphere.getMid(p1, p3);

	var new1 = icosphere.movePointToSphere(pMid1);
	var new2 = icosphere.movePointToSphere(pMid2);
	var new3 = icosphere.movePointToSphere(pMid3);
	countTmp -= 1;
	  
	//Recall recursion untill count == 0;

	if(countTmp > 0){
		icosphere.subdivideFace(countTmp, p1, new1, new3, indices, vertices);
		icosphere.subdivideFace(countTmp, new1, p2, new2, indices, vertices);
		icosphere.subdivideFace(countTmp, new1, new2, new3, indices, vertices);
		icosphere.subdivideFace(countTmp, new3, new2, p3, indices, vertices);
	}
	else{
	
		icosphere.makeFace(p1, new1, new3, indices, vertices);
		//console.log(myGL.flatten(indices));
		icosphere.makeFace(new1, p2, new2, indices, vertices);
		//console.log(myGL.flatten(indices));
		icosphere.makeFace(new1, new2, new3, indices, vertices);
		//console.log(myGL.flatten(indices));
		icosphere.makeFace(new3, new2, p3, indices, vertices);
	}

	return;
}

this.getMid = function(p1, p2){
	var point = [
		((p1[0]+p2[0])/2),
		((p1[1]+p2[1])/2),
		((p1[2]+p2[2])/2)
	];
	return point;
}

this.movePointToSphere = function(p){
	var vec = [];
	var vecDist = Math.sqrt(Math.pow(p[0], 2) + Math.pow(p[1], 2) + Math.pow(p[2], 2));

	for(var i =0 ; i < 3; i++){
		vec.push((p[i]/vecDist)*1);
	}

	return vec;
}

this.makeFace = function(p1, p2, p3, indices, vertices){
	if(indices.length == 0){
		indices.push([0,1,2]);
		vertices.push(p1);
		vertices.push(p2);
		vertices.push(p3);
	}
	else{
		
		var i1=-1, i2=-1, i3=-1;
		var largestIndex = icosphere.findLargest(indices);
		for(var i =0; i < indices.length; i++){

			for(var k=0; k < indices[i].length; k++){

				if(icosphere.isEqual(vertices[indices[i][k]] ,p1)){
					i1 = indices[i][k];
					largestIndex = icosphere.findLargest(indices);
				}
				else if(icosphere.isEqual(vertices[indices[i][k]] ,p2)){
					i2 = indices[i][k];
					largestIndex = icosphere.findLargest(indices);
				}
				else if(icosphere.isEqual(vertices[indices[i][k]] ,p3)){
					i3 = indices[i][k];
					largestIndex = icosphere.findLargest(indices);
				}
			}
		}

		if(i1 == -1){
			i1 = largestIndex+1;
			largestIndex++;
			vertices.push(p1);
		}
		if(i2 == -1){
			i2 = largestIndex+1;
			largestIndex++;
			vertices.push(p2);
		}
		if(i3 == -1){
			i3 = largestIndex+1;
			vertices.push(p3);
		}
		indices.push([i1,i2,i3]);
	}
}

this.isEqual = function(p1, p2){
	if(p1.length != p2.length)
		return false;
	for(var i = 0; i < p1.length; i++){
		if(p1[i] != p2[i])
			return false;
	}
	return true;
}

this.findLargest = function(arr){
	var L = 0;
	for(var i = 0; i < arr.length; i++){
		for(var k = 0; k < arr[i].length; k++){
			if(arr[i][k] > L)
				L = arr[i][k];
		}
	}
	return L;
}
};





