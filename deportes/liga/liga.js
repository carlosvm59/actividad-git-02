window.onscroll = function() {scrollFunction()};

/* Creamos las variables correspondientes a la jornada, al partido, a los equipos y a los goles */
var jornada_actual = 1;
var partido_actual = 1;

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

function Ganado()
{
	/* Sumamos 1 partido jugado a ambos equipos */
	var jugados_local = parseFloat(document.getElementById("jugados_" + selector_local.value).innerText);
	var jugados_visitante = parseFloat(document.getElementById("jugados_" + selector_visitante.value).innerText);
	var sumar_jugados = 1;
	document.getElementById("jugados_" + selector_local.value).innerText = jugados_local + sumar_jugados;
	document.getElementById("jugados_" + selector_visitante.value).innerText = jugados_visitante + sumar_jugados;
	
	/* Sumamos 1 victoria al local */
	var victorias = parseFloat(document.getElementById("victorias_" + selector_local.value).innerText);
	var sumar_victorias = 1;
	document.getElementById("victorias_" + selector_local.value).innerText = victorias + sumar_victorias;
	
	/* Sumamos 1 derrota al visitante */
	var derrotas = parseFloat(document.getElementById("derrotas_" + selector_visitante.value).innerText);
	var sumar_derrotas = 1;
	document.getElementById("derrotas_" + selector_visitante.value).innerText = derrotas + sumar_derrotas;
	
	/* Sumamos 3 puntos al local */
	var puntos = parseFloat(document.getElementById("puntos_" + selector_local.value).innerText);
	var sumar_puntos = 3;
	document.getElementById("puntos_" + selector_local.value).innerText = puntos + sumar_puntos;
	
	/* Contabilizamos el marcador */
	ContarLocal();
	ContarVisitante();
}

function Empatado()
{
	/* Sumamos 1 partido jugado a ambos equipos */
	var jugados_local = parseFloat(document.getElementById("jugados_" + selector_local.value).innerText);
	var jugados_visitante = parseFloat(document.getElementById("jugados_" + selector_visitante.value).innerText);
	var sumar_jugados = 1;
	document.getElementById("jugados_" + selector_local.value).innerText = jugados_local + sumar_jugados;
	document.getElementById("jugados_" + selector_visitante.value).innerText = jugados_visitante + sumar_jugados;
	
	/* Sumamos 1 empate a ambos equipos */
	var empates_local = parseFloat(document.getElementById("empates_" + selector_local.value).innerText);
	var empates_visitante = parseFloat(document.getElementById("empates_" + selector_visitante.value).innerText);
	var sumar_empates = 1;
	document.getElementById("empates_" + selector_local.value).innerText = empates_local + sumar_empates;
	document.getElementById("empates_" + selector_visitante.value).innerText = empates_visitante + sumar_empates;
	
	/* Sumamos 1 punto a ambos equipos */
	var puntos_local = parseFloat(document.getElementById("puntos_" + selector_local.value).innerText);
	var puntos_visitante = parseFloat(document.getElementById("puntos_" + selector_visitante.value).innerText);
	var sumar_puntos = 1;
	document.getElementById("puntos_" + selector_local.value).innerText = puntos_local + sumar_puntos;
	document.getElementById("puntos_" + selector_visitante.value).innerText = puntos_visitante + sumar_puntos;
	
	/* Contabilizamos el marcador */
	ContarLocal();
	ContarVisitante();
}

function Perdido()
{
	/* Sumamos 1 partido jugado a ambos equipos */
	var jugados_local = parseFloat(document.getElementById("jugados_" + selector_local.value).innerText);
	var jugados_visitante = parseFloat(document.getElementById("jugados_" + selector_visitante.value).innerText);
	var sumar_jugados = 1;
	document.getElementById("jugados_" + selector_local.value).innerText = jugados_local + sumar_jugados;
	document.getElementById("jugados_" + selector_visitante.value).innerText = jugados_visitante + sumar_jugados;
	
	/* Sumamos 1 derrota al local */
	var derrotas = parseFloat(document.getElementById("derrotas_" + selector_local.value).innerText);
	var sumar_derrotas = 1;
	document.getElementById("derrotas_" + selector_local.value).innerText = derrotas + sumar_derrotas;
	
	/* Sumamos 1 victoria al visitante */
	var victorias = parseFloat(document.getElementById("victorias_" + selector_visitante.value).innerText);
	var sumar_victorias = 1;
	document.getElementById("victorias_" + selector_visitante.value).innerText = victorias + sumar_victorias;
	
	/* Sumamos 3 puntos al visitante */
	var puntos = parseFloat(document.getElementById("puntos_" + selector_visitante.value).innerText);
	var sumar_puntos = 3;
	document.getElementById("puntos_" + selector_visitante.value).innerText = puntos + sumar_puntos;
	
	/* Contabilizamos el marcador */
	ContarLocal();
	ContarVisitante();
}

