function circleCircleInters(x0, y0, r0, x1, y1, r1) {
	let squareDistance = ((x0 - x1) * (x0 - x1)) + ((y0 - y1) * (y0 - y1));
	return squareDistance <= ((r0 + r1) * (r0 + r1));
}