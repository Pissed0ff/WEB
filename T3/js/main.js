
function creatTable(){
    document.getElementById('size').hidden = true;
    
    let forTable = document.getElementById("forTable");
    let table = document.createElement('table');
    forTable.appendChild( table );
    
    for( let i=1; i<=document.getElementById('inputRow').value; i++) {
        let newRow = document.createElement('tr');
        newRow.setAttribute( 'id', +i);
        table.appendChild( newRow );
               
            for (let j=1;  j<=document.getElementById('inputCol').value; j++) 
            {
                let newCol = document.createElement('td');
                newRow.appendChild( newCol );
                
                let cell = document.createElement('div');
                cell.setAttribute( 'class', 'cell');
                newCol.appendChild( cell );
                
                let content = document.createElement('div');
                content.setAttribute( 'class', 'forText');
                cell.appendChild( content );
                
                let newForm = document.createElement('textarea');
                newForm.setAttribute( 'class', 'newForm');
                newForm.oninput = function() {
                newForm.previousSibling.innerHTML = newForm.value;
                }
                cell.appendChild( newForm );
                
                let newBTN =  document.createElement('button');
                newBTN.setAttribute( 'class', 'btn btn-primary save');
                newBTN.setAttribute( 'type', 'button');
                newBTN.innerHTML="Сохранить";
                newBTN.onclick = saveCell;                
                cell.appendChild( newBTN );          
                }  
    }
    
    document.getElementById('forSettings').hidden = false;
}


/*ширина на кнопке*/
function reloadBTN(){
    let BTN = document.getElementById("install");
    let val = document.getElementById("tabWidth").value;
    BTN.innerHTML = "Установить " + val +"px";
}
/*стиль на кнопке*/
function styleBTN( val ) {
    let BTN = document.getElementById("install");
    BTN.border = val;
    BTN.setAttribute("forStyle", val);
    BTN.setAttribute("style", "border:"+val);
}

/*сохранение ячеек*/
function saveCell(){
    this.previousSibling.previousSibling.innerHTML = this.previousSibling.value;
    this.previousSibling.hidden = true;
    this.hidden = true;
}

/*ширина таблицы и контур*/
function installWidth(){
    let tabWidth = document.getElementById("tabWidth").value+"px";
    
    let val = document.getElementById("install").getAttribute("forstyle");     
    let mytable = $("table");
    mytable[0].setAttribute("width",tabWidth); 
    mytable[0].style.border=val;
   
}
/*Установка заголовка*/
function setTitul(){
    let h = document.getElementById("TblTitul");
    let t = document.getElementById("tabTitule").value;
    h.innerHTML=t;
}
/*Удаление строки*/
function Rdelete(){
    let nomber = document.getElementById("rowDelete").value;  
    let tbl = document.getElementsByTagName("table")[0].childNodes;
    if(tbl.length<nomber){
        alert( "Нет строки с таким номером" );
    }
    else{
    tbl[nomber-1].remove();
    }
}

function doMagic(){
    let tbl = document.getElementsByTagName("table")[0].childNodes;
    let max = tbl.length;
    let luck = Math.floor(Math.random() * (max));
    let choseRow = tbl[luck].childNodes;
    max = choseRow.length;
    luck = Math.floor(Math.random() * (max));
    let choseCell=choseRow[luck];
    let last = choseCell.children[0];
    
    luck = Math.floor(Math.random() * (2));
    if (luck) {
        changeColor( last );
    }
    else{
    clean(last);
    }
    
}

function changeColor( elem ){
    let R = Math.floor(Math.random() * (100));
    let G = Math.floor(Math.random() * (100));
    let B = Math.floor(Math.random() * (100));
    elem.style.backgroundColor = "RGB("+R+"%, "+ G+"%, "+B+"%)";
    
    R = Math.floor(Math.random() * (100));
    G = Math.floor(Math.random() * (100));
    B = Math.floor(Math.random() * (100));
    elem.style.color = "RGB("+R+"%, "+ G+"%, "+B+"%)";
    
    let fSize = Math.floor(Math.random() * (25-15))+15;
    elem.style.fontSize=fSize+"px";
}

function clean( elem ){
    elem.children[0].innerHTML = "";
    elem.children[1].hidden = false;
    elem.children[1].value = "";
    elem.children[2].hidden = false;
}

function tDelete(){
    let tbl = document.getElementsByTagName("table")[0];
    tbl.remove();
    document.getElementById('size').hidden = false;
    document.getElementById('inputRow').value = '';
    document.getElementById('inputCol').value = '';
    document.getElementById('forSettings').hidden = true;
    document.getElementById("TblTitul").innerHTML = "";
}



























