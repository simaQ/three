pt.line = pt.line || {};

pt.line.init = function() {
  var element = $('#line');

  var scene = new THREE.Scene(); // 1. create scene
  var camera = new THREE.PerspectiveCamera( 45, element.width() /element.height(), 4, 500 ); // 2. create camera
  camera.position.set(0, 0, 100);
  camera.lookAt(new THREE.Vector3( 0, 0, 0 ));

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(element.width(), element.height());
  element[0].appendChild(renderer.domElement);

  var geometry = new THREE.Geometry();
  geometry.vertices.push(new THREE.Vector3( -10, 0, 0 ));
  geometry.vertices.push(new THREE.Vector3( 0, 10, 0 ));
  geometry.vertices.push(new THREE.Vector3( 10, 0, 0 ));
  geometry.vertices.push(new THREE.Vector3( -10, 0, 0 ));

  var material = new THREE.LineBasicMaterial( {color: '#999'} );
  var line = new THREE.Line( geometry, material );

  scene.add(line);
  renderer.render(scene, camera);

  // var render = function() {
  //   requestAnimationFrame(render);
  //   renderer.render(scene, camera);
  // }
  // render();
};


