Vue.component('Coin', {
	props: {
		pSide: String
	},
	data: function() {
		return {
			dSide: null
		}
	},
	watch: {
		pSide: function(value) {
			window.console.log(value);
			this.dSide = value;
		}
	},
	template: `
	<div class="purse m-auto">
		<template v-if="dSide == 'Tail'">
		<!-- Whale -->
		<svg class="coin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 224 224"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M26.46875,35v7c0,17.14453 8.06641,31.5 20.125,41.125c10.22657,8.17578 23.21484,13.09766 36.96875,14.4375c-0.82031,29.47657 -3.82812,53.18359 -5.46875,63.4375h14.21875c2.07813,-13.31641 5.6875,-41.42578 5.6875,-77h-7c-13.50781,0 -26.41406,-4.42968 -35.65625,-11.8125c-6.61718,-5.27734 -10.5,-12.27734 -12.6875,-20.34375c1.01172,0.24609 0.60157,0.21875 1.75,0.4375c9.32422,1.85938 24.08984,3.71875 46.59375,3.71875c11.48438,0 14.21875,9.40625 14.21875,9.40625l1.53125,4.59375h10.28125l1.75,-4.59375c0,0 2.73438,-9.40625 14.21875,-9.40625c28.71094,0 44.35157,-2.625 54.25,-4.8125c-2.54297,8.06641 -7.19141,15.28516 -15.09375,20.78125c-10.85547,7.57422 -25.64843,12.03125 -39.15625,12.03125h-7c0,35.57422 3.60938,63.68359 5.6875,77h14.21875c-1.64062,-10.11718 -4.64843,-33.63281 -5.46875,-63.4375c14.08203,-1.25781 28.32813,-5.98828 39.8125,-14c13.53516,-9.43359 23.625,-23.95312 23.625,-41.5625v-7h-8.75l-1.09375,0.4375c0,0 -17.47266,6.5625 -61.03125,6.5625c-9.92578,0 -16.84375,4.53907 -21.21875,9.1875c-4.375,-4.59375 -11.01953,-9.1875 -20.78125,-9.1875c-21.76562,0 -35.73828,-1.64062 -43.96875,-3.28125c-8.23047,-1.64062 -10.0625,-2.84375 -10.0625,-2.84375l-1.53125,-0.875zM42,175c0,0.41016 -0.57422,2.21484 -3.0625,3.9375c-2.48828,1.72266 -6.48047,3.0625 -10.9375,3.0625v14c7.24609,0 13.72657,-2.16016 18.8125,-5.6875c0.79297,-0.54687 1.44922,-1.12109 2.1875,-1.75c0.71094,0.60157 1.42188,1.23047 2.1875,1.75c5.05859,3.52734 11.53907,5.6875 18.8125,5.6875c7.24609,0 13.72657,-2.16016 18.8125,-5.6875c0.79297,-0.54687 1.44922,-1.12109 2.1875,-1.75c0.71094,0.60157 1.42188,1.23047 2.1875,1.75c5.05859,3.52734 11.53907,5.6875 18.8125,5.6875c7.24609,0 13.72657,-2.16016 18.8125,-5.6875c0.79297,-0.54687 1.44922,-1.12109 2.1875,-1.75c0.71094,0.60157 1.42188,1.23047 2.1875,1.75c5.05859,3.52734 11.53907,5.6875 18.8125,5.6875c7.24609,0 13.72657,-2.16016 18.8125,-5.6875c0.79297,-0.54687 1.44922,-1.12109 2.1875,-1.75c0.71094,0.60157 1.42188,1.23047 2.1875,1.75c5.05859,3.52734 11.53907,5.6875 18.8125,5.6875v-14c-4.42968,0 -8.42187,-1.3125 -10.9375,-3.0625c-2.51562,-1.75 -3.0625,-3.63672 -3.0625,-3.9375h-14c0,0.41016 -0.57422,2.21484 -3.0625,3.9375c-2.48828,1.72266 -6.48047,3.0625 -10.9375,3.0625c-4.42968,0 -8.42187,-1.3125 -10.9375,-3.0625c-2.51562,-1.75 -3.0625,-3.63672 -3.0625,-3.9375h-14c0,0.41016 -0.57422,2.21484 -3.0625,3.9375c-2.48828,1.72266 -6.48047,3.0625 -10.9375,3.0625c-4.42968,0 -8.42187,-1.3125 -10.9375,-3.0625c-2.51562,-1.75 -3.0625,-3.63672 -3.0625,-3.9375h-14c0,0.41016 -0.57422,2.21484 -3.0625,3.9375c-2.48828,1.72266 -6.48047,3.0625 -10.9375,3.0625c-4.42968,0 -8.42187,-1.3125 -10.9375,-3.0625c-2.51562,-1.75 -3.0625,-3.63672 -3.0625,-3.9375z"></path></g></g></g></svg>
		</template>
		<template v-if="dSide == 'Head'">
		<!-- Ninja -->
		<svg class="coin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 224 224"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M112,21c-42.38281,0 -77,33.87891 -77,75.6875c0,4.15625 0.71094,16.10547 3.0625,28.65625c-1.75,1.64063 -3.47266,3.66407 -5.25,6.125c-6.15234,8.47657 -11.8125,22.28516 -11.8125,43.53125h14c0,-15.75 3.33594,-25.56641 7,-31.9375v45.9375h14v-20.5625c4.10157,5.90625 8.85938,11.40234 14.21875,16.1875c12.05859,10.77344 26.60547,18.375 41.78125,18.375c15.17578,0 29.72266,-7.60156 41.78125,-18.375c10.71875,-9.57031 19.08594,-21.92968 24.5,-35h0.65625l1.75,-4.59375c0.02734,-0.05468 -0.02734,-0.16406 0,-0.21875c6.80859,-17.55468 8.3125,-41.75391 8.3125,-48.125c0,-41.80859 -34.61718,-75.6875 -77,-75.6875zM112,35c34.94532,0 63,27.58984 63,61.6875c0,2.87109 -1.77734,25.92188 -6.34375,40.03125c-2.51562,2.87109 -22.36718,24.28125 -49.65625,24.28125v14c12.57813,0 23.59766,-3.44531 32.8125,-8.09375c-2.29687,2.67969 -4.86718,5.14063 -7.4375,7.4375c-10.25391,9.16016 -21.98437,14.65625 -32.375,14.65625c-10.39062,0 -22.12109,-5.49609 -32.375,-14.65625c-10.25391,-9.16016 -18.78516,-21.84766 -22.96875,-34.125l-0.875,-2.40625c-4.8125,-13.97266 -6.78125,-38.17187 -6.78125,-41.125c0,-1.3125 0.13672,-2.625 0.21875,-3.9375c2.40625,-4.04687 15.17578,-22.75 48.78125,-22.75v-14c-17.85547,0 -31.47266,5.14063 -41.34375,11.375c10.63672,-19.22266 31.30859,-32.375 55.34375,-32.375zM112,77c0,0 -13.07031,0.02734 -26.46875,3.9375c-6.69922,1.94141 -13.72656,4.94922 -19.46875,9.84375c-5.74218,4.89453 -10.0625,12.27734 -10.0625,21.21875c0,9.84375 6.78125,16.43359 12.46875,18.8125c5.6875,2.37891 10.9375,2.1875 10.9375,2.1875h0.65625l0.65625,-0.21875l31.28125,-6.78125l31.28125,6.78125l0.65625,0.21875h0.65625c0,0 5.25,0.19141 10.9375,-2.1875c5.6875,-2.37891 12.46875,-8.96875 12.46875,-18.8125c0,-8.94141 -4.32031,-16.32422 -10.0625,-21.21875c-5.74218,-4.89453 -12.76953,-7.90234 -19.46875,-9.84375c-13.39843,-3.91016 -26.46875,-3.9375 -26.46875,-3.9375zM112,91c0,0 11.42969,0.27344 22.53125,3.5c5.55078,1.61328 10.77344,3.85547 14.21875,6.78125c3.44532,2.92578 5.25,5.93359 5.25,10.71875c0,4.53907 -1.47656,4.86719 -3.9375,5.90625c-2.37891,0.98438 -4.8125,1.09375 -5.03125,1.09375h-0.21875l-31.28125,-6.78125l-1.53125,-0.4375l-1.53125,0.4375l-31.28125,6.78125h-0.21875c-0.21875,0 -2.65234,-0.10937 -5.03125,-1.09375c-2.46093,-1.03906 -3.9375,-1.36718 -3.9375,-5.90625c0,-4.78516 1.80469,-7.79297 5.25,-10.71875c3.44532,-2.92578 8.66797,-5.16797 14.21875,-6.78125c11.10157,-3.22656 22.53125,-3.5 22.53125,-3.5zM91,98c-3.85547,0 -7,3.14453 -7,7c0,3.85547 3.14453,7 7,7c3.85547,0 7,-3.14453 7,-7c0,-3.85547 -3.14453,-7 -7,-7zM133,98c-3.85547,0 -7,3.14453 -7,7c0,3.85547 3.14453,7 7,7c3.85547,0 7,-3.14453 7,-7c0,-3.85547 -3.14453,-7 -7,-7z"></path></g></g></g></svg>
		</template>
		<template v-if="dSide == 'Edge'">
		<!-- Edge -->
		<svg class="coin" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="32" height="32"
viewBox="0 0 224 224"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,224v-224h224v224z" fill="none"></path><g fill="#ffffff"><g id="surface1"><path d="M112,28c-46.32031,0 -84,37.67969 -84,84c0,46.32032 37.67969,84 84,84c46.32032,0 84,-37.67968 84,-84c0,-46.32031 -37.67968,-84 -84,-84zM112,42c38.74609,0 70,31.25391 70,70c0,38.74609 -31.25391,70 -70,70c-38.74609,0 -70,-31.25391 -70,-70c0,-38.74609 31.25391,-70 70,-70zM80.5,77c-5.79687,0 -10.5,7.84766 -10.5,17.5c0,9.65234 4.70313,17.5 10.5,17.5c5.79688,0 10.5,-7.84766 10.5,-17.5c0,-9.65234 -4.70312,-17.5 -10.5,-17.5zM143.5,77c-5.79687,0 -10.5,7.84766 -10.5,17.5c0,9.65234 4.70313,17.5 10.5,17.5c5.79688,0 10.5,-7.84766 10.5,-17.5c0,-9.65234 -4.70312,-17.5 -10.5,-17.5zM112,119c-16.05078,0 -28,12.98828 -28,28c0,6.91797 2.48828,13.80859 8.09375,17.28125c5.60547,3.47266 11.8125,3.71875 19.90625,3.71875c8.09375,0 14.30078,-0.24609 19.90625,-3.71875c5.60547,-3.47266 8.09375,-10.36328 8.09375,-17.28125c0,-15.01172 -11.94922,-28 -28,-28zM112,133c9.05078,0 14,5.79688 14,14c0,4.67578 -0.27343,4.83984 -1.3125,5.46875c-1.03906,0.62891 -5.30468,1.53125 -12.6875,1.53125c-7.38281,0 -11.64843,-0.90234 -12.6875,-1.53125c-1.03906,-0.62891 -1.3125,-0.79297 -1.3125,-5.46875c0,-8.20312 4.94922,-14 14,-14z"></path></g></g></g></svg>
		</template>
	</div>
	`
})

