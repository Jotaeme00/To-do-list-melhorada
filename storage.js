export function getTarefas() {
    try {
      const tarefas = JSON.parse(localStorage.getItem('tarefas'));
      return tarefas || [];
    } catch (error) {
      console.error("Erro ao ler as tarefas do localStorage:", error);
      return [];
    }
  }
  
  export function saveTarefas(tarefas) {
    try {
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
    } catch (error) {
      console.error("Erro ao salvar as tarefas no localStorage:", error);
    }
  }
  