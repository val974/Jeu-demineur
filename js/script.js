let cartes = document.querySelectorAll('img');
let point = 0;
let tableauID = [];
let chiffre = 0;
let tableauChoixOrdi=[];

for (let i =0; i<cartes.length;i++){
	let id = cartes[i].id;
	tableauID.push(cartes[i].id);
}

setInterval(nombreAleatoire,1000);

function nombreAleatoire(){
	let chiffre = Math.round(Math.random() * 8);
	let position = cartes[chiffre].setAttribute("src","img/bombe.jpg");
	tableauChoixOrdi.push(cartes[chiffre]);
	if(tableauChoixOrdi.length===1){
		tableauChoixOrdi[0].addEventListener("click", score);
		setTimeout(function(){cartes[chiffre].setAttribute("src","img/pattern.png")},550);
		/*tableauChoixOrdi[0].removeEventListener("click",score);*/
		tableauChoixOrdi=[];


	}
}

function score(){
		point+=5;
		console.log(point);
		document.getElementById("pointsgagnes").innerHTML =  " Votre score est de : " + point;
	/*}*/
}


/*
let cartes = document.querySelectorAll('img');
console.log(cartes);
let point = 0;
let tableauID = [];
let chiffre = 0;
let tableauChoixOrdi=[];
/*let point =0;

for (let i =0; i<cartes.length;i++){
	let id = cartes[i].id;
	tableauID.push(cartes[i].id);
}

setInterval(nombreAleatoire,500);

function nombreAleatoire(e){
	let chiffre = Math.round(Math.random() * 8);
	for (let j=0;j<tableauID.length;j++){
		let changement = tableauID[chiffre];
		let position = cartes[changement].setAttribute("src","img/bombe.jpg");
		tableauChoixOrdi.push(cartes[changement])
		tableauChoixOrdi=[];
		cartes[changement].addEventListener("click", score);
		/*e.currentTarget.addEventListener("click", score);
		setTimeout(function(){cartes[changement].setAttribute("src","img/pattern.png")},550)
	}
}

nombreAleatoire();

function score(e){
	if(tableauChoixOrdi.length<1){
		point+=5;
	}
	document.getElementById("pointsgagnes").innerHTML =  " Votre score est de : " + point;
}
*/


/*function nombreAleatoire(e){
	let chiffre = Math.round(Math.random() * 8);
	for (let j=0;j<tableauID.length;j++){
		let changement = tableauID[chiffre];
		let position = cartes[changement].setAttribute("src","img/bombe.jpg");
		tableauChoixOrdi.push(cartes[changement]);
		console.log(tableauChoixOrdi);
		tableauChoixOrdi=[];
		cartes[changement].addEventListener("click", score);
		
		/*e.currentTarget.addEventListener("click", score);
		setTimeout(function(){tableauChoixOrdi[0].setAttribute("src","img/pattern.png")},550)
	}
}
*/