const app = new Vue({
	el: '#app',
	data: {
		side: null,
		flipping: false,
		heads: 0,
		tails: 0,
		edges: 0,
		storage: null
	},
	methods: {
		flipTheCoin() {
			this.side = null;
			this.flipping = true;
			setTimeout(()=> {
				const flip = Math.random().toFixed(2);
				if (flip == 0.00) {
					this.side = 'Edge';
					this.edges++;
				}
				else if (flip <= 0.50 && flip != 0.00) {
					this.side = 'Head';
					this.heads++;
				}
				else if (flip <= 1.00 && flip > 0.50 && flip != 0.00) {
					this.side = 'Tail';
					this.tails++;
				}
				this.flipping = false;
			}, 1500);
		},
		reset() {
			this.side = null;
			this.heads = 0;
			this.tails = 0;
			this.edges = 0;
		}
	},
	computed: {
		cSide() {
			return this.side;
		}
	},
	created: function() {
		this.storage = window.localStorage;
		// if(this.storage.getItem('head') === null) {

		// }
	},
	template: `
	<div class="container-fluid d-flex flex-column h-100">
		<header class="row pt-3">
			<div class="col-8">
				<h1>Coin flipper</h1>
			</div>
			<div class="col-4 align-self-center">
				<button @click="reset()" name="Reset" id="reset" type="button" class="btn btn-sm btn-light rounded-pill float-right py-1 px-3 text-white">Reset</button>
			</div>
		</header>
		<section class="row flex-grow-1 align-items-center">
			<div class="col-12 pt-5 pb-4 p-lg-0 pb-lg-5">
				<Coin :pSide="cSide" />
				<div class="circle-container">
					<svg class="circle" version="1.1" xmlns="http://www.w3.org/2000/svg">
						<circle id="circle" vector-effect="non-scaling-stroke" :class="{ flipping: flipping }" r="90" cx="100" cy="100" fill="transparent"></circle>
					</svg>
				</div>
			</div>
			<template v-if="cSide == null && flipping == false">
				<div class="col-12 text-center pop-result p-2 p-lg-3 text-muted">Ready to flip</div>
			</template>
			<template v-if="cSide == null && flipping == true">
				<div class="col-12 text-center pop-result p-2 p-lg-3 text-muted">Flipping !</div>
			</template>
			<template v-if="cSide != null && flipping == false">
				<div class="col-12 text-center pop-result p-2 p-lg-3">{{cSide}}!</div>
			</template>
		</section>
		<section class="row scores">
			<div :class="{ 'score-up': cSide == 'Head'}" class="score col-12 col-lg-4 px-3 pt-3">
				Heads <span id="head" class="float-right">{{heads}}</span>
				<div class="d-lg-none border-bottom border-secondary mt-3"></div>
			</div>
			<div :class="{ 'score-up': cSide == 'Tail'}" class="score col-12 col-lg-4 px-3 pt-3">
				Tails <span id="tail" class="float-right">{{tails}}</span>
				<div class="d-lg-none border-bottom border-secondary mt-3"></div>
			</div>
			<div :class="{ 'score-up': cSide == 'Edge'}" class="score col-12 col-lg-4 p-3">
				Edges <span id="edge" class="float-right">{{edges}}</span>
			</div>
		</section>
		<div class="row">
			<button type="button" :disabled="flipping" class="btn btn-block btn-primary rounded-0" @click="flipTheCoin()">Flip</button>
		</div>
		<footer class="row">
			<div class="col-7 text-muted">Created by <a href="http://pierre-burton.be" target="_blank" class="text-muted" title="Pierre Burton">Pierre Burton</a></div>
			<div class="col-5 text-muted text-right">Icons by <a class="text-muted" href="https://icons8.com">Icons8</a></div> 
		</footer>
	</div>
	`
})

