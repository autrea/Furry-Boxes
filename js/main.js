var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

// Declare furry boxes
var cat_1, cat_2, cat_3, cat_4;

var renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Tiling amount
var t = 1;

var geometry = new THREE.BoxGeometry(10, 10, 10);
THREE.ImageUtils.crossOrigin = true;

// Loaders
var loadCat_1 = new THREE.TextureLoader();
loadCat_1.crossOrigin = true;
var loadCat_2 = new THREE.TextureLoader();
loadCat_2.crossOrigin = true;
var loadCat_3 = new THREE.TextureLoader();
loadCat_3.crossOrigin = true;
var loadCat_4 = new THREE.TextureLoader();
loadCat_4.crossOrigin = true;

// Make furry boxes
loadCat_1.load('img/cat_1.jpg', function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(t, t);
    var material = new THREE.MeshLambertMaterial({ map: texture });
    cat_1 = new THREE.Mesh(geometry, material);
    cat_1.rotation.x = THREE.Math.degToRad(180);
    cat_1.position.set(-10, -10, 0);
    scene.add(cat_1);
});

loadCat_2.load('img/cat_2.jpg', function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(t, t);
    var material = new THREE.MeshLambertMaterial({ map: texture });
    cat_2 = new THREE.Mesh(geometry, material);
    cat_2.rotation.x = THREE.Math.degToRad(180);
    cat_2.position.set(-10, 10, 0);
    scene.add(cat_2);
});

loadCat_3.load('img/cat_3.jpg', function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(t, t);
    var material = new THREE.MeshLambertMaterial({ map: texture });
    cat_3 = new THREE.Mesh(geometry, material);
    cat_3.rotation.x = THREE.Math.degToRad(180);
    cat_3.position.set(10, -10, 0);
    scene.add(cat_3);
});

loadCat_4.load('img/cat_4.jpg', function (texture) {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(t, t);
    var material = new THREE.MeshLambertMaterial({ map: texture });
    cat_4 = new THREE.Mesh(geometry, material);
    cat_4.rotation.x = THREE.Math.degToRad(180);
    cat_4.position.set(10, 10, 0);
    scene.add(cat_4);
});

camera.position.z = 100;

// Get lit
var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 0);
scene.add(light);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(0, -1, 0);
scene.add(light);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 0, 0);
scene.add(light);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(0, 0, 1);
scene.add(light);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 0, -1);
scene.add(light);

var light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(-1, 0, 0);
scene.add(light);

// Render and animate furry boxes
render();


function render() {
    requestAnimationFrame(render);

    setTimeout(function () { // Furry box 1
        cat_1.rotation.y += 0.01;
        cat_1.rotation.x += 0.0005;

        setTimeout(function () { // Furry box 2
            cat_2.rotation.y += 0.005;
            cat_2.rotation.x += 0.005;

            setTimeout(function () { // Furry box 3
                cat_3.rotation.y += 0.0075;
                cat_3.rotation.x += 0.001;

                setTimeout(function () { // Furry box 4
                    cat_4.rotation.y += 0.001;
                    cat_4.rotation.x += 0.0075;
                    
                }, 1000); // Furry box 4

            }, 1000); // Furry box 3

        }, 1000); // Furry box 2

    }, 1000); // Furry box 1

    renderer.render(scene, camera);
};