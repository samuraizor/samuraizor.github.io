var nomeL;
var capturado;
var nomesArr = [];
var tipoL,tiposArr = [];
var numeroL,numeroA, numerosArr = [];
var descricaoArr = [];
var tipos; 
var imgArr = [];
var aux;
var table;
var hpArr = [];
var atkArr = [];
var defArr = [];
var spaArr = [];
var speArr = [];
var spdArr = [];
var totalArr = [];
var xL;
var iniciado = false;
var mobile;
		
function escreveDexMain(n){
				var content
					content = "<div class='page-header name'>";
					content = content + "<h1>";
					content = content + nomesArr[n-1];
					content = content + "</h1>";
					content = content + "</div>";
					content = content + "<div class='descricao'>";
					content = content + "<div class='page-header name'>";
					content = content + "<h3>DESCRIÇÃO</h3></div>";
					content = content + descricaoArr[n-1];
					content = content + "</div>";
				$(".main").html(content)
}			
function escreveImgQuick(n){
	var content
	content = ' <img class="catch-'+xL[n-1].getElementsByTagName("CATCH")[0].childNodes[0].nodeValue+'" src="include/img/'+imgArr[n-1]+'.png" alt="'+nomesArr[n-1]+'">'
	$(".thumbnail").html(content)					
}
function escreveTipo(n){		
	var content=""
	tipos = String(tiposArr[n-1]).split("-");
	if (tipos.length > 1){
		for (i=0;i<tipos.length;i++){
			content=content+"<div class='parte-2-" + 2/(tipos.length) + " type badge class-"+tipos[i]+"'>";
			content=content+tipos[i];
			content=content+"</div>";
		}
	}else{		
		content=content+"<div class='parte-2-2 type badge class-"+tipos[0]+"'>";
		content=content+tipos[0];
		content=content+"</div>";
	}
	content = content+"<div class='escreveStats'></div>"
	$(".quick-info").html(content)
	
}		
function escreveLista(){
			if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			//xmlhttp.open("GET","https://dl.dropboxusercontent.com/u/16231162/pokedex/smartdex.xml",false);
			xmlhttp.open("GET","smartdex.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML; 
			xL=xmlDoc.getElementsByTagName("POKEMON");
			document.write("<table id='pokedex' class='table table-striped table-bordered'><thead><th>Numero</th><th>Nome</th></thead><tbody>")
			for (i=0;i<xL.length;i++)
			  { 			  
					numeroL = xL[i].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue													
					tipoL = xL[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue
					tiposL =  String(tipoL).split("-")
					nomeL = xL[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue
					capturado = xL[i].getElementsByTagName("CATCH")[0].childNodes[0].nodeValue
					document.write("<tr class='lista-"+numeroL+"'onClick='javascript:pokemon("+numeroL+")'><td>"+numeroL+"</td><td>"+nomeL+"<div class='catch "+capturado+"' rel='"+numeroL+"'> </div></td></tr>")
					//carregaPokes
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
			document.write("</tbody></table>")
				inicializadores();
}
function pokemon(n){
	start(n);	
	if (mobile)
	{
		alternaDiv();
	}
}
function escreveRightInfo(n){
	var content;
	content = "<div class='page-header name'>"
	content = content + "<h1>Resumo</h1>"
	content = content + "</div>"
	content = content + "<center>"
	content = content + "<div class='thumbnail thumb '></div></center>"
		if (mobile)
		{	
			$(".main").html($(".main").html()+content);
		}else{
			$(".right-info").html(content);
		}

}
function escreveStat(n){
  var content = "<div class='space-32'></div>"
  content = content + "<table  data-role='table'  class='stat table table-condensed ui-responsive'><thead><tr><th>HP</th><th>Atk</th><th>Def</th><th>SPA</th><th>SPD</th><th>SPE</th><th>Total</th></tr></thead>"
  content = content + "<tbody>"
  content = content + "<tr><td>"+hpArr[n-1]+"</td><td>"+atkArr[n-1]+"</td><td>"+defArr[n-1]+"</td><td>"+spaArr[n-1]+"</td><td>"+spdArr[n-1]+"</td><td>"+speArr[n-1]+"</td><td>"+totalArr[n-1]+"</td>"
  content = content + "</tbody></table>"
  $(".escreveStats").html(content)
}
function start(n){	
		document.title=nomesArr[n-1];
		escreveDexMain(n)
		escreveRightInfo(n)
		escreveImgQuick(n)
		escreveTipo(n)
		escreveStat(n)
		$(".info").removeClass("info")
		$(".lista-"+n).addClass("info")		
}
function captura(id){
	xL[id-1].getElementsByTagName("CATCH")[0].childNodes[0].nodeValue="TRUE";
}
			
function inicializadores(){
	//INICIALIZADORES
	if (!(iniciado))
	{
		table = $('#pokedex').DataTable(
				{
					"bPaginate": false,
					"bScrollInfinite": true,
					"bScrollCollapse": true,
					"sScrollY": "80%",
					"bInfo": false,
					"language": {
						"lengthMenu": "Mostrando _MENU_ Pokemon por página ",
						"zeroRecords": "Sua busca não retornou resultados",
						"search": "Procurar:  ",
						"infoEmpty": "Nenhum Pokemon foi encontrado.",
						"infoFiltered": "(filtrado entre _MAX_ pokemons cadastrados)",					
						"processing":     "Processando...",				
					}
				});
		$(".catch").click(function(){
			captura($(this).attr("rel"))
		});		
		iniciado = true;
	}
			
			
}			
			
			

function testeNavegador() { 
	 if(!(navigator.userAgent.indexOf("Chrome") != -1) & !(navigator.userAgent.indexOf("Firefox") != -1 ))
	{
		msg='Necessário utilizar <a href="https://www.google.com/chrome/">Google Chrome</a> ou <a href="https://www.mozilla.org/pt-BR/firefox/new/">Firefox</a> para acessar a DRIU\'s DEX';
		$("#msg").html(msg)
	}else{
		$("#msg").hide();
		escreveLista();
	}
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			mobile=true;
	}
	
}


function iniciar(){
	testeNavegador();
}
function alternaDiv(){
	$(".menu").hide();
}