// var html = document.querySelector("html"),
// 	wrapper = document.querySelector("#wrapper"),
// 	title = document.querySelector("#title"),
// 	coin = document.querySelector(".coin"),
// 	heads = document.querySelector("#head"),
// 	tails = document.querySelector("#tail"),
// 	pop = document.querySelector(".pop-result"),
// 	purse = document.querySelector(".purse"),
// 	flipBut = document.querySelector("#flip"),
// 	hardReset = document.querySelector('#reset'),
// 	headI = 0,
// 	tailI = 0;

// // Flip a coin function
// purse.addEventListener("click", function() {
// 	flipBut.disabled = true;
// 	coin.classList.remove("head2");
// 	pop.classList.remove("pop");
// 	pop.innerHTML = "";

// 	flip = Math.random().toFixed(2);

// 	if (flip == 0.00) {
// 		coin.classList.add("animate", "edge");
// 		pop.innerHTML = "Edge!!!";
// 	}
// 	else if (flip <= 0.50 && flip != 0.00) {
// 		tailI++;
// 		coin.classList.add("animate", "tail");
// 		pop.innerHTML = "Tail!";
// 	}
// 	else if (flip <= 1.00 && flip >0.50 && flip != 0.00) {
// 		headI++;
// 		coin.classList.add("animate", "head", "head2");
// 		pop.innerHTML = "Head!";
// 	};
// 	setTimeout(handleFlipEnd, 2000);
// }, false);

