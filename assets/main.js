for (let numero = 1; numero <= 100; numero++) {
    
    if (numero % 3 == 0 && numero % 5 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.append(`fizzbuzz`);
        div.append(p);

    }
    
    else if (numero % 3 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.append(`fizz`);
        div.append(p);
    }

    else if(numero % 5 == 0) {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.append(`buzz`);
        div.append(p);
    }

    else {
        const div = document.querySelector(`div.prova`);
        const p = document.createElement('p');
        p.append(`${numero}`);
        div.append(p);
    }
}

