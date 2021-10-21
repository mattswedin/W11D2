const fetchTodos = () => (
    $.ajax({
        method: "GET",
        url: "/api/todos"
    })
)

export default fetchTodos;

window.fetchTodos = fetchTodos;