// flipBut.addEventListener("click", function(){
// 	flipBut.disabled = true;
// 	coin.classList.remove("head2");
// 	pop.classList.remove("pop");
// 	pop.innerHTML = "";

// 	flip = Math.random().toFixed(2);

// 	if (flip == 0.00) {
// 		coin.classList.add("animate", "edge");
// 		pop.innerHTML = "Edge!!!";
// 	}
// 	else if (flip <= 0.50 && flip != 0.00) {
// 		tailI++;
// 		coin.classList.add("animate", "tail");
// 		pop.innerHTML = "Tail!";
// 	}
// 	else if (flip <= 1.00 && flip >0.50 && flip != 0.00) {
// 		headI++;
// 		coin.classList.add("animate", "head", "head2");
// 		pop.innerHTML = "Head!";
// 	};
// 	setTimeout(handleFlipEnd, 2000);
// }, false);

// hardReset.addEventListener("click", function() {
// 	clearTimeout(handleFlipEnd);
// 	tailI = 0;
// 	headI = 0;
// 	flipBut.disabled = false;
// 	coin.classList.remove("animate", "head", "head2", "tail", "edge");
// 	pop.classList.remove("pop");
// 	pop.innerHTML = "";
// 	tails.innerHTML = tailI;
// 	heads.innerHTML = headI;
// });

// function flipTheCoin() {

// }

// function handleFlipEnd() {
// 	coin.classList.remove("animate", "head", "tail", "edge");
// 	pop.classList.add("pop");
// 	flipBut.disabled = false;
// 	tails.innerHTML = tailI;
// 	heads.innerHTML = headI;
// 	setTimeout(function() {pop.classList.remove("pop")}, 1000);
// }