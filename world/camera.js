// Remember: floor is at y = 0.0
let worldCamera = {
	// Position specifies the middle point of the camera
	position: { x: 0.0, y: 200.0 },
	scale: 1.0,
	adjustedDim: { w: 0.0, h: 0.0 }
};

function worldCameraRecalc(ctx, w, h) {
	worldCamera.adjustedDim.w = w;
	worldCamera.adjustedDim.h = h;
}

function translateWorldCameraX(x) {
	return ((x + worldCamera.position.x) * worldCamera.scale) + (worldCamera.adjustedDim.w / 2.0);
}

function translateWorldCameraY(y) {
	//return (y * worldCamera.scale) + worldCamera.position.y;
	return ((y + worldCamera.position.y) * worldCamera.scale) + (worldCamera.adjustedDim.h / 2.0);
}