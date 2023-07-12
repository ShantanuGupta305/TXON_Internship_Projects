let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (string == "" && (e.target.innerHTML == '%' || e.target.innerHTML == '/' || e.target.innerHTML == 'X' || e.target.innerHTML == '-' || e.target.innerHTML == '+')) {
            //Do nothing
        }

        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'C') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '%') {
            string += '/100';
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = "Ans=" + string;
        }
        else {
            if (e.target.innerHTML == 'X') string += '*';
            else string += e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})