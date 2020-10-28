
//задание 1

var text = (" ? / ?? > TTTTTTThere are 7 words in this sentense")
document.write("<br>" + text);
document.write("<br>" + word_counter(text) + "words, " + letters_cont(text) + " letters+<br>");

function word_counter(text) {
    var j = 0;
    for (var i = 0; i < text.length; i++) {
        if ((j == 0) && is_letter(text[i])) {
            j++;
            continue;
        }

        if (i > 0)
            if (is_letter(text[i]) && (text[i - 1] == " ")) {
                j++;
                continue;
            }
    };

    return j;
}

function is_letter(a) {
    let a1 = a.toLowerCase(a);
    return a1.match(/[a-z,0-9,а-я]/);
}

function letters_cont(str) {
    j = 0;
    for (let i = 0; i < str.length; i++) {
        if (is_letter(str[i]))
            j++;
    }
    return j;
}

var href = document.location.href;

/*var arr2=document.location.href.split('/');
for( var i=0 in arr2 )
    document.writeln(arr2[i]+"<br>")

    href="https://vk.com/doc20232844_569744596?hash=cc331afeb22f5325af&dl=ee1dda16b24303dbd8"
 */
let analis = ref_analise(href);

//функция разбора url

function ref_analise(ref)

{
    var arr = ref.split('/');

    result = {};

    //протокол
    result.protocol = arr[0];

    //домен
    result.domain_name = arr[2].substring(0, arr[2].lastIndexOf("."));
    result.domain = arr[2].substring(arr[2].lastIndexOf("."), arr[2].length);

    //имя файла
    for (let i = 3; i < arr.length; i++) {
        if (arr[i].indexOf(".") > -1) {
            result.file = arr[i].substring(0, arr[i].indexOf("."));
            result.extension = arr[i].substring(arr[i].indexOf("."), arr[i].length);

            //путь
            for (let j = 3; j < (i + 1); j++) {
                if (result.path == null) result.path = arr[j]
                else(result.path += "/" + arr[j]);
            }
        }
    }

    //параметры
    for (let i = 3; i < arr.length; i++) {
        if (arr[i].indexOf('?') > -1) {
            let parameters = arr[i].substring(arr[i].indexOf('?') + 1, arr[i].length)
            result.parameters = new Map();
            let arr_param = parameters.split('&');
            for (let j = 0; j < arr_param.length; j++) {
                result.parameters.set(arr_param[j].split("=")[0], arr_param[j].split("=")[1]);
            }

        }
    }



}


// задание 2

//анкеры 
let div_anchors = document.getElementById('div_anchors');
let anchor1 = document.createElement('a');
anchor1.name = 'asda';
anchor1.classList.add("anchor");
anchor1.textContent = 'anchor1';
let strong = document.createElement('strong');
strong.appendChild(anchor1);
div_anchors.prepend(strong);

//ссылки
let div_ref = document.getElementById("div_ref");
let taskLink = document.createElement("a");
taskLink.href = "https://vk.com/doc20232844_569744594?hash=8d24b7ba264a0c2824&dl=d35191a19517b3751e";
taskLink.name = "task";
taskLink.textContent = "Задание";
let br = document.createElement("br");
div_ref.append(br);
div_ref.append(taskLink);

//картинки
let picture = document.createElement("img");
picture.src = "1.png";
picture.style.width = '150px';
picture.style.height = '150px';
picture.id = "realy?";
let span = document.getElementById('spn');
span.appendChild(picture);

//вывод анкеров, ссылок, работа с картинками
let arrAnch = document.getElementsByClassName("anchor");

document.write("<strong>Анкеры: " + arrAnch.length +
    " шт: </strong><br>");
for (let i = 0; i < arrAnch.length; i++)
    document.write(arrAnch[i].name + " ");

document.write("<br>")

document.write("<br>" + (document.getElementsByTagName('a')
    .length - arrAnch.length) + " Links");

document.write("<br>" + document.getElementsByTagName('img')
    .length + " imagis");

document.write("<br>" + document.getElementsByTagName('img')[0]
    .width + " imagis");

document.write("<br>")

let arr_img = document.getElementsByTagName('img');
let sum = 0;
let max_width = 0;
for (let i = 0; i < arr_img.length; i++) {
    sum += arr_img[i].height;
    if (arr_img[i].width > max_width)
        max_width = arr_img[i].width;
}
document.write( "<br>" + max_width + " max width" );
document.write( "<br>" + sum + " sum of heights" );


