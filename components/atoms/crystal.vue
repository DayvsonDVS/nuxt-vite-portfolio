<template>
	<div class="crystal"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';
onMounted(() => {

	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	const renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.CapsuleGeometry(1, 1, 4, 8);
	const material = new THREE.MeshBasicMaterial({ color: 0x606c88 });
	const capsule = new THREE.Mesh(geometry, material); scene.add(capsule);

	camera.position.z = 7;

	function animate() {
		requestAnimationFrame(animate);

		capsule.rotation.x += 0.01;
		capsule.rotation.y += 0.01;

		renderer.render(scene, camera);
	}

	animate();

})
</script>

<style scoped lang="scss"></style>