$(document).ready(function() {
    // Captura o evento de submit do formulário
    $('#task-form').submit(function(event) {
        event.preventDefault();
        
        // Obtém o valor do input
        const taskText = $('#task-input').val();
        
        // Verifica se o input não está vazio
        if (taskText) {
            // Adiciona a nova tarefa na lista
            $('#task-list').append(`<li>${taskText}</li>`);
            
            // Limpa o campo de input
            $('#task-input').val('');
        }
    });

    // Adiciona o evento de clique nas tarefas para riscar o texto
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
