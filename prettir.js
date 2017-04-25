function prettier(n) {

    let x;

    if(n < 100) {
        return n.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
    }

    if((n / 1000) < 1000 && (n / 1000 )  > 0) {
        x = (n / 1000);
        if((''+x).split('')[2] > 0) {
            x = x.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
            x += 'k'
        } else {
            x += ' k'
        }
    } else if((n / 1000000) < 1000 && (n / 1000000) > 0) {
        x = (n / 1000000);

        if((''+x).split('')[2] > 0) {
            x = x.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0];
            x = x + ' M';
        } else {
            x += ' M'
        }
    }

    return x;
}

console.log(prettier(1999));
console.log(prettier(112.9));
console.log(prettier(100000))
console.log(prettier(1238.5));