function ContarLocal()
{
	/* A los goles a favor sumamos los goles marcados */
	var golesFavor = document.getElementById("golesFavor_" + selector_local.value).innerText;
	var marcados = document.getElementById("marcados_local").value;
	var res1 = document.getElementById("golesFavor_" + selector_local.value);
	if (marcados == "")
	{
		res1.innerText = parseInt(golesFavor);
	}
	else
	{
		res1.innerText = parseInt(golesFavor) + parseInt(marcados);
	}
	
	/* A los goles en contra sumamos los goles encajados */
	var golesContra = document.getElementById("golesContra_" + selector_local.value).innerText;
	var encajados = document.getElementById("marcados_visitante").value;
	var res2 = document.getElementById("golesContra_" + selector_local.value);
	if (encajados == "")
	{
		res2.innerText = parseInt(golesContra);
	}
	else
	{
		res2.innerText = parseInt(golesContra) + parseInt(encajados);
	}
	
	/* Calculamos la diferencia entre los goles a favor y los goles en contra */
	var golesFavor = document.getElementById("golesFavor_" + selector_local.value).innerText;
	var golesContra = document.getElementById("golesContra_" + selector_local.value).innerText;
	var res3 = document.getElementById("golesDiferencia_" + selector_local.value);
	
	res3.innerText = parseInt(golesFavor) - parseInt(golesContra);
}

function ContarVisitante()
{
	/* A los goles a favor sumamos los goles marcados */
	var golesFavor = document.getElementById("golesFavor_" + selector_visitante.value).innerText;
	var marcados = document.getElementById("marcados_visitante").value;
	var res1 = document.getElementById("golesFavor_" + selector_visitante.value);
	if (marcados == "")
	{
		res1.innerText = parseInt(golesFavor);
	}
	else
	{
		res1.innerText = parseInt(golesFavor) + parseInt(marcados);
	}
	
	/* A los goles en contra sumamos los goles encajados */
	var golesContra = document.getElementById("golesContra_" + selector_visitante.value).innerText;
	var encajados = document.getElementById("marcados_local").value;
	var res2 = document.getElementById("golesContra_" + selector_visitante.value);
	if (encajados == "")
	{
		res2.innerText = parseInt(golesContra);
	}
	else
	{
		res2.innerText = parseInt(golesContra) + parseInt(encajados);
	}
	
	/* Calculamos la diferencia entre los goles a favor y los goles en contra */
	var golesFavor = document.getElementById("golesFavor_" + selector_visitante.value).innerText;
	var golesContra = document.getElementById("golesContra_" + selector_visitante.value).innerText;
	var res3 = document.getElementById("golesDiferencia_" + selector_visitante.value);
	
	res3.innerText = parseInt(golesFavor) - parseInt(golesContra);
}

function JugarPartido()
{
	/* Recogemos los goles marcados y los encajados, además del mensaje de error */
	var marcados_local = document.getElementById("marcados_local").value;
	var marcados_visitante = document.getElementById("marcados_visitante").value;
	var error = document.getElementById("error_relleno");
	
	/* Comprobamos que estén rellenados ambos campos */
	if ((marcados_local == "") || (marcados_visitante == ""))
	{
		/* Mostrar mensaje de necesidad de rellenarlos */
		if (error.style.display === "none")
		{
			error.style.display = "block";
		}
		else
		{
			error.style.display = "block";
		}
	}
	else
	{
		/* Quitar mensaje de error */
		if (error.style.display === "block")
		{
			error.style.display = "none";
		}
		else
		{
			error.style.display = "none";
		}
		
		/* Comparamos y se decide si ganó, empató o perdió */
		if (marcados_local > marcados_visitante)
		{
			Ganado();
			GestionJornada();
			OrdenarTabla();
		}
		else
		{
			if (marcados_local == marcados_visitante)
			{
				Empatado();
				GestionJornada();
				OrdenarTabla();
			}
			else
			{
				if (marcados_local < marcados_visitante)
				{
					Perdido();
					GestionJornada();
					OrdenarTabla();
				}
			}
		}
	}
}

