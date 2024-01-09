const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Variables Générales
const bannerImg = document.querySelector(".banner-img");
const bannerCaption = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerDots = document.querySelector(".dots");

let currentIndex = 0;


//Ajout des bulletPoint "dot" dans le html
for (let i=0; i<slides.length; i++){
	let dot = document.createElement("div");
	dot.classList.add("dot");
	bannerDots.appendChild(dot);

	if (i == currentIndex){
	dot.classList.add("dot_selected")
	};
};


//Changements d'images, de texte, et de "dot" à appliquer
// à l'execution de la fonction
function carousel(){
	////recupération des éléments "dot" du carousel
	let dot = document.querySelectorAll(".dot");

	////changement d'image et de texte
	bannerImg.src = "assets/images/slideshow/"+slides[currentIndex].image;
	bannerCaption.innerHTML = slides[currentIndex].tagLine;

	////changement des bulletPoints à chaque changement du carousel
	dot.forEach(function (dot, i){ 
		dot.classList.toggle("dot_selected", i === currentIndex)
	});
	console.log(currentIndex);
};


// Interaction au clic sur les Chrevrons

arrowRight.addEventListener("click", ()=>{
	////incrémentation de l'index à chaque click : currentIndex === slides[index]
	currentIndex = (currentIndex + 1 ) % slides.length;
	carousel();
});

arrowLeft.addEventListener("click", ()=>{
	currentIndex = (currentIndex -1 + slides.length) % slides.length;	
	carousel();
});

