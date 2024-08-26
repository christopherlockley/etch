const header = document.querySelector(".header"); 
const aGrid = document.querySelector("#firstGrid"); 


const heading = document.createElement("h1"); 
heading.textContent = "Etch-A-Sketch"; 
heading.style.color = "grey"; 

header.appendChild(heading); 

 


function makeGrid(){

    const grid = document.getElementById("firstGrid"); 
    

    for (let i = 0; i < 17; i++){
        let myRow = document.createElement("tr"); 
        myRow.id = "row" + i; 

        grid.appendChild(myRow); 

        let rowW = document.getElementById("row" + i); 

        for (let j = 0; j < 17; j++){
            let myCell = document.createElement("td"); 
           
            rowW.appendChild(myCell); 
        }

    }
}



window.onload = makeGrid(); 

// Allow user's to manipulate the number of cells and rows // 
// Take an input (number) and alter the value of (i) // 

const userRowInput = document.getElementById("rows"); 
const userColumnInput = document.getElementById("columns"); 

