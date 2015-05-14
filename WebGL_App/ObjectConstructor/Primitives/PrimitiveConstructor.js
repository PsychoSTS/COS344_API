/**	=============================================================
			
			Primitive Class

	=============================================================**/
/**
 *Primitive Class and Constructor.
 */
var PrimitiveConstructor = function(){
	var grid= new Grid();
	var cube = new Cube();
	var pyramid = new Pyramid();
	var icosahedron = new Icosahedron();
	var icosphere = new IcoSphere();
	var uvsphere = new UVSphere();
	var plane = new Plane();

	/**
	 *Gets and returns a primitive object's base properties
	 *@param {Nmber} t
	 */
	this.getPrimitive = function(t){
		var data = [];
		switch (t){
			case PLANE:{
				data.push(plane.vertices);
				data.push(plane.indices);
				data.push(plane.colors);
				data.push(plane.textureCoords);
				data.push(cube.normals);
				break;
			}
			case CUBE:{
				data.push(cube.vertices);
				data.push(cube.indices);
				data.push(cube.colors);
				data.push(cube.textureCoords);
				data.push(cube.normals); 
				break;
			}
			case PYRAMID:{
				data.push(pyramid.vertices);
				data.push(pyramid.indices);
				data.push(pyramid.colors);
				data.push(pyramid.textureCoords);
				//data.push(pyramid.normals); 
				break;
			}
			case UVSPHERE:{
				data.push(uvsphere.vertices);
				data.push(uvsphere.indices);
				data.push(uvsphere.colors);
				data.push(uvsphere.textureCoords);
				data.push(uvsphere.normals);
				data.push(uvsphere.tangents);
				break;
			}
			case GRID:{
				data.push(grid.vertices);
				data.push(grid.indices);
				data.push(grid.colors);
				break;
			}
			case ICOSAHEDRON:
				break;
			case ICOSPHERE:
				break;
		}
		return data;
	}
}