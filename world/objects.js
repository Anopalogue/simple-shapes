var worldObjects = [];

const objTypeCircle = 0;

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
}

function worldAddObj(obj) {
	worldObjects.push(obj);
}

function generateWorld() {
	worldObjects = [];
	obj = new worldObj();
	worldAddObj(obj);
}