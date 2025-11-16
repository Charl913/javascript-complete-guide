const task3Element = document.getElementById('task-3');

function functionAlert(){
    alert('some alert');
}

function functionWithNameAlert(name){
    alert(name);
}

function names(name1, name2, name3){
    return `${name1}, ${name2}, ${name3}`;
}

task3Element.addEventListener('click', functionAlert);
alert(names('john', 'jane', 'test'));