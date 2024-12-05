
/* todos = [
        {
            title : 'go to the gym',
            description : "some desc.",
            completed : true/false
        }
    ]
*/
export function Todos({todos}) {
    // console.log('call from todos.jsx starts');
    // console.log(todos);
    // console.log('call from todos.jsx ends');
    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.completed == true ? "completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}