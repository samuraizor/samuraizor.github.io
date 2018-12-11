var tricksCont = 0;
var linksCont = 0;
var linksVar1 = 0;
var linksVar2 = 0;
var linksVar3 = 0;
var linksVar4 = 0;
function LimparVars(){
	localStorage.clear()
}
function iniciar(){
	for (var i = 0; i < localStorage.length; i++){
			console.log(localStorage.key(i));
			if (localStorage.key(i).includes("link")){linksCont++}
			if (localStorage.key(i).includes("trick")){tricksCont++}
	}
	console.log(tricksCont);
	console.log(linksCont);
	atualizaTela();
}
function atualizaTela(){
	
	$("#links").html("")
	$("#tricks").html("")
	$("#var1").html("")
	$("#var2").html("")
	$("#var3").html("")
	$("#var4").html("")
	$(".varname1").html("Var1")
	$(".varname2").html("Var2")
	$(".varname3").html("Var3")
	$(".varname4").html("Var4")
	for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.key(i) + "=[" + localStorage.getItem(localStorage.key(i)) + "]");
		if (localStorage.key(i).includes("link")){
			escreveLink(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("trick")){
			escreveTrick(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("var1")){
			escreveVar1(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("var2")){
			escreveVar2(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("var3")){
			escreveVar3(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("var4")){
			escreveVar4(localStorage.key(i),localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("varname1")){
			$(".varname1").html(localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("varname2")){
			$(".varname2").html(localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("varname3")){
			$(".varname3").html(localStorage.getItem(localStorage.key(i)))
		}
		if (localStorage.key(i).includes("varname4")){
			$(".varname4").html(localStorage.getItem(localStorage.key(i)))
		}
		
	}	
	
}


function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
	setCookieLocal(cname,cvalue);
	atualizaTela();
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
	
    return getCookieLocal(cname);
}

function getCookieLocal(c_name) {
    return localStorage.getItem(c_name);
}

function setCookieLocal(c_name, value) {
    return localStorage.setItem(c_name, value);
}
function addTrick(truque) {
  var trick = prompt("Please enter your trick name:","")
	if (trick != ""){
		setCookie("trick"+tricksCont,trick)
		tricksCont++;
	}else{
		alert("Incorrect values")
	}

}
function addLink(truque) {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		setCookie("link"+linksCont,trick)
		linksCont++;
	}else{
		alert("Incorrect values")
	}

}
function addVar1(truque) {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		setCookie("var1"+linksVar1,trick)
		linksVar1++;
	}else{
		alert("Incorrect values")
	}

}
function addVar2(truque) {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		setCookie("var2"+linksVar2,trick)
		linksVar2++;
	}else{
		alert("Incorrect values")
	}

}
function addVar3(truque) {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		setCookie("var3"+linksVar3,trick)
		linksVar3++;
	}else{
		alert("Incorrect values")
	}

}
function addVar4(truque) {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		setCookie("var4"+linksVar4,trick)
		linksVar4++;
	}else{
		alert("Incorrect values")
	}

}
function escreveLink(id, conteudo){
	$("#links").html($("#links").html() + "<div class='col-md-3 col-md-offset-1 link' id="+id+">"+conteudo+"</div>");
}
function escreveTrick(id, conteudo){
	$("#tricks").html($("#tricks").html() + "<div class='col-md-3 col-md-offset-1 trick' id="+id+">"+conteudo+"</div>");
}
function escreveVar1(id, conteudo){
	$("#var1").html($("#var1").html() + "<div class='col-md-3 col-md-offset-1 var1' id="+id+">"+conteudo+"</div>");
}
function escreveVar2(id, conteudo){
	$("#var2").html($("#var2").html() + "<div class='col-md-3 col-md-offset-1 var2' id="+id+">"+conteudo+"</div>");
}
function escreveVar3(id, conteudo){
	$("#var3").html($("#var3").html() + "<div class='col-md-3 col-md-offset-1 var3' id="+id+">"+conteudo+"</div>");
}
function escreveVar4(id, conteudo){
	$("#var4").html($("#var4").html() + "<div class='col-md-3 col-md-offset-1 var4' id="+id+">"+conteudo+"</div>");
}
function renameVar(numero){
	var nome = prompt ("Insert the var name:")
	if (nome != ""){
		setCookie("varname"+numero,nome)
		atualizaTela();
	}else{
		alert("Incorrect values")
	}

	
	
}
