const canvas = document.getElementById("renderingCanvas");
const ctx = canvas.getContext("2d");

let width = 300;
let height = 150;
const observer = new ResizeObserver((entries) => {
	width = canvas.clientWidth;
	height = canvas.clientHeight;
})

function step(timestamp) {
	canvas.width = width;
	canvas.height = height;
	ctx.save();
	
	worldCameraRecalc(ctx, width, height);
	renderWorld(ctx, width, height);

	ctx.restore();
	requestAnimationFrame(step);
}