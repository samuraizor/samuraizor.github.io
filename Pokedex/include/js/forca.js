var nomeL;
var nomesArr = [];
var tipoL,tiposArr = [];
var numeroL,numeroA, numerosArr = [];
var descricaoArr = [];
var tipos; 
var nerro=0;
var imgArr = [];
var img;
var aux;
var table;
var hpArr = [];
var atkArr = [];
var defArr = [];
var spaArr = [];
var speArr = [];
var spdArr = [];
var totalArr = [];
var result;		
var resp = [];
var tamanho;
function CarregaDex(){
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			//xmlhttp.open("GET","../smartdex.xml",false);
			xmlhttp.open("GET","http://samuraizor.github.io/Pokedex/smartdex.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML; 
			var xL=xmlDoc.getElementsByTagName("POKEMON");			
			for (i=0;i<xL.length;i++)
			  { 			  
					numeroL = xL[i].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue													
					tipoL = xL[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue
					tiposL =  String(tipoL).split("-")
					nomeL = xL[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue					
					nomesArr[i] = xL[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue
					tiposArr[i] = xL[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue
					numerosArr[i] = xL[i].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue
					descricaoArr[i] = xL[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue
					aux = "000"+numerosArr[i]
					imgArr[i] =  aux.substring((aux.length)-3,aux.length)
					hpArr[i] = xL[i].getElementsByTagName("HP")[0].childNodes[0].nodeValue
					atkArr[i] = xL[i].getElementsByTagName("ATK")[0].childNodes[0].nodeValue
					defArr[i] = xL[i].getElementsByTagName("DEF")[0].childNodes[0].nodeValue
					spaArr[i] = xL[i].getElementsByTagName("SPA")[0].childNodes[0].nodeValue
					spdArr[i] = xL[i].getElementsByTagName("SPD")[0].childNodes[0].nodeValue
					speArr[i] = xL[i].getElementsByTagName("SPE")[0].childNodes[0].nodeValue
					totalArr[i] = xL[i].getElementsByTagName("TOTAL")[0].childNodes[0].nodeValue
					
				}
			
			

}
function start(){
var random
	random = Math.floor((Math.random() * 151) + 1);
	result = nomesArr[random-1]
	img = imgArr[random-1]
	$(".pokemon-img").attr("src","../include/img/"+img+".png")
	tamanho = result.length
	criaEspacos(tamanho)
	random = 0
}

function criaEspacos(qtd){
	var content = ""
	for (j=0;j<qtd;j++){
		content = content + "<div class='letra "+j+"'></div>"
	}
	
	$(".main").html(content)
}

			
			
function op(letra){
var certo
var respfim
certo = false
	for (j=0;j<tamanho;j++){
		if (result[j] == letra){
			$("."+j).html(letra)
				resp[j] = letra
				respfim = String(resp)
				respfim = respfim.replace(/,/g, '');

				if (String(respfim)==String(result))
				{						
					acertou();
				}				
			certo = true
		}
	}
	if (!certo){
		errouLetra(letra)
	}
}

function acertou(){
	$(".pokemon-img").removeClass("gray");
	alert("Ganhou!");
}

function errou(){
	alert("Perdeu!");
	start();
}
function errouLetra(letra){
	nerro++;
$(".erros").html(nerro);
	if (nerro > 7)
			{
				errou();
			}	

}
