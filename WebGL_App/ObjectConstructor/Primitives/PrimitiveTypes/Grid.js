var Grid = function(){
	this.vertices;
	this.indices;
	this.colors;

	this.generateData = function(){
		var verts = [];
		var col = [];
		var w = 25, h = 25;

		for(var i = 0; i < h; i++){
			var z = Math.floor(h/2)-i;
			for(var k = 0; k < w; k++){
				var x = Math.floor(w/2)-k;
				verts.push(x);
				verts.push(0);
				verts.push(z);

				col.push(1.0);
				col.push(1.0);
				col.push(1.0);
				col.push(1.0);
			}
		}
		var ind = [];
		for(var i = 0; i < h; i++){
			for(var k = 0; k < w-1; k++){
				ind.push((i*w)+k);
				ind.push((i*w)+k+1);
			}
		}
		for(var i = 0; i < w; i++){
			for(var k = 0; k < h-1; k++){
				ind.push((k*w)+i);
                ind.push((k*w)+i+w);
			}
		}

		this.vertices = verts;
		this.indices = ind;
		this.colors = col;
	}

	this.generateData();
}