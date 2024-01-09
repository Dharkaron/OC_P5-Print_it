const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Variables Générales
const bannerImg = document.querySelector(".banner-img")
const bannerCaption = document.querySelector("#banner p")
const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")
const banner = document.getElementById("banner")
const bannerDots = document.querySelector(".dots")

let index = 0



// Création et Affichage des bullet points dans la page html
//
//
let slidersList = document.createElement("ul")
	////remplacement de la div par une liste ul
	bannerDots.replaceWith(slidersList)
	slidersList.classList.add("dots")
		////Ajout de la liste dans le html
		banner.appendChild(slidersList)

	
	for (let i=0; i<slides.length; i++){
		let bulletpoint = document.createElement("li")
		bulletpoint.classList.add("dot")
		slidersList.appendChild(bulletpoint)

		if (i == index){
			bulletpoint.classList.add("dot_selected")
		}
	}
	


// Interaction au clic sur les Chevrons
//
//
	arrowRight.addEventListener("click", ()=>{
		const bulletpoint = document.querySelectorAll(".dot")
		bulletpoint[index].classList.remove("dot_selected")
		
		index++
		if (index >= slides.length) {
			index = 0
		}
		bannerImg.setAttribute("src", slides[index].image)
		bannerCaption.innerHTML = slides[index].tagLine
		bulletpoint[index].classList.add("dot_selected")
		console.log(index)
	})



	arrowLeft.addEventListener("click", ()=>{
		const bulletpoint = document.querySelectorAll(".dot")
		bulletpoint[index].classList.remove("dot_selected")
		
		index--
		if (index < 0) {
			index = slides.length -1
		}
		bannerImg.setAttribute("src", slides[index].image)
		bannerCaption.innerHTML = slides[index].tagLine
		bulletpoint[index].classList.add("dot_selected")
	})
