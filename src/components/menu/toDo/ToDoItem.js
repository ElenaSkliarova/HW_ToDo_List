
function ToDoItem(props) {

    const {howImportant, toDo} = props;
    return(
        <div className={howImportant}>
            {toDo}
        </div>
    )
}

export default ToDoItem