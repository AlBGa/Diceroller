/* 
* 1: rotate3d(0, 0, 0, 0deg)
* 2: rotate3d(0, 1, 0, 90deg), rotate3d(1, 0, -1, 180deg), rotate3d(1, 1, -1, 120deg)
* 3: rotate3d(0, 1, -1, 180deg), rotate3d(1, 0, 0, -90deg), rotate3d(1, 1, -1, -120deg)
* 4: rotate3d(1, 0, 0, 90deg), rotate3d(0, 1, 1, 180deg), rotate3d(1, 1, 1, 120deg)
* 5: rotate3d(0, 1, 0, -90deg), rotate3d(1, 0, 1, 180deg), rotate3d(1, 1, 1, -120deg) 
* 6: rotate3d(0, 1, 0, 180deg), rotate3d(1, 0, 0, 180deg), rotate3d(1, 1, 0, 180deg)
*/ 

var newdice = document.getElementById("maindie");
var newcontainer = newdice.closest(".dicecontainer");

function clearClass(elem) {
	elem.classList.remove("rollone", "rolltwo", "rollthree", "rollfour", "rollfive", "rollsix");
}

//This returns a promise that gets fullfiled when the specified ms has passed.
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//This takes care of showing the number AFTER the dice has stopped rolling, that is, 1 second after rolling, and an extra 0.1 to make it easier on the eye
async function showResult(container, number) {
	console.log("And the result is...")
	await sleep(1100);
	console.log(number + "!");
	container.querySelectorAll("#result")[0].innerHTML = number;
}

//Taking this of the event listener would make it easier to make multirolls. I think.
function roll() {
	var container = newcontainer.cloneNode(true);
	document.getElementById("rolldice").appendChild(container);
	var die = container.querySelectorAll("#maindie")[0];
	console.log(container);
	console.log(die);
	clearClass(die);
	var rollednumber = parseInt(Math.random() * 6 + 1);
	showResult(container, rollednumber);
	 
	void die.offsetWidth; //This makes it so adding and removing a class works as intended so you can roll the same number in a row. It stays static otherwise.
	
	switch(rollednumber) {
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
}

document.getElementById("roll").addEventListener("click", roll);