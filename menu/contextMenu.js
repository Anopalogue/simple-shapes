document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
	document.getElementById("contextMenu").style.display = "none";
}

let rightClickMenuX;
let rightClickMenuY;

function rightClick(e) {
	e.preventDefault();

	if (document.getElementById("contextMenu").style.display == "block") {
		hideMenu();
	} else {
		let menu = document.getElementById("contextMenu");
		menu.style.display = "block";
		menu.style.left = e.pageX + "px";
		menu.style.top = e.pageY + "px";
		rightClickMenuX = menu.getBoundingClientRect().left;
		rightClickMenuY = menu.getBoundingClientRect().top;
	}
}

function createCircleClick() {
	console.log(rightClickMenuX + ", " + rightClickMenuY);
	obj = new worldObj();
	obj.type = objTypeCircle;
	obj.x = detranslateWorldCameraX(rightClickMenuX);
	obj.y = detranslateWorldCameraY(rightClickMenuY);
	worldAddObj(obj);
}