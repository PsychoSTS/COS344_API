var ObjectConstructor = function(){
	var primitive = new PrimitiveConstructor();
	var loader = new ExternalLoader();

	this.createPlane = function(){
		var obj = new Object(PLANE, primitive.getPrimitive(PLANE), true);
		return obj;
	}
	this.createCube = function(){
		var obj = new Object(CUBE, primitive.getPrimitive(CUBE), true);
		return obj;
	}
	this.createGrid = function(){
		var obj = new Object(GRID, primitive.getPrimitive(GRID), false);
		return obj;
	}
	this.createPyramid = function(){
		var obj = new Object(PYRAMID, primitive.getPrimitive(PYRAMID), true);
		return obj;
	}
	this.createUVSphere = function(){
		var obj = new Object(UVSPHERE, primitive.getPrimitive(UVSPHERE), true);
		return obj;
	}

	this.loadExternal = function(object){
		var properties = loader.loadJSONObject(object);	

		var data = [properties[1], properties[2], properties[3], properties[4], properties[5]];
		var obj = new Object(properties[0], data, true);
		return obj;
	}

	this.createLight = function(position){
		var l = new Light();
		l.setPosition(position);
		return l;
	}

	//info("Object Constructor Created");
}