window.onload = function(){
    hideText();
}

function openNav(){
    var burger_btn = document.getElementById("nav-burger-btn");
    var element = document.getElementById("nav-burger");
if (element.style.display === "none"){
    element.style.display = "block";
    burger_btn.style.backgroundColor = "#C43117";
    burger_btn.style.color = "white";
    burger_btn.style.boxShadow = "none";

}else{
    element.style.display = "none";
    burger_btn.style.backgroundColor = "lightgray";
    burger_btn.style.color = "gray";
    burger_btn.style.boxShadow = "-3px 3px gray";
}
}

function hideText(){
    var text_holder = document.getElementById("about-holder");
    var about_text = document.getElementById("about");
    var threshold = 500;
    if (text_holder.innerHTML.length > threshold){
        text_holder.style.display = "none";
        about_text.innerHTML = text_holder.innerHTML.slice(0, threshold) + "...";
        about_text.style.display = "block";     
           
    }
}

function moreText(){
    document.getElementById("about-holder").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("read-more").style.display = "none";

    
}
