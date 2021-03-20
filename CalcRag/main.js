var dex=1, luk=3, str=5
var pgD=0, pgL=0, pgS=0
var dexMax=false, strMax=false, lukMax=false;
function btnCalcLvl(){
	var level = 0;
	level = $("#level").val();
	getFullPontos(level)
}

function btnCalcPts(){
	var pontos = 0;
	pontos = $("#pontos").val();
	distribuiRanged(pontos)
}


function verificaPontos(lvl){
	if (lvl<100){
		return Math.ceil(lvl/10)+1
	}else{
		return Math.ceil((lvl-100)/5)*4+12
	}
}
function pontosLevel(lvl){
	if (lvl<100){
		return Math.ceil(lvl/5)+2
	}else{
		return Math.ceil((lvl-100)/10)+22
	}
}

function getFullPontos(level){
	var pontos=88;
	for(i=2;i<=level;i++){		
		pontos = pontos + pontosLevel(i);
	}
	console.log("Pontos Total: " + pontos)	
	distribuiRanged(pontos)
}

function distribuiRanged(pontos){
	var aux;
	aux = pontos;
	while (pontos>=aux)	{
		console.log("Sobrou +" + aux + " pontos.")
		var nDex=0,nLuk=0, nStr=0;
		nDex=verificaPontos(dex+1)
		nLuk = verificaPontos(luk+1) + verificaPontos(luk+2) + verificaPontos(luk+3)
		nStr = verificaPontos(str+1) + verificaPontos(str+2) + verificaPontos(str+3) + verificaPontos(str+4) +verificaPontos(str+5)
		if (nDex <= nLuk && !dexMax){
			if (nDex<=aux){
				addDex();
				aux = aux - nDex;
				pgD = pgD + nDex;
			}else{break;}
		}else if(nLuk <=nStr && !lukMax) {
			if (nLuk<=aux){
				addLuk();
				aux = aux - nLuk;
				pgL = pgL + nLuk;
			}else{break;}
		}else if (!strMax){
			if (nStr<=aux){
				addStr();
				aux = aux - nStr;
				pgS = pgS + nStr;
			}else{break;}
		}else{
			break;
		}
	}
	
	Escreve();
	
}

function addDex(){
	dex++;
	if (dex>=125){dexMax=true}
}
function addLuk(){
	luk+=3;
	if (luk>=122){lukMax=true}
}
function addStr(){
	str+=5;
	if (str>=120){strMax=true}
}

function Escreve(){
	$(".str").html(str);
	$(".dex").html(dex);
	$(".luk").html(luk);
	console.log('Pontos gastos')
	console.log('Dex: '+pgD)
	console.log('Luk: '+pgL)
	console.log('Str: '+pgS);
dex=1;
luk=3;
str=5;
pgD=0;
pgL=0;
pgS=0;
dexMax=false;
strMax=false;
lukMax=false;
}
