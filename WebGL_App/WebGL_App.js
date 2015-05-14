var WebGL_App = function(c){
	var scene = new Scene();
	var objectConstructor = new ObjectConstructor();
	var shaderConstructor = new ShaderConstructor();
	var canvas = document.getElementById(c);
	var RENDER_STATE = true;

	/*==========================================================*
            INITIALIZATION
    *===========================================================*/
	this.initApp = function(){
		initGL(canvas);
        ctx = WebGLDebugUtils.makeDebugContext(canvas.getContext("webgl"));
		initBasicShaders();

		gl.clearColor(0.1, 0.1, 0.1, 1.0);
        gl.enable(gl.DEPTH_TEST);

        //INIT SCENE
        var sphere = objectConstructor.createPlane();
        sphere.addTexture("textureMap", "WebGL_App/Textures/forestFloor_Edit.jpg");
        scene.addAsset(sphere);
        
        /*var gridFloor = objectConstructor.createGrid();
        scene.addGrid(gridFloor);

        var sphere = objectConstructor.createUVSphere();
        sphere.addTexture("textureMap", "WebGL_App/Textures/forestFloor_Edit.jpg");
        scene.addAsset(sphere);

        var skySphere = objectConstructor.createUVSphere();
        skySphere.setScale(70);
        skySphere.addTexture("textureMap", "WebGL_App/Textures/stars.jpg");
        scene.addAsset(skySphere);

        var starterTree = objectConstructor.loadExternal(FOREST_TREE_001);
        starterTree.setPosition([0,-1,0]);
        starterTree.addTexture("textureMap", "WebGL_App/Textures/bark001_Edit.jpg");
        scene.addAsset(starterTree);

        var starterTree2 = objectConstructor.loadExternal(FOREST_TREE_001);
        starterTree2.setPosition([-3,-1,0]);
        starterTree2.addTexture("textureMap", "WebGL_App/Textures/bark001_Edit.jpg");
        scene.addAsset(starterTree2);

        var forestFloor = objectConstructor.loadExternal(FOREST_FLOOR);
        forestFloor.addTexture("textureMap", "WebGL_App/Textures/forestFloor_Edit.jpg");
        scene.addAsset(forestFloor);

        var rock = objectConstructor.loadExternal(FOREST_ROCK_001);
        rock.setPosition([-4, 0, 0]);
        rock.addTexture("textureMap", "WebGL_App/Textures/rock_Edit.jpg");
        scene.addAsset(rock);

        var couldron = objectConstructor.loadExternal(COULDRON);
        couldron.setPosition([8, -1, 0]);
        couldron.addTexture("textureMap", "WebGL_App/Textures/rock_Edit.jpg");
        scene.addAsset(couldron);*/

        var lightFirst = objectConstructor.createLight([2,2,2]);
        scene.addLight(lightFirst);

        info(gridShaderProgram);
        info(shaderProgram);

        //START RENDER
        tick();
	 }
	function initGL(canvas) {
        try {
            gl = canvas.getContext("experimental-webgl");
            gl.viewportWidth = canvas.width;
            gl.viewportHeight = canvas.height;
        } catch (e) {
            error(e);
        }
        if (!gl) {
            error("Could not initialise WebGL, sorry :-(");
        }
     }
    function initBasicShaders(){
    	shaderConstructor.initShaders();
        shaderConstructor.initGridShader();
     }

	/*==========================================================*
            DRAW A FRAME
    *===========================================================*/
    function drawFrame(){
        /*================= Init viewport and perspective ================*/
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        /*Draw all objects*/
        scene.draw();
     }
    /*==========================================================*
            TICK, Controls whether to draw a next frame or not
    *===========================================================*/
    function tick(){
        if(RENDER_STATE){
            drawFrame();
        }
        requestAnimFrame(tick);
     }
    window.requestAnimFrame = (function() {
      return window.requestAnimationFrame ||
             window.webkitRequestAnimationFrame ||
             window.mozRequestAnimationFrame ||
             window.oRequestAnimationFrame ||
             window.msRequestAnimationFrame ||
             function(callback, element) {
               window.setTimeout(callback, 1000/60);
             };
     })();
    window.onblur = function(){
        info("Render Stop");
        RENDER_STATE = false;
     }
    window.onfocus = function(){
        info("Render Resumed");
        RENDER_STATE = true;
     }
    function changeRenderState(){
        RENDER_STATE = !RENDER_STATE;
     }

    this.initApp();
	//info("App Created");
};