function ElegirEquipos()
{
	/* Creamos las variables identificadoras y de si hay error */
	var error_selector = document.getElementById("error_selector");
	
	/* Comparar que los valores no sean iguales */
	if (selector_local.value == selector_visitante.value)
	{
		/* Mostrar mensaje de evitar repetición */
		if (error_selector.style.display === "none")
		{
			error_selector.style.display = "block";
		}
		else
		{
			error_selector.style.display = "block";
		}
		
		/* Ocultamos el botón para jugar el partido */
		if (jugar_partido.style.display === "block")
		{
			jugar_partido.style.display = "none";
		}
		else
		{
			jugar_partido.style.display = "none";
		}
	}
	else
	{
		/* Quitar mensaje de error */
		if (error_selector.style.display === "block")
		{
			error_selector.style.display = "none";
		}
		else
		{
			error_selector.style.display = "none";
		}
		
		/* Poner botón de jugar partido */
		if (jugar_partido.style.display === "none")
		{
			jugar_partido.style.display = "block";
		}
		else
		{
			jugar_partido.style.display = "block";
		}
	}
}

function Desplegable()
{
	var x = document.getElementById("DIVclasificacion");
	var y = document.getElementById("DIVpartidos");
	if (selector.value == "1")
	{
		x.style.display = "block";
		y.style.display = "none";
	}
	if (selector.value == "2")
	{
		x.style.display = "none";
		y.style.display = "block";
	}
}

function SelectorGrupoJornada()
{
	var grupo1 = document.getElementById("DIVgrupojornadas1_11");
	var grupo2 = document.getElementById("DIVgrupojornadas12_22");
	var grupo3 = document.getElementById("DIVgrupojornadas23_33");
	var grupo4 = document.getElementById("DIVgrupojornadas34_42");
	
	if (selector_grupo_jornada.value == "0")
	{
		grupo1.style.display = "none";
		grupo2.style.display = "none";
		grupo3.style.display = "none";
		grupo4.style.display = "none";
	}
	if (selector_grupo_jornada.value == "1")
	{
		grupo1.style.display = "block";
		grupo2.style.display = "none";
		grupo3.style.display = "none";
		grupo4.style.display = "none";
	}
	if (selector_grupo_jornada.value == "2")
	{
		grupo1.style.display = "none";
		grupo2.style.display = "block";
		grupo3.style.display = "none";
		grupo4.style.display = "none";
	}
	if (selector_grupo_jornada.value == "3")
	{
		grupo1.style.display = "none";
		grupo2.style.display = "none";
		grupo3.style.display = "block";
		grupo4.style.display = "none";
	}
	if (selector_grupo_jornada.value == "4")
	{
		grupo1.style.display = "none";
		grupo2.style.display = "none";
		grupo3.style.display = "none";
		grupo4.style.display = "block";
	}
}

function SelectorJornada1()
{
	var jornada1 = document.getElementById("DIVjornada1");
	var jornada2 = document.getElementById("DIVjornada2");
	var jornada3 = document.getElementById("DIVjornada3");
	var jornada4 = document.getElementById("DIVjornada4");
	var jornada5 = document.getElementById("DIVjornada5");
	var jornada6 = document.getElementById("DIVjornada6");
	var jornada7 = document.getElementById("DIVjornada7");
	var jornada8 = document.getElementById("DIVjornada8");
	var jornada9 = document.getElementById("DIVjornada9");
	var jornada10 = document.getElementById("DIVjornada10");
	var jornada11 = document.getElementById("DIVjornada11");
	
	if (selector_jornada_1.value == "0")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "1")
	{
		jornada1.style.display = "block";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "2")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "block";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "3")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "block";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "4")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "block";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "5")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "block";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "6")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "block";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "7")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "block";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "8")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "block";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "9")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "block";
		jornada10.style.display = "none";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "10")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "block";
		jornada11.style.display = "none";
	}
	if (selector_jornada_1.value == "11")
	{
		jornada1.style.display = "none";
		jornada2.style.display = "none";
		jornada3.style.display = "none";
		jornada4.style.display = "none";
		jornada5.style.display = "none";
		jornada6.style.display = "none";
		jornada7.style.display = "none";
		jornada8.style.display = "none";
		jornada9.style.display = "none";
		jornada10.style.display = "none";
		jornada11.style.display = "block";
	}
}
			
