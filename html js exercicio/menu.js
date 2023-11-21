function myFunction(){
    document.getElementById(myDropdown)
}
window.onclick = function(event){
    if (!event.target.matches('.dropbtn')){
        var dropdowns = document.getElementsByClassName("")
        var i;
        for(i = 0; i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show'));
            openDropdown.classList.remove('show');
        }
    }
}