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

function Peliculas()
{
	document.getElementById('visor_html').src = "peliculas/peliculas.html";
}

function Deportes()
{
	document.getElementById('visor_html').src = "deportes/deportes.html";
}

function Artico()
{
	document.getElementById('visor_html').src = "artico/artico.html";
}

function Espacio()
{
	document.getElementById('visor_html').src = "espacio/espacio.html";
}

function Formulario()
{
	document.getElementById('visor_html').src = "formulario/formulario.html";
}