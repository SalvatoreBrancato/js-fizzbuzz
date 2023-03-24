for (let numero = 1; numero <= 100; numero++) {
    
    if (numero % 3 == 0 && numero % 5 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.classList.add('box1');
        p.append(`fizzbuzz`);
        div.append(p);
    }
    
    else if (numero % 3 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.classList.add('box2');
        p.append(`fizz`);
        div.append(p);
    }

    else if(numero % 5 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.classList.add('box3');
        p.append(`buzz`);
        div.append(p);
    }

    else {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.classList.add('box4');
        p.append(`${numero}`);
        div.append(p);        
    }
}

