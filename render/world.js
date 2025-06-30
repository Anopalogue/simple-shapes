function renderWorldBackground(ctx, w, h) {
	let floory = translateWorldCameraY(0.0);
	if (floory > h) {
		return;
	}
	ctx.fillStyle = colorFloor0;
	ctx.fillRect(0.0, floory, w, h - floory);
}

function renderObject(ctx, w, h, obj) {
	ctx.fillStyle = obj.color;

	if (obj.type == objTypeCircle) {
		let ox = translateWorldCameraX(obj.x);
		let oy = translateWorldCameraY(-obj.y);
		let ow = (obj.width / 2.0) * worldCamera.scale;
		let oh = (obj.height / 2.0) * worldCamera.scale;
		ctx.beginPath();
		ctx.ellipse(ox, oy, ow, oh, obj.rotation, 0.0, 2.0 * Math.PI);
		ctx.fill();
	}
}

function renderWorld(ctx, w, h) {
	ctx.fillStyle = colorBackground0;
	ctx.fillRect(0, 0, width, height);

	renderWorldBackground(ctx, w, h);
	for (let i = 0; i < worldObjects.length; i++) {
		renderObject(ctx, w, h, worldObjects[i]);
	}
}