function SelectorJornada2()
{
	var jornada12 = document.getElementById("DIVjornada12");
	var jornada13 = document.getElementById("DIVjornada13");
	var jornada14 = document.getElementById("DIVjornada14");
	var jornada15 = document.getElementById("DIVjornada15");
	var jornada16 = document.getElementById("DIVjornada16");
	var jornada17 = document.getElementById("DIVjornada17");
	var jornada18 = document.getElementById("DIVjornada18");
	var jornada19 = document.getElementById("DIVjornada19");
	var jornada20 = document.getElementById("DIVjornada20");
	var jornada21 = document.getElementById("DIVjornada21");
	var jornada22 = document.getElementById("DIVjornada22");
	
	if (selector_jornada_2.value == "0")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "12")
	{
		jornada12.style.display = "block";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "13")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "block";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "14")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "block";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "15")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "block";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "16")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "block";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "17")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "block";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "18")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "block";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "19")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "block";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "20")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "block";
		jornada21.style.display = "none";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "21")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "block";
		jornada22.style.display = "none";
	}
	if (selector_jornada_2.value == "22")
	{
		jornada12.style.display = "none";
		jornada13.style.display = "none";
		jornada14.style.display = "none";
		jornada15.style.display = "none";
		jornada16.style.display = "none";
		jornada17.style.display = "none";
		jornada18.style.display = "none";
		jornada19.style.display = "none";
		jornada20.style.display = "none";
		jornada21.style.display = "none";
		jornada22.style.display = "block";
	}
}

function SelectorJornada3()
{
	var jornada23 = document.getElementById("DIVjornada23");
	var jornada24 = document.getElementById("DIVjornada24");
	var jornada25 = document.getElementById("DIVjornada25");
	var jornada26 = document.getElementById("DIVjornada26");
	var jornada27 = document.getElementById("DIVjornada27");
	var jornada28 = document.getElementById("DIVjornada28");
	var jornada29 = document.getElementById("DIVjornada29");
	var jornada30 = document.getElementById("DIVjornada30");
	var jornada31 = document.getElementById("DIVjornada31");
	var jornada32 = document.getElementById("DIVjornada32");
	var jornada33 = document.getElementById("DIVjornada33");
	
	if (selector_jornada_3.value == "0")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "23")
	{
		jornada23.style.display = "block";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "24")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "block";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "25")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "block";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "26")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "block";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "27")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "block";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "28")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "block";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "29")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "block";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "30")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "block";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "31")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "block";
		jornada32.style.display = "none";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "32")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "block";
		jornada33.style.display = "none";
	}
	if (selector_jornada_3.value == "33")
	{
		jornada23.style.display = "none";
		jornada24.style.display = "none";
		jornada25.style.display = "none";
		jornada26.style.display = "none";
		jornada27.style.display = "none";
		jornada28.style.display = "none";
		jornada29.style.display = "none";
		jornada30.style.display = "none";
		jornada31.style.display = "none";
		jornada32.style.display = "none";
		jornada33.style.display = "block";
	}
}

function SelectorJornada4()
{
	var jornada34 = document.getElementById("DIVjornada34");
	var jornada35 = document.getElementById("DIVjornada35");
	var jornada36 = document.getElementById("DIVjornada36");
	var jornada37 = document.getElementById("DIVjornada37");
	var jornada38 = document.getElementById("DIVjornada38");
	var jornada39 = document.getElementById("DIVjornada39");
	var jornada40 = document.getElementById("DIVjornada40");
	var jornada41 = document.getElementById("DIVjornada41");
	var jornada42 = document.getElementById("DIVjornada42");
	
	if (selector_jornada_4.value == "0")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "34")
	{
		jornada34.style.display = "block";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "35")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "block";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "36")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "block";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "37")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "block";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "38")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "block";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "39")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "block";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "40")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "block";
		jornada41.style.display = "none";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "41")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "block";
		jornada42.style.display = "none";
	}
	if (selector_jornada_4.value == "42")
	{
		jornada34.style.display = "none";
		jornada35.style.display = "none";
		jornada36.style.display = "none";
		jornada37.style.display = "none";
		jornada38.style.display = "none";
		jornada39.style.display = "none";
		jornada40.style.display = "none";
		jornada41.style.display = "none";
		jornada42.style.display = "block";
	}
}