// Задание 3

let divForm = document.getElementById( 'forms' );

for (let i = 2; i < 10; i++) 
{
    let newForm = document.createElement( 'form' );
    newForm.name = 'Form ' + i;
    
    let newP = document.createElement('p');
    newP.textContent = 'Form ' +i;
       
    if (Math.random() > 0.5)
        {
        let newInputSpace = document.createElement('input');
        newInputSpace.setAttribute( 'name', 'name' + i );
        newP.appendChild( newInputSpace );
        }
 
    if (Math.random() > 0.5)
        {
        let newInputBtn = document.createElement('input');
        newInputBtn.setAttribute( 'type' , 'submit' );
        newInputBtn.classList.add( 'btn' ); 
        newInputBtn.style.cssText = 'background-image: url(send.png)';
        newP.appendChild( newInputBtn );
        }
 
    if (Math.random() > 0.5)
        {
        let newInputCheckbox = document.createElement('input');
        newInputCheckbox.setAttribute( 'type' , 'checkbox' );
        newInputCheckbox.id = 'checkBox' + i;
        
        let newLabel = document.createElement('label');   
        newLabel.classList.add( 'label_checkbox' );
        newLabel.setAttribute( 'for' , 'checkBox'+i );
            
        newP.appendChild( newInputCheckbox );
        newP.appendChild( newLabel );
        }
    
    if (Math.random() > 0.5)
        {
        let newInputRadio = document.createElement('input');
        newInputRadio.setAttribute( 'type' , 'radio' );
        newInputRadio.setAttribute( 'id', 'radio'+i );
        
        let newLabel = document.createElement( 'label' );
        newLabel.classList.add( 'label_radio' );
        newLabel.setAttribute( 'for', 'radio'+i );
        
        
        newP.appendChild( newInputRadio );
        newP.appendChild( newLabel );
        }
    
    let newInputBtnShow = document.createElement('input');
        newInputBtnShow.setAttribute( 'type' , 'button' );
        newInputBtnShow.setAttribute( 'value' , 'Показать имя'+i );
        newInputBtnShow.classList.add( 'btn' ); 
        newInputBtnShow.style.cssText = 'background-image: url(bottomName.png)';
        newP.appendChild( newInputBtnShow );
        
        //показать содержимое кнопки
        newInputBtnShow.setAttribute( 'onclick', 
                                     'alert( this.value )');
        
    let newInputBtnForm = document.createElement('input');
        newInputBtnForm.setAttribute( 'type' , 'button' );
        newInputBtnForm.setAttribute( 'value' , 'Показать имя формы'+i );
        newInputBtnForm.classList.add( 'btn' ); 
        newInputBtnForm.style.cssText = 'background-image: url(formName.png)'
        newP.appendChild( newInputBtnForm );
        
        //показать имя формы
        newInputBtnForm.setAttribute( 'onclick', 
                                     'alert( this.parentElement.parentElement.name )');
        
    let newInputBtnClear = document.createElement('input');
        newInputBtnClear.setAttribute( 'type' , 'button' );
        newInputBtnClear.setAttribute( 'value' , 'Отчистить' );
        newP.appendChild( newInputBtnClear );
        newInputBtnClear.classList.add( 'btn' ); 
        newInputBtnClear.style.cssText = 'background-image: url(reset.png)';
        
        //Отчистить
        newInputBtnClear.setAttribute( 'onclick', 
                                     'this.parentElement.parentElement.reset()');    
    
    let newInputBtnCoun = document.createElement('input');
        newInputBtnCoun.setAttribute( 'type' , 'button' );
        newInputBtnCoun.setAttribute( 'value' , 'Посчитать' );
        newInputBtnCoun.classList.add( 'btn' ); 
    
        newP.appendChild( newInputBtnCoun );
        
        
        //Посчитать
        newInputBtnCoun.setAttribute( 'onclick', 
        'alert(this.parentElement.parentElement.getElementsByTagName( \'input\' ).length)'); 
        
    
    newForm.appendChild( newP );
    divForm.appendChild( newForm );
      
}

// четные формы 
let arr_forms = document.getElementsByTagName( "form" );
document.write("<br>" + arr_forms[1].name)
for (let i = 3; i < arr_forms.length; i++)
    if (i % 2 == 1)
        document.write(", " + arr_forms[i].name);











