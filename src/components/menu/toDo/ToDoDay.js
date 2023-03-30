import ToDoItem from "./ToDoItem";


function ToDoDay(props) {
    const {weekDay, toDoItems} = props;
    return(
        <div>
            <div>{weekDay}</div>
            <div>
                {toDoItems.map((el) => <ToDoItem howImportant={el.howImportant} toDo={el.toDo} key={el.id} />)}
            </div>
        </div>
    )
}

export default ToDoDay
