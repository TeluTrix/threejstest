import './style.css'
import * as THREE from 'three';
//import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg')
});

renderer.setPixelRatio( window.devicePixelRatio )
renderer.setSize( window.innerWidth, window.innerHeight )
camera.position.setZ(30);

const earthTexture = new THREE.TextureLoader().load('earth3.jpeg')

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(5,100,100),
  new THREE.MeshBasicMaterial( { map: earthTexture} )
)

//const geometry = new THREE.SphereGeometry(15, 32, 16);
//const material = new THREE.MeshLambertMaterial( { color: 0xFF6347} );
//const sphere = new THREE.Mesh( geometry, material);

scene.add(earth)

const bgTexture = new THREE.TextureLoader().load('bg.jpeg')
scene.background = bgTexture;




const pointLight = new THREE.HemisphereLight(0xffffff);
pointLight.position.set(25, 50, 50);

scene.add(pointLight)

const lightHelper = new THREE.HemisphereLightHelper(pointLight);
scene.add(lightHelper);

//const controls = new OrbitControls(camera);
//controls.addEventListener( 'change', render );
//controls.autoRotate = true;

function animate(){
  requestAnimationFrame(animate);

  earth.rotation.x += 0.001;
  earth.rotation.y += 0.0005;
  earth.rotation.z += 0.001;

  //controls.update();

  renderer.render( scene, camera )
}

animate()