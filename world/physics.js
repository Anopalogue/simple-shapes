const physGrav = -9.80665 * 2.0;
const collisionCOR = 0.85;

function floorCollisionStep(obj) {
	if (obj.type == objTypeCircle) {
		if (obj.width != obj.height) {
			console.log("Oval floor collision not implemented yet, fix!");
			return;
		}
		
		let radius = obj.width / 2.0;
		if (obj.y - radius < 0.0) {
			obj.y = radius;
			if (Math.abs(obj.velY) > 0.0001) {
				obj.velY = -obj.velY * obj.collisionCOR;
			} else {
				obj.velY = 0.0;
			}
		}
	}
}

function circleCollisionStep(obj) {
	for (let i = 0; i < worldObjects.length; i++) {
		if ((obj == worldObjects[i]) || (worldObjects[i].type != objTypeCircle)) {
			continue;
		}
		if (worldObjects[i].width != worldObjects[i].height) {
			console.log("Oval collision not implemented yet");
			continue;
		}

		// Both are circles
		if (obj.type == objTypeCircle) {
			if (obj.width != obj.height) {
				console.log("Oval collision not implemented yet");
				return;
			}
			
			let x0 = obj.x, y0 = obj.y, r0 = obj.width / 2.0, vx0 = obj.velX, vy0 = obj.velY;
			let x1 = worldObjects[i].x, y1 = worldObjects[i].y, r1 = worldObjects[i].width / 2.0, vx1 = worldObjects[i].velX, vy1 = worldObjects[i].velY;
			if (!circleCircleInters(x0, y0, r0, x1, y1, r1)) {
				continue;
			}

			let vCollision = {x: x1 - x0, y: y1 - y0};
			let distance = Math.sqrt((x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0));
			let vCollisionNorm = {x: vCollision.x / distance, y: vCollision.y / distance};
			let vRelativeVelocity = {x: vx0 - vx1, y: vy0 - vy1};
			let speed = vRelativeVelocity.x * vCollisionNorm.x + vRelativeVelocity.y * vCollisionNorm.y;
			if (speed < 0) {
				continue;
			}

			obj.velX -= speed * vCollisionNorm.x;
			obj.velY -= speed * vCollisionNorm.y;
			worldObjects[i].velX += speed * vCollisionNorm.x;
			worldObjects[i].velY += speed * vCollisionNorm.y;
		}
	}
}

function objectPhysicsStep(tdif) {
	for (let i = 0; i < worldObjects.length; i++) {
		// Vertical velocity
		worldObjects[i].velY += physGrav * worldObjects[i].mass * (tdif * 10.0);
		worldObjects[i].y += worldObjects[i].velY * (tdif * 10.0);

		// Horizontal velocity
		let sign = (worldObjects[i].velX < 0.0) ?(-1) :(1);
		if (sign == -1) {
			worldObjects[i].velX += 1.0 * (tdif * 10.0);
			if (worldObjects[i].velX > 0.0) {
				worldObjects[i].velX = 0.0;
			}
		} else {
			worldObjects[i].velX -= 1.0 * (tdif * 10.0);
			if (worldObjects[i].velX < 0.0) {
				worldObjects[i].velX = 0.0;
			}
		}
		worldObjects[i].x += worldObjects[i].velX * (tdif * 10.0);

		// Floor collision
		floorCollisionStep(worldObjects[i]);
		// Circle collision
		circleCollisionStep(worldObjects[i]);
	}
}