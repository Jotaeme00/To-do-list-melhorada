const inputTarefa = document.querySelector('#inputTarefa');
const categoriaTarefa = document.querySelector('#categoriaTarefa');
const btnAdicionar = document.querySelector('#adicionarTarefa');
const listaTarefas = document.querySelector('#listaTarefas');


function adicionarTarefa() {
    const valorTarefa = inputTarefa.value.trim();
    const categoria = categoriaTarefa.value;

    
    if (valorTarefa === '') return;

    const tarefa = {
        texto: valorTarefa,
        categoria: categoria,
        concluida: false
    };

    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));

    renderizarTarefas(); 

    inputTarefa.value = ''; 
}


btnAdicionar.addEventListener('click', adicionarTarefa);


inputTarefa.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});


function renderizarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    listaTarefas.innerHTML = ''; 

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.classList.add(tarefa.concluida ? 'concluida' : 'pendente');
        li.textContent = `${tarefa.texto} (${tarefa.categoria})`;

        
        li.addEventListener('click', () => {
            tarefa.concluida = !tarefa.concluida;
            tarefas[index] = tarefa;
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            renderizarTarefas(); 
        });

        
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', (e) => {
            e.stopPropagation(); 
            tarefas.splice(index, 1);
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
            renderizarTarefas(); 
        });

        li.appendChild(btnExcluir);
        listaTarefas.appendChild(li);
    });
}


renderizarTarefas();
