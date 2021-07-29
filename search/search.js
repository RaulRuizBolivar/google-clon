//    https://www.google.com/search?q=
document.getElementById("search-bar").addEventListener('keyup',cambiar);
function cambiar(){
    let searchBar = document.getElementById("search-bar");
    let searchUrl = document.getElementById("search-button");
    searchUrl.href = "https://www.google.com/search?q=" + searchBar.value;
}