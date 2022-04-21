
//global variables
const tableEle = document.getElementById("tb");
const addButton = document.getElementById('add-row');
const options = document.getElementsByTagName('select')[0];
let color = 'red';

//listeners
addButton.addEventListener('click', ()=>{
    makeRow()
})

tableEle.addEventListener('mousedown', ()=>{
    tableEle.addEventListener('mouseover', colorize);
});

tableEle.addEventListener('mouseup', ()=>{
    tableEle.removeEventListener('mouseover', colorize)
})


options.addEventListener('change', colorChange)

//functions

function makeRow(){
    const newRow = document.createElement('tr')
    for (let i=0; i<20; i++){
        const td = document.createElement('td');
        newRow.appendChild(td)
    }
    tableEle.appendChild(newRow);
}

function colorize (event){
    const target = event.target;
    if(target.className!==color&&target.tagName==='TD'){
        target.className = color;
    }else{
        target.className = '';
    }

}

function colorChange(event){
    color = event.target.value;
}




