/*extras*/
function escreveImg(){
			var a, b, content
			for (i=592;i<750;i++){
				a = "000"+String(i)
				b = a.substring((a.length)-3,a.length)			
				document.write('<a id="'+b+'" style="float:left;" onClick="javascript:destroy('+b+')"href="http://assets22.pokemon.com/assets/cms2/img/pokedex/full/'+b+'.png" download="http://assets22.pokemon.com/assets/cms2/img/pokedex/full/'+b+'.png">click</a><br/>')
			}							
		}			
function destroy(id){
	$("#"+String(id)).remove();
}
/* fim extras */
function getPokeInfo2(n){
if (window.XMLHttpRequest)
			  {// code for IE7+, Firefox, Chrome, Opera, Safari
				xmlhttp=new XMLHttpRequest();
			  }
			else
			  {// code for IE6, IE5
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			  }
			xmlhttp.open("GET","https://dl.dropboxusercontent.com/u/16231162/pokedex/smartdex.xml",false);
			xmlhttp.send();
			xmlDoc=xmlhttp.responseXML; 
			var x=xmlDoc.getElementsByTagName("POKEMON");
			
			for (i=0;i<x.length;i++)
			  { 			  

				numeroA = x[i].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue
				
				if (String(numeroA) == String(n)) {
			
					numero = x[i].getElementsByTagName("NUMBER")[0].childNodes[0].nodeValue
					aux = "000"+numero
					img = aux.substring((aux.length)-3,aux.length)
					tipo = x[i].getElementsByTagName("TIPO")[0].childNodes[0].nodeValue
					tipos =  String(tipo).split("-")
					nome = x[i].getElementsByTagName("NOME")[0].childNodes[0].nodeValue
					descricao = x[i].getElementsByTagName("DESCRICAO")[0].childNodes[0].nodeValue
				}
				
			  }
			  if (typeof(nome) == 'undefined'){
					alert('Erro')
					history.go(-1)
				}else{
					start(n)
				}
			
			
}


