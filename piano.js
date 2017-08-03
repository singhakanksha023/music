
alert("hey there! please play me but use caplocks ");
window.onload= function(){

var piano=Synth.createInstrument('piano'); //piano is intialized here using Synth syntax
$("#key_1").on('click',function(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('C',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 81) //code for Q is 81
	{
		piano.play('C',3,2); //Synth generates these arguments means (sound,note,octave,duration)
	} //shape sound is written in ' ' whereas octaves are change in the sound and duration we take here is of 2 seconds only
});

$("#key_2").on('click',function(){
	piano.play('D',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 87) //code for W is 87
	{
		piano.play('D',3,2);
	}
});
$("#key_3").on('click',function(){
	piano.play('E',3,2);
}); 
$('body').on('keypress',function(event){
	if(event.keycode == 69) //code for E is 69
	{
		piano.play('E',3,2);
	}
});


$("#key_4").on('click',function(){  //on.click function for key 1 when ever key 1 is pressed it means arguments C,3,2 is to be played
	piano.play('F',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 81)
	{
		piano.play('F',3,2);
	}
});

$("#key_5").on('click',function(){  
	piano.play('G',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 89) 
	{
		piano.play('C',3,2); 
	}  
});
$("#key_6").on('click',function(){  
	piano.play('A',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 87) 
	{
		piano.play('A',3,2); 
	} 
});
$("#key_7").on('click',function(){  
	piano.play('B',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 85) 
	{
		piano.play('B',3,2); 
	} 
});

$("#key_8").on('click',function(){   
	piano.play('C',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 73) 
	{
		piano.play('C',4,2); 
	} 
});

$("#key_9").on('click',function(){  
	piano.play('D',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 79) 
	{
		piano.play('D',4,2); 
	}
});

$("#key_10").on('click',function(){  
	piano.play('E',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 80) 
	{
		piano.play('E',4,2); 
	} 
});

$("#key_11").on('click',function(){   
	piano.play('F',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 91) 
	{
		piano.play('F',3,2); 
	} 
});

$("#key_12").on('click',function(){  
	piano.play('G',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 93) 
	{
		piano.play('G',3,2); 
	}  
});

$("#key_13").on('click',function(){  
	piano.play('A',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 90) 
	{
		piano.play('A',4,2); 
	} 
});

$("#key_14").on('click',function(){  
	piano.play('B',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 88) 
	{
		piano.play('B',4,2); 
	} 
});
$("#key_15").on('click',function(){  
	piano.play('C',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 67) 
	{
		piano.play('C',5,2); 
	}
});

$("#key_16").on('click',function(){  
	piano.play('D',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 86) 
	{
		piano.play('D',5,2); 
	} 
});

$("#key_17").on('click',function(){  
	piano.play('E',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 66) 
	{
		piano.play('E',5,2); 
	} 
});

$("#key_18").on('click',function(){  
	piano.play('F',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 78) 
	{
		piano.play('F',5,2); 
	} 
});

$("#key_19").on('click',function(){  
	piano.play('G',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 77) 
	{
		piano.play('G',5,2); 
	} 
});

$("#key_20").on('click',function(){  
	piano.play('A',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 44) 
	{
		piano.play('A',5,2); 
	} 
});

$("#key_21").on('click',function(){ 
	piano.play('B',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 46) 
	{
		piano.play('B',5,2); 
	}
});

$("#key-1").on('click',function(){  
	piano.play('C#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 50) 
	{
		piano.play('C#',3,2); 
	} 
});

$("#key-2").on('click',function(){ 
	piano.play('D#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 51)
	{
		piano.play('D#',3,2); 
	} 
});

$("#key-3").on('click',function(){  
	piano.play('E',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 53) 
	{
		piano.play('E',3,2); 
	}  
});
$("#key-4").on('click',function(){  
	piano.play('F#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 54) 
	{
		piano.play('F#',3,2); 
	} 
});
$("#key-5").on('click',function(){   
	piano.play('G#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 55) 
	{
		piano.play('F#',3,2); 
	}  
});
$("#key-6").on('click',function(){  
	piano.play('G#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 57) 
	{
		piano.play('G#',3,2); 
	} 
});
$("#key-7").on('click',function(){   
	piano.play('A#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 187) 
	{
		piano.play('A#',3,2); 
	} 
});

$("#key-8").on('click',function(){   
	piano.play('B',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 65) 
	{
		piano.play('B',3,2); 
	} 
});

$("#key-9").on('click',function(){  
	piano.play('C#',3,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 83) 
	{
		piano.play('C#',4,2); 
	} 
});

$("#key-10").on('click',function(){   
	piano.play('D#',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 83) 
	{
		piano.play('D#',4,2); 
	} 
});

$("#key-11").on('click',function(){  
	piano.play('E',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 70) 
	{
		piano.play('E',4,2); 
	} 
});

$("#key-12").on('click',function(){   
	piano.play('F#',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 71) 
	{
		piano.play('F#',4,2); 
	}  
});

$("#key-13").on('click',function(){  
	piano.play('A#',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 74) 
	{
		piano.play('A#',4,2); 
	} 
});
$("#key-14").on('click',function(){  
	piano.play('B',4,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 75) 
	{
		piano.play('B',4,2); 
	} 
});
$("#key-15").on('click',function(){   
	piano.play('C#',5,2);
});
$('body').on('keypress',function(event){
	if(event.keycode == 76) 
	{
		piano.play('C#',5,2); 
	} 
});


}
