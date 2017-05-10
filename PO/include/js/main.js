var n_rest, n_var, linhas=[], algoritmos = 0, cabecalho = [], pos = 0
$( document ).ready(function (){$("#previa").hide();})
function enviaVars(){
	var aux = "<h3>Entre com a sua Função:</h3>F(x) = "
	
	n_rest = parseInt($("#rest_num").val())
	n_var = parseInt($("#var_num").val())
	if (n_var > 0 && n_rest > 0){
		col_result = parseInt(n_rest) + parseInt(n_var) + 1
		for(i=1;i<=n_var;i++){
			if (i>1){
					aux = aux + " + "
				}
				aux = aux +" <input class='num linha-0_coluna-"+i+"' type='number' min='1' name='"+i+"'> " + "x"+(i)
		}
		aux = aux + "</br> <h3> Entre com as Restrições </h3>"
		for(j=1;j<=n_rest;j++){
			for(i=1;i<=n_var;i++){
				if (i>1){
					aux = aux + " + "
				}
				aux = aux +" <input class='num linha-"+j+"_coluna-"+i+"' type='number' min='1' name='"+i+"'> " + "x"+(i)
			}
			aux = aux + " <= <input class='num linha-"+j+"_coluna-"+col_result+"' /></br> "
		}	
			
			aux = aux + "</br><a href='javascript:processa()' class='btn btn-success'>Processar</a>"
			$("#form-funcao").show()
			$(".funcao_in").html(aux)
			$("#form-inicial").hide()
			//console.log(aux)
	}else{
		alert("Sua função deve conter ao menos 1 variavel e 1 restrição.")
		reiniciar()
	}
		
			

	
}

function processa(){
	var valor
	n_colunas =  n_rest + n_var + 2
	n_linhas =	n_rest + 1	
	//console.log("linhas:" + n_linhas + " Colunas:"+n_colunas)
	for (i=0;i<n_linhas;i++){	
		var colunas = []
		for (j=0;j<n_colunas;j++){
				if (i==0 && j==0){
					colunas[j] = 1
					continue
				}
				if (j==0 && i>0){
					colunas[j] = 0
					continue
				}
			valor = $(".linha-"+i+"_coluna-"+j).val()
			//console.info(valor)
			if (valor){
				colunas[j] = valor
			}else if(n_var+i == j){
					colunas[j] = 1
				}else{
					colunas[j] = 0
				}
			//console.warn(n_var+i)					
		linhas[i] = colunas
		}
	}
	//console.log(linhas)
	naoNegatividade()
	escreveHeader()
	negativaFo()
	escreveAlgoritmo()
	resultado()
}


function escreveAlgoritmo(){
	
	algoritmos++
	var result = "<h5>Algoritmo: "+algoritmos+"</h5><table class='table'>"
	result = result + "<thead><tr><td>Z</td>"
	cabecalho[pos] = " de lucro, fabricando: </br>"
	pos++
		for (i=0;i<n_var;i++){
			v = i+1
			result = result + "<td>X"+v+"</td>"
			cabecalho[pos] = " vezes o produto X"+v
			pos++
		}
		for (i=0;i<n_rest;i++){
			v = i+1
			result = result + "<td>XF"+v+"</td>"
			cabecalho[pos] = ""
			pos++
		}
	result = result + "<td>Resultado</td></tr></thead>"
	cabecalho[pos] = "Resultado"
	pos++
	
	for(i=0;i<linhas.length;i++){
		result = result + "<tr>"
		for(j=0;j<linhas[i].length;j++){
			result = result + "<td>" + parseFloat(linhas[i][j]).toFixed(2)
		}
		result = result + "</tr>"
	}
	result = result + "</table>"
	if (result!=""){
		$(".algoritmo").html($(".algoritmo").html()+result)
	}
}
function negativaFo(){
	for (i=1;i<linhas[0].length;i++){
		if (linhas[0][i] != 0){
			linhas[0][i] = linhas[0][i]*-1
		}		
	}
	//console.log(linhas)
}
function naoNegatividade(){
	var aux
	aux = linhas[0].length - n_rest - 1
	for (j=0;j<linhas.length;j++){
		for (i=1;i<aux;i++){
			if (linhas[j][i] < 0){
				alert("Conforme regra de não negatividade.\nAs variaveis não podem ser menor que 0.")
				reiniciar()
			}		
		}
	}
}
function escreveHeader(){
	var aux,result = "<h3>Função: </h3><p>Max(z) = "
	aux = linhas[0].length - n_rest - 1
	for (i=1;i<aux;i++){
		result = result + linhas[0][i] +"X"+i
		if (i == (aux-1)){
			
		}else{
			result = result + " + "
		}
	}
	result = result + "</p>"
	result = result + "<h3>Restrições:</h3>"
	for (i=1;i<linhas.length;i++){
		result = result + "<p>"
		for(j=1;j<aux;j++){
			result = result + linhas[i][j] + "X"+j
			if (j == (aux-1)){
			
			}else{
				result = result + " + "
			}
		}
		ultimo = linhas[i].length-1
		result = result + " = "+linhas[i][ultimo]
	}
	$("#previa").show();
	$(".fo").html(result)
}
function reiniciar(){
	location.reload()
}

function resultado(){
	entrada = 0
	coluna = 0
	for(j=0;j<linhas[0].length;j++){
	//console.log("variavel = "+entrada+"Coluna = "+linhas[0][j])
		if (entrada > linhas[0][j]){
			entrada = linhas[0][j]
			coluna = j
		}
	}
	if (entrada>=0){
		relat()
	}else{
		AchaPivo(coluna)
	}
}
function AchaPivo(idColuna){
//console.log(idColuna)	
	aux = 0
	elementPivo = 0
	posPivo = 0
	ultCol = linhas[0].length-1
	for(i=1;i<linhas.length;i++){
		aux = linhas[i][ultCol] / linhas[i][idColuna]
		if (aux > 0 && elementPivo == 0){
			elementPivo = aux
			posPivo = i
		}else if (aux > 0 && aux < elementPivo){
			elementPivo = aux
			posPivo = i
		}		
	}
	elementPivo = linhas[posPivo][idColuna]
	for (i=0;i<linhas[posPivo].length;i++){
		linhas[posPivo][i] = (linhas[posPivo][i])/elementPivo		
	}
	calculaLinhas(idColuna,posPivo)
}

function calculaLinhas(ColunaIn,LinhaPivoId){
	
	for(i=0;i<linhas.length;i++){
		if(i!=LinhaPivoId){
			entrada = (-1*parseFloat(linhas[i][ColunaIn]))
			for(j=0;j<linhas[i].length;j++){	
				linhas[i][j] = (parseFloat(linhas[LinhaPivoId][j])*(entrada)+parseFloat(linhas[i][j]))
			}
		}
	}
	escreveAlgoritmo()
	resultado()
}
function relat(){
	basicas = ""
	nBasicas = ""
	idLinha = 0 
	ultCol = linhas[0].length-1

	for(i=0;i<linhas[0].length-1;i++){
		tester = 0		
		for(j=0;j<linhas.length;j++){
			if (linhas[j][i] == 1){
				tester++
				idLinha = j
			}	
			
		}
		
		if (tester == 1) {		
			if (cabecalho[i]!=""){
					basicas = basicas  +"<b>"+ linhas[idLinha][ultCol]+"</b>"+ cabecalho[i] + "</br>"
				}
			}else{
			//nBasicas = nBasicas + cabecalho[i] + "</br>"
			}
		
	}

	$(".basicas").html(basicas)
	$(".nbasicas").html(nBasicas)
	$('#myModalRelat').modal('show');
}