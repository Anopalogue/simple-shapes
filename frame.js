let canvas;
//const ctx = canvas.getContext("2d");
let ctx;

let width = 300;
let height = 150;
const observer = new ResizeObserver((entries) => {
	width = canvas.clientWidth;
	height = canvas.clientHeight;
})

let lastStepTime = 0.0;
let currentFPS = 0;
let updateTimeMS = 500.0;
let lastTimestamp = 0.0;

function step(timestamp) {
	let tdif = (timestamp - lastTimestamp) / 1000.0;
	lastTimestamp = timestamp;

	if (timestamp - lastStepTime > updateTimeMS) {
		var elem = document.getElementById("fpsCount");
		elem.textContent = "FPS: " + (currentFPS / (updateTimeMS / 1000.0));
		currentFPS = 0;
		lastStepTime = timestamp;
	}
	currentFPS = currentFPS + 1;

	canvas.width = width;
	canvas.height = height;
	ctx.save();

	if (tdif < 0.1) {
		objectPhysicsStep(tdif);
	}
	
	worldCameraRecalc(ctx, width, height);
	renderWorld(ctx, width, height);

	ctx.restore();
	requestAnimationFrame(step);
}