function activarEfectoFadeIn(classElement){
    var elementos = Array.from(document.getElementsByClassName(classElement));
    for(var i = 0; i < elementos.length; i++){
        elementos[i].className = "fadeIn";
    }
}


function getJokesRandomResponse(){
    var req;

    if (window.XMLHttpRequest) { // Mozilla, Safari, ...
        req = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE
        req = new ActiveXObject("Microsoft.XMLHTTP");
    }

    req.open('GET', 'http://api.icndb.com/jokes/random', true);
    req.send(null);

    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if(req.status == 200){
                document.getElementById("sectionMsj1").innerHTML = req.responseText;
            }else{
                document.getElementById("sectionMsj1").className += " contentError";
            }
        }
    };
}

/*
config object
config = {url: , parametros: }
*/



// Con Promise
function ajaxCall(config){
    return new Promise(function(resolve, reject){
        var req;
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            req = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        req.onreadystatechange = function () {
            if (req.readyState == 4) {
                if(req.status == 200){
                    resolve(req.response);
                }else{
                    reject(new Error(req.statusText));
                }
            }
        };

        req.onerror = function(){
			reject(new Error(this.statusText));
		};
		
		//armar url
		var url = getUrlConParam(config);

        req.open('GET', url , true);
		req.send(null);
		
    })
}

function getUrlConParam(config){
	var url = config.url;
	for(let i= 0; i <config.param.length; i++){
		url += "?"
		url += config.param[i].key;
		url += "="
		url += config.param[i].value;
		if (i != (config.param.length -1)){
			url += "&"
		}
	}
	return url;	
}

function mostarEnElement(reqText, sectionMsj){
    document.getElementById(sectionMsj).innerHTML = reqText;
}

function indicarErrorEnCampo(sectionMsj){
    document.getElementById(sectionMsj).className += " contentError";
}

function getJokesRandomResponseReutilizable(sectionMsj){
	var config = {url: "http://api.icndb.com/jokes/random"};
	
	ajaxCall(config).then(function(value){
							mostarEnElement(value, sectionMsj);
						}, function(reason){
							console.log("error ", reason);
							indicarErrorEnCampo(sectionMsj);
						})
}


/*
https://api.github.com/search/repositories?q=JavaScript
9. Use the function created in exercise 6 to get the response from 
https://api.github.com/search/repositories with parameters data "q = 'JavaScript'". 
First log the service response in Chrome's console to analyze data (see provided link on Chrome console), 
then display repository's full_name as a list in the right side of the screen. 
The ul element must be used to list the repositories data.

10. Add an input type="text", and reuse the code for exercise 9, 
so the user can perform search for any repository.
*/
function getGitRepositories(sectionMsj, tipoParam, parametro){
	var config = {url: "https://api.github.com/search/repositories",
				  param: []
				};
	if(parametro)
		config.param.push({"key": tipoParam, "value": parametro});
    //var req = ajaxCall(config);
	ajaxCall(config).then(function(value){
						//mostarEnElement(value, sectionMsj);
						agregarElementos(value, sectionMsj);
					}, function(reason){
						console.log("error ", reason);
						indicarErrorEnCampo(sectionMsj);
					})

}

//A diferencia de la funcion anterior se le pasa el id del campo input para conseguir el parametro
function getGitRepositoriesVar(sectionMsj, tipoParam, inputField){
	let paramValue = document.getElementById(inputField).value;
	getGitRepositories(sectionMsj, tipoParam, paramValue);
}

//Lista full_name - Recibe el req con formato JSON
function agregarElementos(value, idSection){ 
	var lista=document.getElementById(idSection); 
	var array = JSON.parse(value).items;
        array.forEach(function(data,index){
            var linew= document.createElement("li");    
            var contenido = document.createTextNode(data.full_name);
            lista.appendChild(linew);
            linew.appendChild(contenido);
    })
}




/*
12. Write a function that takes as input a matrix of data and outputs a DOM structure representing 
a table. Attach it to the body of a given page. Hint: use document.createElement, 
document.createTextNode, and Node.appendChild methods
*/

function matrixToDOM(matriz){
	//crear matriz (asociar al div)
	var matrix = document.getElementById("matrix");
	matrix.style.content = "block";
	matrix.style.width = "100%";
	for (let col = 0; col < matriz.length; col++){
		// crear nodo columna element ul
		var columna = document.createElement("ul"); 
			for (let fil = 0; fil < matriz[0].length; fil++){
				//crear nodo texto
				//crear elemnt li
				//append nodo to li
				//append li to ul
				var contenido = document.createTextNode(matriz[col][fil]);
				var fila= document.createElement("li");    
				fila.appendChild(contenido);
				columna.appendChild(fila);
			}
		//append col to matrix
		matrix.appendChild(columna);
	}

	let m = document.getElementById("matrix");
	var c = m.getElementsByTagName("ul");
	let cols = Array.from(c);

    for(let i = 0; i < cols.length; i++){
		
		//Esto no anda ??
		//cols[i].className = "colStyle";
	
		cols[i].style.padding = "0"
		cols[i].style.boxSizing = "content-box"
		cols[i].style.float = "left";
		cols[i].style.listStyle = "none";
		cols[i].style.width = (100/(matriz.length))+"%";
		
		let fils = Array.from(cols[i].getElementsByTagName("li"));

		for(let j = 0; j < fils.length; j++){
			fils[j].style.boxSizing = "content-box"
			fils[j].style.border = "#000 solid 1px";
			fils[j].style.width = "100%";
			fils[j].style.textAlign = "center";
			
			if(j<fils.length-1)
				fils[j].style.borderBottom = "none";
		}
    }

	return matrix;
}

function generarMatriz(){
	//LLenado de matriz
	var iMaxNum = 8;
	var i, j;
	var MultiplicationTable = new Array(iMaxNum);
	for (i = 0; i < iMaxNum; i++){
		MultiplicationTable[i] = new Array(iMaxNum);
		for (j = 0; j < iMaxNum; j++){
			MultiplicationTable[i][j] = i * j;
		}
	}

	let m = matrixToDOM(MultiplicationTable);
}






