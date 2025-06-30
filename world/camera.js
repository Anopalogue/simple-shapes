// Remember: floor is at y = 0.0
let worldCamera = {
	// Position specifies the middle point of the camera
	position: { x: 0.0, y: 200.0 },
	scale: 1.0,
	adjustedDim: { w: 0.0, h: 0.0 }
};

function worldCameraRecalc(ctx, w, h) {
	/*if (worldCamera.adjustedDim.w != w) {
		worldCamera.position.x -= ((worldCamera.adjustedDim.w - w) / 2.0);
		worldCamera.adjustedDim.w = w;
	}
	if (worldCamera.adjustedDim.h != h) {
		worldCamera.position.y -= ((worldCamera.adjustedDim.h - h) / 2.0);
		worldCamera.adjustedDim.h = h;
	}*/
	worldCamera.adjustedDim.w = w;
	worldCamera.adjustedDim.h = h;

	//console.log(worldCamera.position.y);
}

function translateWorldCameraX(x) {
	return ((x + worldCamera.position.x) * worldCamera.scale) + (worldCamera.adjustedDim.w / 2.0);
}

function translateWorldCameraY(y) {
	//return (y * worldCamera.scale) + worldCamera.position.y;
	return ((y + worldCamera.position.y) * worldCamera.scale) + (worldCamera.adjustedDim.h / 2.0);
}