function renderWorldBackground(ctx, w, h) {
	let floory = translateWorldCameraY(0.0);
	if (floory > h) {
		return;
	}
	ctx.fillStyle = colorFloor0;
	ctx.fillRect(0.0, floory, w, h - floory);
}

function renderWorld(ctx, w, h) {
	ctx.fillStyle = colorBackground0;
	ctx.fillRect(0, 0, width, height);
	renderWorldBackground(ctx, w, h);
}
