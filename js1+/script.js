
let arrLink = document.querySelectorAll( 'a' );
let storage = new Map();

arrLink.forEach( function ( elem ) 
    {
        if ( storage.has( elem.lastChild.data ) )
            { 
                storage.get( elem.lastChild.data ).push( elem.attributes[0].nodeValue );           
            }
        else 
            {
                let arr = [ elem.attributes[0].nodeValue ];
                storage.set( elem.lastChild.data, arr );
            }
    });

let table = document.createElement( 'table' );
table.setAttribute( 'border', '1px' );
storage.forEach( function ( elem, i, stor ) 
        {
            let str = document.createElement( 'tr' );
    
            let stb1 = document.createElement( 'td' );
            stb1.innerHTML = i;
            
            let stb2 = document.createElement( 'td' );
            let arr = elem.values;
            stb2.innerHTML = elem.length;
    
            let stb3 = document.createElement( 'td' );
            stb3.innerHTML += elem[0];
            elem.forEach( function ( item, i ) 
            {
                if ( i>0 )
                stb3.innerHTML += ' ,' + item ;
            })
            
        
        str.appendChild( stb1 );
        str.appendChild( stb2 );
        str.appendChild( stb3 );
        table.appendChild( str );
    
        })
document.body.append( table );












