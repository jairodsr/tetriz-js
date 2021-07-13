addEventListener('click', evento => {
    const colores = document.getElementById("color").value;

    if(colores === 'yellow'){ evento.target.style.backgroundColor = 'yellow'; }

    if(colores === 'blue'){ evento.target.style.backgroundColor = 'blue'; }

    if(colores === 'green'){ evento.target.style.backgroundColor = 'green'; }
    
    if(colores === 'pink'){ evento.target.style.backgroundColor = 'pink'; }  
    
    if(colores === 'orange'){ evento.target.style.backgroundColor = 'orange'; }  
    
})