window.onload = function() {

    const addButton = document.getElementById('add-button');
    const addInput = document.getElementById('add-input');
    const listHead = document.getElementById('list')

    const finishTask = (e)=> {
        if (e.target.checked) {
            // set a css attribute
            e.target.setAttribute('class', 'strike');
        } else {
            e.target.removeAttribute('class')
        }

    }

    const addItem = (e)=> {
        let inputVal = addInput.value;
        if (! inputVal) {
            return;
        }

        const temp = document.getElementById("temp");
        // clone a temp
        const clone = document.importNode(temp.content, true);
        clone.querySelector('span').textContent = inputVal;
        clone.querySelector('input').addEventListener("click", finishTask);
        // add the template clone to ul list
        listHead.appendChild(clone);
        // clean input
        addInput.value = "";
    }

    addButton.addEventListener('click', addItem);
};