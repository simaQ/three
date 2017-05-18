pt.spiningCube = pt.spiningCube || {};

pt.spiningCube.init = function() {
  var element = $('#spiningCube');

  var scene = new THREE.Scene(); // 1. create scene
  var camera = new THREE.PerspectiveCamera( 75, element.width() /element.height(), 0.1, 1000 ); // 2. create camera

  var renderer = new THREE.WebGLRenderer(); // 3. create renderer
  // renderer.setSize(window.innerWidth, window.innerWidth);
  renderer.setSize(element.width(), element.height());
  element[0].appendChild(renderer.domElement);

  // 创建立方体
  var geometry = new THREE.BoxGeometry(1, 1, 1); // geometry contains vertices and faces
  var material = new THREE.MeshBasicMaterial( {color: '#f80'} );
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;

  var render = function() {
    requestAnimationFrame(render);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  render();
};


