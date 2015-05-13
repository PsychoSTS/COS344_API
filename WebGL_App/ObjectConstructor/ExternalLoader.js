var ExternalLoader = function(){
	//info("ExternalLoader Started");

	this.loadJSONObject = function(object){
		try{
			var json = JSON.parse(object);
			var properties = this.extractData(json);
			
			return properties;
		}
		catch(e){
			error(e);
		}
		
	}

	this.extractData = function(json){
		var data = [];
		data.push(this.extractName(json));
		data.push(this.extractVertices(json));
		data.push(this.extractIndices(json));
		data.push(this.extractMaterial(json));
		data.push(this.extractTextureCoords(json));
		data.push(this.extractNormals(json));
		return data;
		
	}
	this.extractName = function(json){
		var name = json.rootnode.name;

		return name;
	}
	this.extractVertices = function(json){
		var vertices = json.meshes[0].vertices;

		return vertices;
	}
	this.extractIndices = function(json){
		var indices = [];
		for(var i = 0; i < json.meshes[0].faces.length; i++){
			for(var k = 0; k < 3; k++){
				indices.push(json.meshes[0].faces[i][k]);
			}
		}

		return indices;
	}
	this.extractMaterial = function(json){
		var mat = [];
		var diffuse = json.materials[0].properties[3].value; //RGB
		diffuse.push(json.materials[0].properties[7].value); //ALPHA / OPACITY

		mat.push(diffuse);
		return mat;
	}
	this.extractTextureCoords = function(json){
		var textureCoords = json.meshes[0].texturecoords;

		return textureCoords;
	}
	this.extractNormals = function(json){
		var normals = json.meshes[0].normals;

		var normals;
	}
}
	
