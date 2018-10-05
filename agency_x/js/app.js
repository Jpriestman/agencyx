$(document).foundation()

//variables, arrays and DOM elements
 	var	imageBanner = document.querySelector("#houseImages"),
 		sigils = document.querySelectorAll(".sigilContainer"),
 		lightbox = document.querySelector('.lightbox'),
 		closeLBox = lightbox.querySelector('.close-lightbox'),
 		vidPlayer = lightbox.querySelector('video'),
 		tagLine = document.querySelector('#tagLine'),

 		
 		offSet = 600,
 		houseName = 'stark';
 		var currentSource;
 		var theExt;

		imageBanner.style.right = "0px",
		caption = ['Winter is Coming', 'Ours is the Fury', 'Hear Me Roar!', 'Family, Duty, Honor', 'We Do Not Sow', 'As High As Honor'];
	


//functions

function closeLightBox() {
	//(2)complete this function
	vidPlayer.currenTime=0; //rewindes video to start
	lightbox.classList.remove('show-lightbox');
	vidPlayer.pause();
}

function moveBanner() {
	imageBanner.style.right = (offSet * this.dataset.offset) + 'px';
	//set house name to name of the second class on this item(image in this case)
	houseName = this.className.split(' ')[1];

	var pick = this.dataset.offset;
	tagLine.innerHTML = caption[this.dataset.offset]; 
	//this means the current object clicked on..internal reference for the thing that was just clicked
	//split will take a long string and make it an array by splitting it on the character that is specified
	//() means function... [] means array
	
}

function showHouseVideo() {
	currentSource = vidPlayer.currentSrc;
	theExt = currentSource.substr(currentSource.lastIndexOf("."));
	vidPlayer.src = 'video/house-'+houseName+theExt;
	lightbox.classList.add('show-lightbox');
	vidPlayer.load();
	vidPlayer.play();
}



//events and listeners
imageBanner.addEventListener('transitionend', showHouseVideo, false);

closeLBox.addEventListener('click', closeLightBox);

for(var i = 0; i < sigils.length; i++) {
	sigils[i].addEventListener('click', moveBanner, false);
}

//(3)add listener for end of transition , use 'transitioned' event to open the lightbox and start playig the selected video'
//(4) when video finised playing close the lightbox


//4 LINES OF CODE
