var html = document.querySelector("html"),
	wrapper = document.querySelector("#wrapper"),
	title = document.querySelector("#title"),
	coin = document.querySelector(".coin"),
	heads = document.querySelector("#head"),
	tails = document.querySelector("#tail"),
	pop = document.querySelector(".pop-result"),
	purse = document.querySelector(".purse"),
	flipBut = document.querySelector("#flip"),
	hardReset = document.querySelector('#reset'),
	headI = 0,
	tailI = 0;

// Flip a coin function
purse.addEventListener("click", function() {
	flipBut.disabled = true;
	coin.classList.remove("head2");
	pop.classList.remove("pop");
	pop.innerHTML = "";

	flip = Math.random().toFixed(2);

	if (flip == 0.00) {
		coin.classList.add("animate", "edge");
		pop.innerHTML = "Edge!!!";
	}
	else if (flip <= 0.50 && flip != 0.00) {
		tailI++;
		coin.classList.add("animate", "tail");
		pop.innerHTML = "Tail!";
	}
	else if (flip <= 1.00 && flip >0.50 && flip != 0.00) {
		headI++;
		coin.classList.add("animate", "head", "head2");
		pop.innerHTML = "Head!";
	};
	setTimeout(handleFlipEnd, 2000);
}, false);

flipBut.addEventListener("click", function(){
	flipBut.disabled = true;
	coin.classList.remove("head2");
	pop.classList.remove("pop");
	pop.innerHTML = "";

	flip = Math.random().toFixed(2);

	if (flip == 0.00) {
		coin.classList.add("animate", "edge");
		pop.innerHTML = "Edge!!!";
	}
	else if (flip <= 0.50 && flip != 0.00) {
		tailI++;
		coin.classList.add("animate", "tail");
		pop.innerHTML = "Tail!";
	}
	else if (flip <= 1.00 && flip >0.50 && flip != 0.00) {
		headI++;
		coin.classList.add("animate", "head", "head2");
		pop.innerHTML = "Head!";
	};
	setTimeout(handleFlipEnd, 2000);
}, false);

hardReset.addEventListener("click", function() {
	clearTimeout(handleFlipEnd);
	tailI = 0;
	headI = 0;
	flipBut.disabled = false;
	coin.classList.remove("animate", "head", "head2", "tail", "edge");
	pop.classList.remove("pop");
	pop.innerHTML = "";
	tails.innerHTML = tailI;
	heads.innerHTML = headI;
});

function flipTheCoin() {

}

function handleFlipEnd() {
	coin.classList.remove("animate", "head", "tail", "edge");
	pop.classList.add("pop");
	flipBut.disabled = false;
	tails.innerHTML = tailI;
	heads.innerHTML = headI;
	setTimeout(function() {pop.classList.remove("pop")}, 1000);
}