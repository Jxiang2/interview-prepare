window.onload = function () {

    const one = document.getElementById('one');
    const two = document.getElementById('two');

    const debounce = (fn, delay) => {
        let timeoutID;

        return function (...args) {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(() => {
                fn(...args);
            }, delay);
        };
    };

    one.addEventListener('click', debounce(e => {
        console.log("clicked");
    }, 2000));

    two.addEventListener('click', debounce(e => {
        console.log("clicked");
    }, 2000));

};