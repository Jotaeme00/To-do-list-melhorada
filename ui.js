import { getTarefas, saveTarefas } from './storage.js';

export function adicionarTarefa(texto, categoria) {
  if (!texto) return;

  const tarefa = {
    texto,
    categoria,
    concluida: false
  };

  const tarefas = getTarefas();
  tarefas.push(tarefa);
  saveTarefas(tarefas);
  renderizarTarefas();
}

export function renderizarTarefas() {
  const tarefas = getTarefas();
  const listaTarefas = document.getElementById('listaTarefas');
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.classList.add(tarefa.concluida ? 'concluida' : 'pendente');
    li.textContent = `${tarefa.texto} (${tarefa.categoria})`;

    li.addEventListener('click', () => {
      tarefa.concluida = !tarefa.concluida;
      const tarefas = getTarefas();
      tarefas[index] = tarefa;
      saveTarefas(tarefas);
      renderizarTarefas();
    });

    const btnExcluir = document.createElement('button');
    btnExcluir.classList.add('excluir');
    btnExcluir.textContent = 'Excluir';
    btnExcluir.addEventListener('click', (e) => {
      e.stopPropagation();
      const tarefas = getTarefas();
      tarefas.splice(index, 1);
      saveTarefas(tarefas);
      renderizarTarefas();
    });

    li.appendChild(btnExcluir);
    listaTarefas.appendChild(li);
  });
}
