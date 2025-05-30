document.addEventListener("DOMContentLoaded", ()=>{
    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');

    for(let i = 0 ; i < allButtons.length ; i++){
        allButtons[i].addEventListener('click', ()=>{
            searchBar.style.visibility = 'visible';
            searchBar.classList.add('open') ; 
            searchInput.focus();
            this.setAttribute('aria-expanded', 'true');
        })
    }
    searchClose.addEventListener('click', () => {
        searchBar.style.visibility = 'hidden';
        searchBar.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    })
})