function OrdenarTabla()
{
	var table, rows, switching, i, x, y, shouldSwitch;
	table = document.getElementById("liga123");
	switching = true;
	
	/* Bucle que continúa hasta que no se hace ningún cambio */
	while (switching)
	{
		/* Comenzar sin cambiar nada */
		switching = false;
		rows = table.rows;
		
		/* Ir por todas las filas menos la primera, que es la cabecera */
		for (i = 1; i < (rows.length - 1); i++)
		{
			/* No dejar hacer cambios */
			shouldSwitch = false;
			
			/* Coger los dos Puntos a comparar, el de la fila actual y el de la siguiente */
			x = rows[i].getElementsByTagName("TD")[8];
			y = rows[i + 1].getElementsByTagName("TD")[8];
			
			/* Si los Puntos actuales son menores que los siguientes, cambiarlos. Si son iguales, bajar jerarquía */
			if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML))
			{
				/* Cambiar, restaurar la jerarquía por Puntos y romper bucle */
				shouldSwitch = true;
				x = rows[i].getElementsByTagName("TD")[8];
				y = rows[i + 1].getElementsByTagName("TD")[8];
				break;
			}
			if (parseFloat(x.innerHTML) == parseFloat(y.innerHTML))
			{
				/* Cambiamos la jerarquía a la columna de la Diferencia de Goles */
				x = rows[i].getElementsByTagName("TD")[7];
				y = rows[i + 1].getElementsByTagName("TD")[7];
				
				if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML))
				{
					/* Cambiar, restaurar la jerarquía por Puntos y romper bucle */
					shouldSwitch = true;
					x = rows[i].getElementsByTagName("TD")[8];
					y = rows[i + 1].getElementsByTagName("TD")[8];
					break;
				}
				if (parseFloat(x.innerHTML) == parseFloat(y.innerHTML))
				{
					/* Cambiamos la jerarquía a la columna de los Goles a Favor */
					x = rows[i].getElementsByTagName("TD")[5];
					y = rows[i + 1].getElementsByTagName("TD")[5];
					
					if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML))
					{
						/* Cambiar, restaurar la jerarquía por Puntos y romper bucle */
						shouldSwitch = true;
						x = rows[i].getElementsByTagName("TD")[8];
						y = rows[i + 1].getElementsByTagName("TD")[8];
						break;
					}
					if (parseFloat(x.innerHTML) == parseFloat(y.innerHTML))
					{
						/* Cambiamos la jerarquía a la columna de las Victorias */
						x = rows[i].getElementsByTagName("TD")[2];
						y = rows[i + 1].getElementsByTagName("TD")[2];
						
						if (parseFloat(x.innerHTML) < parseFloat(y.innerHTML))
						{
							/* Cambiar, restaurar la jerarquía por Puntos y romper bucle */
							shouldSwitch = true;
							x = rows[i].getElementsByTagName("TD")[8];
							y = rows[i + 1].getElementsByTagName("TD")[8];
							break;
						}
						if (parseFloat(x.innerHTML) == parseFloat(y.innerHTML))
						{
							/* Cambiamos la jerarquía a la columna de las Derrotas */
							x = rows[i].getElementsByTagName("TD")[4];
							y = rows[i + 1].getElementsByTagName("TD")[4];
							
							if (parseFloat(x.innerHTML) > parseFloat(y.innerHTML))
							{
								/* Cambiar, restaurar la jerarquía por Puntos y romper bucle */
								shouldSwitch = true;
								x = rows[i].getElementsByTagName("TD")[8];
								y = rows[i + 1].getElementsByTagName("TD")[8];
								break;
							}
						}
					}
				}
			}
		}
		if (shouldSwitch)
		{
		/* Si se tiene que hacer un cambio, hacerlo e indicar que se ha hecho */
		rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
		switching = true;
		}
	}
}

