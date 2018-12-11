var links = []
var tricks = []
var vars = []
var varsname = []
var contVars=0
function LimparVars(){
	localStorage.clear()
	links = []
	tricks = []
	vars = []
	varsname = []
	var contVars=0
	atualizaTela();
}
function atualizaTela(){
	$("#link").html("")
	$("#trick").html("")
	for (i = 0; i < vars.length; i++) {
			splita = vars[i].split("-")
			$("#vars"+splita[0]).html("")
		}
	$("#varslist").html("")
	getCookies();
	console.log(tricks)
	console.log(links)
	console.log(varsname)
	console.log(vars)
	escreveLinks();
	escreveTricks();
	escreveVarsName();
	escreveVars();

}
function removeLinks(id){
	links.splice(id,1)
	setCookie("links",links)
};
function removeTricks(id){
	tricks.splice(id,1)
	setCookie("tricks",tricks)
};
function removeVars(id){
	vars.splice(id,1)
	setCookie("vars",vars)
};

function escreveLinks(){
	for (i = 0; i < links.length; i++) {
			$("#link").html($("#link").html() + "<div class='col-md-12 links'><a title='Remover' href='javascript:removeLinks("+i+")'> "+links[i]+"</a></div>");
		}
}
function escreveTricks(){
	for (i = 0; i < tricks.length; i++) {
			$("#trick").html($("#trick").html() + "<div class='col-md-12 tricks'><a title='Remover' href='javascript:removeTricks("+i+")'> "+tricks[i]+"</a></div>");
		}
}
function escreveVars(){
	var splita
		for (i = 0; i < vars.length; i++) {
			splita = vars[i].split("-")
			$("#vars"+splita[0]).html($("#vars"+splita[0]).html() + "<div class='col-md-12 bvar vars"+splita[0]+"'><a title='Remover' href='javascript:removeVars("+splita[0]+","+i+")'> "+splita[1]+"</a></div>");
		}
}
function escreveVarsName(){
	for (i = 0; i < varsname.length; i++) {
			$("#varslist").html($("#varslist").html() + "<div class='col-md-3 box'><h1 class='col-md-7 col-md-offset-5 "+varsname[i]+"'>"+varsname[i]+"</h1><div class='col-md-7 col-md-offset-5'><a href='javascript:addVars("+i+")' class='btn btn-success'>Adicionar Link</a></div><div class='col-md-12 inside-box' id='vars"+i+"'></div></div>");
		}
}
function getCookies(){
	for (var i = 0; i < localStorage.length; i++){
		if (localStorage.key(i).includes("links")){
			aux = (localStorage.getItem(localStorage.key(i)))
			if (aux != ""){
				links = aux.split(",")
			}
		}
		if (localStorage.key(i).includes("tricks")){
			aux = (localStorage.getItem(localStorage.key(i)))
			if (aux != ""){
				tricks = aux.split(",")
			}
		}
		if (localStorage.key(i).includes("varsvalues")){
			aux = (localStorage.getItem(localStorage.key(i)))
			if (aux != ""){
				vars = aux.split(",")
			}
		}
		if (localStorage.key(i).includes("varsname")){
			aux = (localStorage.getItem(localStorage.key(i)))
			if (aux != ""){
				varsname = aux.split(",")
				contVars = varsname.length
			}
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

function setCookieLocal(c_name, value) {
    return localStorage.setItem(c_name, value);
}

function addTrick() {
  var trick = prompt("Please enter your trick name:","")
	if (trick != ""){
		tricks.push(trick)
	}else{
		alert("Incorrect values")
	}
	setCookie("tricks",tricks)
}

function addLink() {
  var trick = prompt("Please enter your link name:","")
	if (trick != ""){
		links.push(trick)
	}else{
		alert("Incorrect values")
	}
	setCookie("links",links)

}
function addVars(id) {
  var trick = prompt("Please enter your variaton name:","")
	if (trick != ""){
		vars.push(id+"-"+trick)
	}else{
		alert("Incorrect values")
	}
	setCookie("varsvalues",vars)

}
function addNewVar(){
	var trick = prompt ("Please enter the name of variation:","")
	if (trick != ""){
		varsname.push(trick)
	}else{
		alert("Incorrect values")
	}
	setCookie("varsname",varsname)
}
function getRandom(type,id){
	if (type=="links"){
		alert(links[Math.floor((Math.random() * links.length-1) + 1)]);
	}else if (type=="tricks"){
		 alert(tricks[Math.floor((Math.random() * tricks.length-1) + 1)]);
	}else if (type=="vars"){
		var randAux = []
		for (i = 0; i < vars.length; i++) {
			splita = vars[i].split("-")
			if (splita[0] == id){
				randAux.push(splita[1])
			}
		}
			alert(randAux[Math.floor((Math.random() * randAux.length-1) + 1)]);
	}
	
}