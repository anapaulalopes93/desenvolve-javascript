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
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            atualizarLista();
        });

        const removerButton = document.createElement('button');
        removerButton.textContent = 'Excluir';
        removerButton.addEventListener('click', function () {
            tarefas.splice(index, 1);
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            atualizarLista();
        });

        li.appendChild(checkbox);
        li.appendChild(document.createTextNode(tarefa.descricao));
        li.appendChild(removerButton);
        listaTarefas.appendChild(li);
    });
};

atualizarLista();
