/* 
 * ALL CODE BY: SOORAJ GUPTA
 * COPYRIGHT © 2020 SOORAJ GUPTA
 * Last Updated: December 2020
 */

function init()
{
	if( settings.load ){
		var d = document.createElement( "div" );
		d.className = "loading";
		d.innerHTML = '<div class = "loading"><div class = "scene"><div class = "cube"><div class = "face front ahead"><span></span></div><div class = "face back"><span></span></div><div class = "face top"><span></span></div><div class = "face left"><span></span></div><div class = "face bottom"><span></span></div><div class = "face right"><span></span></div> </div></div></div>';
		document.body.appendChild( d );
		load();
	}
}
function load()
{
	var sides = ["ff", "bkf", "tf", "lf", "btf", "rf"];
	var i = 0;
	var rotations = 0;
	move();
	setInterval( move, 800 );
	function move()
	{
		if( i == sides.length )
			i=0;
		for ( var j = 0; j < sides.length; j++ )
		{
			if ( document.getElementsByClassName("face")[j].className.includes( "ahead" ) )
				document.getElementsByClassName("face")[j].classList.toggle("ahead");
		}
		document.getElementsByClassName("face")[i].classList.toggle("ahead");
		if( rotations != settings.rotations )
			document.getElementsByClassName("cube")[0].className = "cube " + sides [i];
		else
		{
			document.getElementsByClassName("face")[4].classList.add("ahead");
			document.getElementsByClassName("face")[5].classList.add("ahead");
			document.getElementsByClassName("cube")[0].style.transform = "rotateX( 45deg) rotateY( 45deg ) rotateZ( 90deg)"
		}
		rotations ++;
		i++;
		
	}
	setTimeout( function(){
		document.getElementsByClassName("cube")[0].classList.toggle("explode");
		document.getElementsByClassName( "loading" )[0].style.opacity = "0";
		setTimeout( function () { document.getElementsByClassName("loading")[0].style.display = "none"}, 400 );
		document.body.style.overflow = "visible";
	}, settings.rotations * 1200 );
}
init();
document.body.onload = function()
{
	document.getElementsByClassName("wrapper")[0].style.display = "inline-block";
}