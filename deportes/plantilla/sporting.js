window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
	{
		document.getElementById("myBtn").style.display = "block";
	}
	else
	{
		document.getElementById("myBtn").style.display = "none";
	}
}

function Arriba()
{
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

function MostrarPosicion()
{
	var x = document.getElementById("DIVporteros");
	var y = document.getElementById("DIVdefensas");
	var z = document.getElementById("DIVmedios");
	var w = document.getElementById("DIVdelanteros");
	
	if (selector.value == "1")
	{
		x.style.display = "block";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "none";
	}
	if (selector.value == "2")
	{
		x.style.display = "none";
		y.style.display = "block";
		z.style.display = "none";
		w.style.display = "none";
	}
	if (selector.value == "3")
	{
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "block";
		w.style.display = "none";
	}
	if (selector.value == "4")
	{
		x.style.display = "none";
		y.style.display = "none";
		z.style.display = "none";
		w.style.display = "block";
	}
}