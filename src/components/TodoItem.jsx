import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [] }) => {
return (
<ul className="list-group">
{
    todos.map( (todo, key) => {
        return (
            <TodoItem key={key} todo={todo} />
        )
    })

}
</ul>
)
}

export const TodoItem = ({ todo }) => {
    return (
    <li className='1ist-group-item d-flex justify-content-between'>
    <span className='align-self-center'> { todo.description } </span>
    <button className='btn btn-danger'>  Borrar </button>
    </li>
    )
    
    }