/* 
* 1: rotate3d(0, 0, 0, 0deg)
* 2: rotate3d(0, 1, 0, 90deg), rotate3d(1, 0, -1, 180deg), rotate3d(1, 1, -1, 120deg)
* 3: rotate3d(0, 1, -1, 180deg), rotate3d(1, 0, 0, -90deg), rotate3d(1, 1, -1, -120deg)
* 4: rotate3d(1, 0, 0, 90deg), rotate3d(0, 1, 1, 180deg), rotate3d(1, 1, 1, 120deg)
* 5: rotate3d(0, 1, 0, -90deg), rotate3d(1, 0, 1, 180deg), rotate3d(1, 1, 1, -120deg) 
* 6: rotate3d(0, 1, 0, 180deg), rotate3d(1, 0, 0, 180deg), rotate3d(1, 1, 0, 180deg)
*/ 

function clearclass(elem) {
	elem.classList.remove("rollone", "rolltwo", "rollthree", "rollfour", "rollfive", "rollsix");
}

document.getElementById("roll").addEventListener("click", function(e) {
	e.preventDefault();
	var die = document.getElementById("maindie");
	clearclass(die);
	var rollednumber = Math.random() * 6 + 1;
	console.log(parseInt(rollednumber));
	void die.offsetWidth;
	
	switch(parseInt(rollednumber)) {
		case 1:
			die.classList.add("rollone");
			break;
		case 2:
			die.classList.add("rolltwo");
			break;
		case 3:
			die.classList.add("rollthree");
			break;
		case 4:
			die.classList.add("rollfour");
			break;
		case 5:
			die.classList.add("rollfive");
			break;
		case 6:
			die.classList.add("rollsix");
			break;
		default:
			console.log("This ain't supposed to happen.");
			break;
	}
});