function GestionJornada()
{
	var equipo_local = document.getElementById("equipo_" + selector_local.value + "b").innerHTML;
	var equipo_visitante = document.getElementById("equipo_" + selector_visitante.value).innerHTML;
	var equipo_local_goles = document.getElementById("marcados_local").value;
	var equipo_visitante_goles = document.getElementById("marcados_visitante").value;
	
	var jornada_equipo_local = document.getElementById("equipo_local_" + partido_actual + "_jornada_" + jornada_actual);
	var jornada_equipo_visitante = document.getElementById("equipo_visitante_" + partido_actual + "_jornada_" + jornada_actual);
	var jornada_goles_local = document.getElementById("goles_local_" + partido_actual + "_jornada_" + jornada_actual);
	var jornada_goles_visitante = document.getElementById("goles_visitante_" + partido_actual + "_jornada_" + jornada_actual);
	
	var id_equipo_local_1 = document.getElementById("selector_local_equipo_" + selector_local.value);
	var id_equipo_local_2 = document.getElementById("selector_visitante_equipo_" + selector_local.value);
	var id_equipo_visitante_1 = document.getElementById("selector_visitante_equipo_" + selector_visitante.value);
	var id_equipo_visitante_2 = document.getElementById("selector_local_equipo_" + selector_visitante.value);
	
	/* Aumentamos en 1 el partido si aún no es 12 */
	if (partido_actual < 12)
	{
		/* Modificamos el marcador */
		jornada_goles_local.innerText = equipo_local_goles;
		jornada_goles_visitante.innerText = equipo_visitante_goles;
		
		/* Modificamos los equipos */
		jornada_equipo_local.innerHTML = equipo_local;
		jornada_equipo_visitante.innerHTML = equipo_visitante;
		
		/* Se puso un partido, por lo que aumenta en 1 */
		partido_actual = partido_actual + 1;
		
		/* Se ocultan los equipos utilizados */
		if (id_equipo_local_1.style.display === "block")
		{
			id_equipo_local_1.style.display = "none";
		}
		if (id_equipo_local_2.style.display === "block")
		{
			id_equipo_local_2.style.display = "none";
		}
		if (id_equipo_visitante_1.style.display === "block")
		{
			id_equipo_visitante_1.style.display = "none";
		}
		if (id_equipo_visitante_2.style.display === "block")
		{
			id_equipo_visitante_2.style.display = "none";
		}
		
		/* Restauramos la selección de equipos */
		document.getElementById("selector_local_nulo").selected = "true";
		document.getElementById("selector_visitante_nulo").selected = "true";
		
		if (partido_actual == 12)
		{
			/* Bucle que va avanzando por todos los equipos */
			for (i = 1; i < 22; i++)
			{
				var id_equipo_local_dinamica = document.getElementById("selector_local_equipo_" + i);
				var id_equipo_visitante_dinamica = document.getElementById("selector_visitante_equipo_" + i);
				
				/* Mostrar de nuevo todos los equipos */
				if (id_equipo_local_dinamica.style.display === "none")
				{
					id_equipo_local_dinamica.style.display = "block";
				}
				if (id_equipo_visitante_dinamica.style.display === "none")
				{
					id_equipo_visitante_dinamica.style.display = "block";
				}
			}
			
			/* Si partido_actual queda en 12, se reinicia y se aumenta la jornada */
			partido_actual = 1;
			jornada_actual = jornada_actual + 1;
		}
	}
	
	if (jornada_actual == 42)
	{
		/* Mostrar mensaje de evitar repetición */
		if (error_tope.style.display === "none")
		{
			error_tope.style.display = "block";
		}
		else
		{
			error_tope.style.display = "block";
		}
		
		/* Ocultamos el botón para jugar el partido */
		if (jugar_partido.style.display === "block")
		{
			jugar_partido.style.display = "none";
		}
		else
		{
			jugar_partido.style.display = "none";
		}
	}
	else
	{
		/* Quitar mensaje de error */
		if (error_tope.style.display === "block")
		{
			error_tope.style.display = "none";
		}
		else
		{
			error_tope.style.display = "none";
		}
		
		/* Poner botón de jugar partido */
		if (jugar_partido.style.display === "none")
		{
			jugar_partido.style.display = "block";
		}
		else
		{
			jugar_partido.style.display = "block";
		}
	}
}