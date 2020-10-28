

function analise()
{    
    let ref = document.getElementById("ref").value;
    if ( ref == "" ) 
        return;
    let arr = ref.split('/');

    let result = {};

    //протокол
    result.protocol = arr[0];

    //домен
    if ( arr[2].substring(0, arr[2].lastIndexOf(".")) != "" )
    result.domain_name = arr[2].substring(0, arr[2].lastIndexOf("."));
    if ( arr[2].substring(arr[2].lastIndexOf("."), arr[2].length) != "" )
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
    
    
 
let table = document.createElement( 'table' );  
table.setAttribute( 'border', '1px' );
let str = document.createElement( 'tr' );
let stb1 = document.createElement( 'td' );
    stb1.setAttribute("colspan","2");
stb1.innerHTML = "Result:";
str.appendChild( stb1 );
table.appendChild( str );
    
for( let key in result ) 
        {
            if (key != 'parameters') 
            {
                    
                let str = document.createElement( 'tr' );

                let stb1 = document.createElement( 'td' );
                stb1.innerHTML = key;

                let stb2 = document.createElement( 'td' );
                stb2.innerHTML = result[key];

                str.appendChild( stb1 );
                str.appendChild( stb2 );
                table.appendChild( str );
            }
            
            else
            {
                let str = document.createElement( 'tr' );
                let stb1 = document.createElement( 'td' );
                stb1.innerHTML = key;
                stb1.setAttribute("colspan","2");
                str.appendChild( stb1 );
                table.appendChild( str );
                
                result[key].forEach( function (param, index) 
                    {
                        let str = document.createElement( 'tr' );

                        let stb1 = document.createElement( 'td' );
                        stb1.innerHTML = index;

                        let stb2 = document.createElement( 'td' );
                        stb2.innerHTML = param;

                        str.appendChild( stb1 );
                        str.appendChild( stb2 );
                        table.appendChild( str );
                    })
                
            }
        }
    
    let insert = document.getElementsByClassName( "forTable" );
    insert[0].innerHTML = "";
    insert[0].appendChild( table );     
    
}




