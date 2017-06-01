var html = document.querySelector("html"),
	wrapper = document.querySelector("#wrapper"),
	title = document.querySelector("#title"),
	coin = document.querySelector(".coin"),
	heads = document.querySelector("#head"),
	tails = document.querySelector("#tail"),
	flipBut = document.querySelector("#flip"),
	hardReset = document.querySelector('#reset'),
	headI = 0,
	tailI = 0;

// Flip a coin function	
flipBut.addEventListener("click", function(){
	flipBut.disabled = true;
	coin.classList.remove("head2");

	flip = Math.random().toFixed(2);

	if (flip == 0.00) {
		coin.classList.add("animate", "edge");
	}
	else if (flip <= 0.50 && flip != 0.00) {
		tailI++;
		coin.classList.add("animate", "tail");
		tails.innerHTML = tailI;
		heads.innerHTML = headI;
	}
	else if (flip <= 1.00 && flip >0.50 && flip != 0.00) {
		headI++;
		coin.classList.add("animate", "head", "head2");
		tails.innerHTML = tailI;
		heads.innerHTML = headI;
	};
	setTimeout(sofReset, 2000);
}, false);

hardReset.addEventListener("click", function() {
	clearTimeout(sofReset);
	tailI = 0;
	headI = 0;
	flipBut.disabled = false;
	coin.classList.remove("animate", "head", "head2", "tail", "edge");
	tails.innerHTML = tailI;
	heads.innerHTML = headI;
});

function sofReset() {
	coin.classList.remove("animate", "head", "tail", "edge");
	flipBut.disabled = false;
}