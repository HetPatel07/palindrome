var h1 = document.getElementsByTagName('h1')[0].innerHTML = "hello";


function enter() {

    var h1 = document.getElementsByTagName('h1')[0].innerHTML;

    var count = 0;
    for (i = 0, j = h1.length - 1; i < h1.length, j >= 0; i++, j--) {

        if (h1[i] == h1[j]) {
            count++;
        } else {
            console.log('string is not palindrome');
            document.getElementsByTagName('p')[0].innerHTML = "string is not palindrome";
        }
    }

    if (count == h1.length) {
        console.log('string  is palindrome');
         document.getElementsByTagName('p')[0].innerHTML = "string is palindrome";
    }
}
