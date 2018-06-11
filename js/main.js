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
var total = 0;

function clearClass(elem) {
	elem.classList.remove("rollone", "rolltwo", "rollthree", "rollfour", "rollfive", "rollsix");
}


function assignclass(rollednumber) {
	switch(rollednumber) {
		case 1:
			return "rollone";
			break;
		case 2:
			return "rolltwo";
			break;
		case 3:
			return "rollthree";
			break;
		case 4:
			return "rollfour";
			break;
		case 5:
			return "rollfive";
			break;
		case 6:
			return "rollsix";
			break;
		default:
			console.log("This ain't supposed to happen.");
			break;
	}
}

//This returns a promise that gets fullfiled when the specified ms has passed.
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

//This takes care of showing the number AFTER the dice has stopped rolling, that is, 1 second after rolling, and an extra 0.1 to make it easier on the eye
async function showResult(container, number) {
	//console.log("And the result is...")
	await sleep(1100);
	//console.log(number + "!");
	total += number;
	document.getElementById("total").innerHTML = total;
	container.querySelectorAll("#result")[0].innerHTML = number;
}

//Taking this of the event listener would make it easier to make multirolls. I think.
function roll() {
	var container = newcontainer.cloneNode(true);
	container.classList.remove("first");
	document.getElementById("rolldice").appendChild(container);
	var die = container.querySelectorAll("#maindie")[0];
	clearClass(die);
	var rollednumber = parseInt(Math.random() * 6 + 1);
	showResult(container, rollednumber);
	die.classList.add(assignclass(rollednumber));
	void die.offsetWidth; //This makes it so adding and removing a class works as intended so you can roll the same number in a row. It stays static otherwise.
}

//Making it async to be able to use awat and use the sleep promise to ensure the 10 dice are thrown in order
async function tenroll() {
	document.getElementById("roll").setAttribute("disabled", "");
	document.getElementById("rollten").setAttribute("disabled", "");
	document.getElementById("total").innerHTML = "";
	total = 0;
	var damagecontrol = true;
	document.getElementById("rolldice").innerHTML = "";
	for (var i = 0; i < 10; i++) {
		var container = newcontainer.cloneNode(true);
		container.classList.remove("first");
		document.getElementById("rolldice").appendChild(container);
		var die = container.querySelectorAll("#maindie")[0];
		var rollednumber = parseInt(Math.random() * 6 + 1);
		showResult(container, rollednumber);
		die.classList.add(assignclass(rollednumber));
		await sleep(1200);	
	}
	document.getElementById("roll").removeAttribute("disabled");
	document.getElementById("rollten").removeAttribute("disabled");
}


/** Jokes **/
var ldice = document.getElementById("lossjpg");
var newLContainer = ldice.closest(".dicecontainer");

async function soll() {
	var container1 = newLContainer.cloneNode(true);
	container1.classList.remove("first");
	var die = container1.querySelectorAll("#lossjpg")[0];
	die.classList.add("rollone");
	document.getElementById("meem").appendChild(container1);
	await sleep(1200);

	var container2 = newLContainer.cloneNode(true);
	container2.classList.remove("first");
	var die = container2.querySelectorAll("#lossjpg")[0];
	die.classList.add("rolltwo");
	document.getElementById("meem").appendChild(container2);
	await sleep(1200);

	var container3 = newLContainer.cloneNode(true);
	container3.classList.remove("first");
	var die = container3.querySelectorAll("#lossjpg")[0];
	die.classList.add("rollthree");
	document.getElementById("meem").appendChild(container3);
	await sleep(1200);

	var container4 = newLContainer.cloneNode(true);
	container4.classList.remove("first");
	var die = container4.querySelectorAll("#lossjpg")[0];
	die.classList.add("rollfour");
	document.getElementById("meem").appendChild(container4);
}

document.getElementById("ding").addEventListener("click", soll);
document.getElementById("roll").addEventListener("click", roll);
document.getElementById("rollten").addEventListener("click", tenroll);