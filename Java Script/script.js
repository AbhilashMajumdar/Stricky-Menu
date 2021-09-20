window.addEventListener('scroll', function(){
    let navbar = document.getElementById("menubar");
    if(window.pageYOffset >= 190)
    {
        navbar.classList.add("stricky");
    }
    else
    {
        navbar.classList.remove("stricky");
    }
});