import { adicionarTarefa, renderizarTarefas } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  const inputTarefa = document.getElementById('inputTarefa');
  const categoriaTarefa = document.getElementById('categoriaTarefa');
  const formTarefa = document.getElementById('formTarefa');

  formTarefa.addEventListener('submit', (event) => {
      event.preventDefault();
      const textoTarefa = inputTarefa.value.trim();
      const categoriaTarefaValue = categoriaTarefa.value;

      if (textoTarefa && categoriaTarefaValue) {
          adicionarTarefa(textoTarefa, categoriaTarefaValue);
          inputTarefa.value = '';
          categoriaTarefa.value = '';
      }
  });

  renderizarTarefas();
});
