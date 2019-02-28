var audio = new Audio("audio/阿炳-二泉映月.mp3");
var box = document.getElementById('contectMe');
audio.play();
box.style.height = "0px";
function setMusic(){
	var musicColor = document.getElementById("Music").style.backgroundColor;
	
	if(musicColor=="indianred"){
		document.getElementById("Music").style.backgroundColor='green';		
		audio.play();
	}		
	else{
		document.getElementById("Music").style.backgroundColor='indianred';
		audio.pause();
	}	
}
function show(){	 
	if(box.style.height != "150px"){     
		box.style.display = "block";
		box.style.height = "150px";
		box.style.opacity = "1";
		box.style.fontSize = "16px";
	}     
	else{     		
		box.style.height = "0px";
		box.style.opacity = "0";
		box.style.fontSize = "5px";
	}
}
