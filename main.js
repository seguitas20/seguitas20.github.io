let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Amor sin cuenta",
     path: "Amor Sin Cuenta.mp3",
     img: "ASC.jpg",
     singer: "Vicente Fernandez"
   },
   {
     name: "Sirena Encantada",
     path: "Sirena.mp3",
     img: "Sirena.jpg",
     singer: "Miguel Morales"
   },
   {
     name: "Te prometo",
     path: "TPrometo.mp3",
     img: "TPrometo.jpg",
     singer: "Felipe Pelaez"
   },
   {
     name: "Ocean",
     path: "Ocean.mp3",
     img: "Ocean.jpg",
     singer: "Karol G"
   },
   {
     name: "Amarte a la antigua",
     path: "AAntigua.mp3",
     img: "AAntigua.jpg",
     singer: "Pedro Fernandez"
   },
   {
	name: "A la antiguita",
	path: "Antiguita.mp3",
	img: "Antiguita.jpg",
	singer: "Calibre 50"
  },
  {
	name: "Almas gemelas",
	path: "Almas.mp3",
	img: "Almas.jpg",
	singer: "Gilberto Santa Rosa"
  },
  {
	name: "La mitad que me faltaba",
	path: "LaMitad.mp3",
	img: "LaMitad.jpg",
	singer: "Alejandro Fernandez"
  },
  {
	name: "Eso y mas",
	path: "Eso.mp3",
	img: "Eso.jpg",
	singer: "Joan Sebastian"
  },
  {
	name: "Ella es mi todo",
	path: "Ella.mp3",
	img: "Ella.jpg",
	singer: "Kaleth Morales"
  },
  {
	name: "Algo que se quede",
	path: "Algo.mp3",
	img: "Algo.jpg",
	singer: "Grupo Niche"
  },
  {
	name: "Pierde conmigo la razon",
	path: "Pierde.mp3",
	img: "Pierde.jpg",
	singer: "Silvestre Dangond"
  },
  {
	name: "Lo mejor que hay en mi vida",
	path: "LoM.mp3",
	img: "LoM.jpg",
	singer: "Andres Cepeda"
  },
  {
	name: "Tu amor es un milagro",
	path: "TuA.mp3",
	img: "TuA.jpg",
	singer: "Los diablitos"
  },
  {
	name: "Las locuras mias",
	path: "loc.mp3",
	img: "loc.jpg",
	singer: "Silvestre Dangond"
  },
  {
	name: "Te volveria a elegir",
	path: "TeV.mp3",
	img: "Antiguita.jpg",
	singer: "Calibre 50"
  },
  {
	name: "Pero te conoci",
	path: "PeroT.mp3",
	img: "PeroT.jpg",
	singer: "Reik"
  },
  {
	name: "Acuerdate de mi",
	path: "Acuerdate.mp3",
	img: "Acuerdate.jpg",
	singer: "Morat"
  },  
  {
	name: "Acuerdate de mi",
	path: "Acuerdate.mp3",
	img: "Acuerdate.jpg",
	singer: "Morat"
  },
  {
	name: "Me estoy enamorando",
	path: "MeE.mp3",
	img: "MeE.jpg",
	singer: "Alejandro Fernandez"
  }
];


// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#148F77";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }