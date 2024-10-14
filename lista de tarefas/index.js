const tarefas = [];

document.getElementById('adicionar').addEventListener('click', function() {
    const tarefa = document.getElementById('tarefa');
    const descricao = tarefa.value;

    if(descricao) {
        const novaTarefa = {descricao, status: false};
        tarefas.push(novaTarefa);
        tarefa.value = '';
        atualizarLista();
    }
});

function atualizarLista() {
    const listaTarefas = document.getElementById('listaTarefas');
    listaTarefas.innerHTML = '';

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.className = tarefa.status ? 'concluida' : '';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = tarefa.status;

        checkbox.addEventListener('change', function() {
            tarefa.status = checkbox.checked;
            atualizarLista();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(tarefa.descricao));
        listaTarefas.appendChild(li);
    });
}
