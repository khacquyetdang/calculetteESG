window.onload = function () {
    // do the work after everything was loaded (DOM, media elements)    
    document.querySelector('button').onclick = function () {

        var a = parseInt(document.getElementById('a').value);
        var b = parseInt(document.getElementById('b').value);

        if (isNaN(a) || isNaN(b)) {
            document.getElementById('result').innerHTML = 'Invalid input';
            return;
        }
        document.getElementById('result').innerHTML = a + b;
    };
};