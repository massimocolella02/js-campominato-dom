//variabili
let difficoltà = parseInt(document.getElementById('difficult').value);
let box = document.createElement('div');
let grid = document.querySelector('.grid');


//Al click compare il gioco in base alle difficoltà
function play(){
    difficoltà = parseInt(document.getElementById('difficult').value);

    switch(difficoltà) {
        case 100:
            game('box-easy');
            break;
        case 81:
            game('box-medium');
            break;
        case 49:
            game('box-hard');
        default:
    }

}

/*--------------------------------------------Funzioni------------------------------------------------------*/
function game(x){
    difficoltà = parseInt(document.getElementById('difficult').value);
    box = document.createElement('div');
    grid = document.querySelector('.grid');

    //Conto dei click sulle i
    let click = 0;

    //Refresh HTML
    while(grid.firstChild){
        grid.removeChild(grid.firstChild);
    }

    //Creazione numero random e inserimento in array
    let arrayBomb = [];
    let randomNumber = Math.floor(Math.random() * difficoltà) + 1;

    while(arrayBomb.length < 16){
        randomNumber = Math.floor(Math.random() * difficoltà) + 1;

        if( !arrayBomb.includes(randomNumber) ){
            arrayBomb.push(randomNumber);
        }
    }

    //Creazione div in base alla difficoltà
    for( let i=1; i <= difficoltà; i++){
        box = document.createElement('div');
        box.classList.add('box');
        box.classList.add(x);
        grid.appendChild(box);
        box.innerHTML= i

        //Click sui box
        box.addEventListener('click', function(){

        randomNumber = Math.floor(Math.random() * difficoltà) + 1;

            if( !arrayBomb.includes(randomNumber) ){
                this.classList.add('bg-azzurro');
                click += 1
                console.log(i)
            }else{
                this.classList.add('bg-rosso');
                alert(`Hai perso!! Hai fatto ${click} punti`);
                //Refresh HTML
                while(grid.firstChild){
                grid.removeChild(grid.firstChild);
                }
            }
        })
    }
    
    console.log(arrayBomb)
    return box
}