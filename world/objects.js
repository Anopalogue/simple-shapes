var worldObjects = [];

const objTypeCircle = 0;

// All position units are in meters btw
// 1 meter = 75 pixels

function worldObj() {
	this.color = colorObject0;
	this.type = objTypeCircle;
	// (Center)
	this.x = 0.0;
	this.y = 50.0;
	this.width = 100.0;
	this.height = 100.0;
	// (In rad)
	this.rotation = 0.0;

	this.velX = 0.0;
	this.velY = 0.0;
	this.area = Math.PI * this.width * this.height;
	this.mass = Math.PI * ((this.width / 100.0) / 2.0) * ((this.height / 100.0) / 2.0);
	this.collisionCOR = 0.8;
	this.frictionLoss = 0.05;
}

function worldAddObj(obj) {
	worldObjects.push(obj);
}

function generateWorld() {
	worldObjects = [];
	obj = new worldObj();
	worldAddObj(obj);
}