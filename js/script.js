

let cartes = document.querySelectorAll('img');
let tableauID = [];
let point =0;


for (let i =0; i<cartes.length;i++){ //je parcours mon tableau
	let id = cartes[i].id;
	tableauID.push(cartes[i].id);//je mets les id des cartes dans un tableau
}

let bouton1 = document.querySelector("#button1");
bouton1.addEventListener("click",function top(){

debut = setInterval(nombreAleatoire,1000)//je répète ma fonction 
});

function nombreAleatoire(){
	let chiffre = Math.round(Math.random() * 8);//je choisis un nombre aléatoire
		let changement = tableauID[chiffre];//l'ordinateur choisit un id aléatoirement
		cartes[changement].setAttribute("src","img/bombe.jpg"); //je remplace la source de l'id choisit par l'ordinateur
		cartes[changement].addEventListener("click", score); //j'ajoute à cet id un évènement clic
		setTimeout(function(){cartes[changement].setAttribute("src","img/pattern.png")},1000)//je retourne les cartes au bout d'un certain temps
	}


function score(e){
		point++;//j'incrèmente les points au fur et à mesure
	document.getElementById("pointsgagnes").innerHTML =  " Votre score est de : " + point;
	e.currentTarget.removeEventListener("click", score); //j'enlève l'évènement clic pour qu'il ne garde pas le score en mémoire
}

let bouton2 = document.querySelector("#button2");
bouton2.addEventListener("click",function(){
	clearInterval(debut);
});

let bouton3 = document.querySelector("#button3");
bouton3.addEventListener("click",function(){
	clearInterval(debut);
});