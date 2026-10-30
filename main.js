
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
                                                                                                                                                                                                                    

                                                                                                                                                                                                                    // =================================
                                                                                                                                                                                                                    // CARLYLE - CHARACTER CREATION
                                                                                                                                                                                                                    // =================================

                                                                                                                                                                                                                    const carlyle = new THREE.Group();

                                                                                                                                                                                                                    // FLOWER POT
                                                                                                                                                                                                                    const potGeometry = new THREE.CylinderGeometry(
                                                                                                                                                                                                                        0.55, 0.42, 0.8, 32
                                                                                                                                                                                                                        );

                                                                                                                                                                                                                        const potMaterial = new THREE.MeshStandardMaterial({
                                                                                                                                                                                                                            color: 0xb96843
                                                                                                                                                                                                                            });

                                                                                                                                                                                                                            const pot = new THREE.Mesh(potGeometry, potMaterial);
                                                                                                                                                                                                                            pot.position.y = 0.6;
                                                                                                                                                                                                                            carlyle.add(pot);

                                                                                                                                                                                                                            // POT RIM
                                                                                                                                                                                                                            const rimGeometry = new THREE.TorusGeometry(
                                                                                                                                                                                                                                0.55, 0.07, 8, 32
                                                                                                                                                                                                                                );

                                                                                                                                                                                                                                const rim = new THREE.Mesh(rimGeometry, potMaterial);
                                                                                                                                                                                                                                rim.rotation.x = Math.PI / 2;
                                                                                                                                                                                                                                rim.position.y = 1.0;
                                                                                                                                                                                                                                carlyle.add(rim);

                                                                                                                                                                                                                                // =================================
                                                                                                                                                                                                                                // CARLYLE'S HEAD AND FACE
                                                                                                                                                                                                                                // =================================

                                                                                                                                                                                                                                // HEAD
                                                                                                                                                                                                                                const bodyGeometry = new THREE.SphereGeometry(0.65, 48, 48);

                                                                                                                                                                                                                                const bodyMaterial = new THREE.MeshStandardMaterial({
                                                                                                                                                                                                                                    color: 0x49d52d,
                                                                                                                                                                                                                                        roughness: 0.65
                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);

                                                                                                                                                                                                                                        body.position.y = 1.65;
                                                                                                                                                                                                                                        body.scale.set(0.9, 1.05, 0.85);

                                                                                                                                                                                                                                        carlyle.add(body);

                                                                                                                                                                                                                                        // EYES
                                                                                                                                                                                                                                        const eyeMaterial = new THREE.MeshStandardMaterial({
                                                                                                                                                                                                                                            color: 0x050505,
                                                                                                                                                                                                                                                roughness: 0.3
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                function createEye(x) {

                                                                                                                                                                                                                                                    const eye = new THREE.Mesh(
                                                                                                                                                                                                                                                            new THREE.SphereGeometry(0.12, 32, 32),
                                                                                                                                                                                                                                                                    eyeMaterial
                                                                                                                                                                                                                                                                        );

                                                                                                                                                                                                                                                                            eye.scale.set(0.8, 1.5, 0.5);

                                                                                                                                                                                                                                                                                eye.position.set(x, 1.68, 0.49);

                                                                                                                                                                                                                                                                                    carlyle.add(eye);
                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                    createEye(-0.22);
                                                                                                                                                                                                                                                                                    createEye(0.22);

                                                                                                                                                                                                                                                                                    // EYEBROWS
                                                                                                                                                                                                                                                                                    const eyebrowMaterial = new THREE.MeshStandardMaterial({
                                                                                                                                                                                                                                                                                        color: 0x102b0b
                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                        function createEyebrow(x, rotation) {

                                                                                                                                                                                                                                                                                            const eyebrow = new THREE.Mesh(
                                                                                                                                                                                                                                                                                                    new THREE.CapsuleGeometry(0.035, 0.22, 4, 12),
                                                                                                                                                                                                                                                                                                            eyebrowMaterial
                                                                                                                                                                                                                                                                                                                );

                                                                                                                                                                                                                                                                                                                    eyebrow.rotation.z = rotation;

                                                                                                                                                                                                                                                                                                                        eyebrow.position.set(x, 1.91, 0.49);

                                                                                                                                                                                                                                                                                                                            carlyle.add(eyebrow);
                                                                                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                                                                            createEyebrow(-0.22, 0.3);
                                                                                                                                                                                                                                                                                                                            createEyebrow(0.22, -0.3);
                                                                                                                                                                                                                                                                                                                            

                                                                                                                                                                                                                                