/*
var h = document.getElementById("head1");
var color = document.querySelector("#imgId");

function red(){
    color.src= "image/red.jpg";
}

function blue(){
    color.src= "image/blue.jpg";
}

h.innerHTML = "kaj hoise???";

var h2 = document.createElement("h1");
var text = document.createTextNode("This is heading 2");
h2.appendChild(text);

var myDiv = document.querySelector("#div1");
myDiv.appendChild(h2);
var newV2 = document.getElementsByTagName("h1")[0];
myDiv.removeChild(newV2);


var h3 = document.createElement("h1");
var text3 = document.createTextNode("This is heading 3");
h3.appendChild(text3);

myDiv.insertBefore(h3,h2);

function addStyle(){
    var newStyle = document.querySelector("#peraId");
    newStyle.classList.add("pera-style");
}

function removeStyle(){
    var newStyle = document.querySelector("#peraId");
    newStyle.classList.remove("pera-style");
}

*/

/*
//type1 of event listener
document.querySelector("#clik1").addEventListener("click",myfunction);

function myfunction(){
    alert("Hello");
}


//type2 of event Listner

document.querySelector("#clik1").addEventListener("click",function(){
    alert("ebar hoise");
});

var takevar = document.querySelector("#ggmu");

takevar.addEventListener("mouseover",function(){
    takevar.classList.add("pera-style");
});

takevar.addEventListener("mouseout",function(){
    takevar.classList.remove("pera-style");
});
*/

for(var i = 0; i<3 ;i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        console.log(text);
        var audio = new Audio("sounds/"+text+".mp3");
            audio.play();
    });

}
    

