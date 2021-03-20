var dex=1, luk=1, str=1
var pgD=0, pgL=0, pgS=0

function verificaPontos(lvl){
	//=SE(P4<=100;ARREDONDAR.PARA.CIMA(P4/10;0)+1;ARREDONDAR.PARA.CIMA((P4-100)/5;0)*4+12)
	if (lvl<100){
		return Math.ceil(lvl/10)+1
	}else{
		return Math.ceil((lvl-100)/5)*4+12
	}
}
function pontosLevel(lvl){
	//=SE(lvl<100;lvl/5+2;round((lvl-100)/10)+22)
	if (lvl<100){
		return Math.ceil(lvl/5)+2
	}else{
		return Math.ceil((lvl-100)/10)+22
	}
}

function getFullPontos(level){
	var pontos=100;
	for(i=2;i<=level;i++){		
		pontos = pontos + pontosLevel(i);
		//console.log("Level "+i+": "+pontos+" - SOMOU:"+pontosLevel(i))
	}
	console.log("Pontos Total: " + pontos)	
	distribuiRanged(pontos)
}

function distribuiRanged(pontos){
	var aux;
	aux = pontos;
	//1 dex = 3 luk = 5 str
	while (pontos>=aux)	{
		console.log("Sobrou +" + aux + " pontos.")
		var nDex=0,nLuk=0, nStr=0;
		nDex=verificaPontos(dex+1)
		nLuk = verificaPontos(luk+1) + verificaPontos(luk+2) + verificaPontos(luk+3)
		nStr = verificaPontos(str+1) + verificaPontos(str+2) + verificaPontos(str+3) + verificaPontos(str+4) +verificaPontos(str+5)
		if (nDex <= nLuk){
			if (nDex<=aux){
				addDex();
				aux = aux - nDex;
				pgD = pgD + nDex;
			}else{break;}
		}else if(nLuk <=nStr) {
			if (nLuk<=aux){
				addLuk();
				aux = aux - nLuk;
				pgL = pgL + nLuk;
			}else{break;}
		}else{
			if (nStr<=aux){
				addStr();
				aux = aux - nStr;
				pgS = pgS + nStr;
			}else{break;}
		}
	}
	
	Escreve();
	
}

function addDex(){dex++;}
function addLuk(){luk+=3;}
function addStr(){str+=5;}

function Escreve(){
	console.log('Dex: '+dex+' Luk: '+luk+' Str: '+str);
	console.log('Pontos gastos')
	console.log('Dex: '+pgD)
	console.log('Luk: '+pgL)
	console.log('Str: '+pgS);
}
