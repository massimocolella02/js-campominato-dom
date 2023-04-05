const main = document.querySelector('main');
let box = document.createElement('div');

const button = document.querySelector('#button').addEventListener('click', gioca);
function gioca(){
    let difficoltà = parseInt(document.querySelector('.select').value);

    //Refresh div nel grid
    main.innerHTML=''

    //creazione box nel grid in base alla difficoltà
    if( difficoltà == 0 ){
        alert('Specificare una difficoltà')
    }else{
        let grid = document.createElement('div');
        grid.classList.add('grid');
        main.appendChild(grid)

        for(let b=1; b <= difficoltà; b++){
            box = document.createElement('div');
            box.classList.add('box');
            box.innerHTML+= b;
            document.querySelector('.grid').appendChild(box);
    
            switch( difficoltà ){
                case 100:
                    box.classList.add('easy');
                    break;
                case 81:
                    box.classList.add('medium');
                    break;
                case 49: 
                    box.classList.add('hard');
                    break;
            }

            //Al click su un box, questo cambia colore
            box.addEventListener('click', function(){
                if( arrayBombe.includes(b) ){
                    this.classList.add('box-red')
                    setTimeout( function(){
                        alert('Game Over!! Hai perso')
                    }, 200)
                }else{
                    this.classList.add('box-clicked')
                    console.log(b)
                }
            })
        }

        //Generazione 16 numeri ( bombe ) random
        let arrayBombe = [];
        for(let i=0; arrayBombe.length < 16; i++){
            let bomba = randomNumber(difficoltà);
            if( !arrayBombe.includes(bomba) ){
                arrayBombe.push(bomba)
            }
        }
    }
    
}

function randomNumber(x){
    return Math.floor(Math.random() * x) + 1;
}