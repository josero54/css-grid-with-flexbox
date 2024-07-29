const fill_grid = function (){
    const main = document.querySelector('#main');
for (let i = 1; i<=256; i++){
main.innerHTML += `<div class="pixel"></div>`;
}
};

fill_grid();