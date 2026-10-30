
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

// Create the 3D scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x9bc7a0);

// Create the camera
const camera = new THREE.PerspectiveCamera(
    60,
        window.innerWidth / window.innerHeight,
            0.1,
                1000
                );

                camera.position.set(0, 5, 9);
                camera.lookAt(0, 0, 0);

                // Create the renderer
                const renderer = new THREE.WebGLRenderer({
                    antialias: true
                    });

                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

                    document.getElementById('world').appendChild(renderer.domElement);

                    // Lighting
                    const sunlight = new THREE.DirectionalLight(0xffffff, 2);
                    sunlight.position.set(5, 10, 5);
                    scene.add(sunlight);

                    const ambientLight = new THREE.AmbientLight(0xffffff, 1);
                    scene.add(ambientLight);

                    // Create the ground
                    const groundGeometry = new THREE.PlaneGeometry(30, 30);
                    const groundMaterial = new THREE.MeshStandardMaterial({
                        color: 0x527b45
                        });

                        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
                        ground.rotation.x = -Math.PI / 2;
                        ground.position.y = -0.1;
                        scene.add(ground);

                        // Create a simple starting platform
                        const platformGeometry = new THREE.CylinderGeometry(4, 4, 0.3, 48);
                        const platformMaterial = new THREE.MeshStandardMaterial({
                            color: 0x806044
                            });

                            const platform = new THREE.Mesh(
                                platformGeometry,
                                    platformMaterial
                                    );

                                    platform.position.y = 0.05;
                                    scene.add(platform);

                                    // Create trees
                                    function createTree(x, z, size) {

                                        // Tree trunk
                                            const trunkGeometry = new THREE.CylinderGeometry(
                                                    0.15 * size,
                                                            0.22 * size,
                                                                    1.5 * size,
                                                                            8
                                                                                );

                                                                                    const trunkMaterial = new THREE.MeshStandardMaterial({
                                                                                            color: 0x79502f
                                                                                                });

                                                                                                    const trunk = new THREE.Mesh(
                                                                                                            trunkGeometry,
                                                                                                                    trunkMaterial
                                                                                                                        );

                                                                                                                            trunk.position.set(x, 0.75 * size, z);
                                                                                                                                scene.add(trunk);

                                                                                                                                    // Tree leaves
                                                                                                                                        const leavesGeometry = new THREE.ConeGeometry(
                                                                                                                                                1 * size,
                                                                                                                                                        2 * size,
                                                                                                                                                                8
                                                                                                                                                                    );

                                                                                                                                                                        const leavesMaterial = new THREE.MeshStandardMaterial({
                                                                                                                                                                                color: 0x28633b
                                                                                                                                                                                    });

                                                                                                                                                                                        const leaves = new THREE.Mesh(
                                                                                                                                                                                                leavesGeometry,
                                                                                                                                                                                                        leavesMaterial
                                                                                                                                                                                                            );

                                                                                                                                                                                                                leaves.position.set(x, 2.2 * size, z);
                                                                                                                                                                                                                    scene.add(leaves);
                                                                                                                                                                                                                    }

                                                                                                                                                                                                                    // Plant trees around Carlyle's world
                                                                                                                                                                                                                    createTree(-6, -5, 1.5);
                                                                                                                                                                                                                    createTree(6, -5, 1.3);
                                                                                                                                                                                                                    createTree(-7, 4, 1.2);
                                                                                                                                                                                                                    createTree(7, 5, 1.6);
                                                                                                                                                                                                                    createTree(0, -9, 1.8);
                                                                                                                                                                                                                    

                                    // Animation loop
                                    function animate() {
                                        requestAnimationFrame(animate);
                                            renderer.render(scene, camera);
                                            }

                                            animate();

                                            // Resize the world when the screen changes
                                            window.addEventListener('resize', () => {
                                                camera.aspect = window.innerWidth / window.innerHeight;
                                                    camera.updateProjectionMatrix();
                                                        renderer.setSize(window.innerWidth, window.innerHeight);
                                                        });
                                                        