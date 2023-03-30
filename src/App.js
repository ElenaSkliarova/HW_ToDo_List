import { useState } from "react";
import Menu from "./components/menu/Menu";
import ToDoDay from "./components/menu/toDo/ToDoDay";


function App() {
  const [globalData, setGlobalData] = useState([]);

  const updateData = (newData) => {
    const isDayExist = globalData.find((el) => el.day === newData.weekDay);
  
    let updatedData = [];
  
    if(isDayExist) {
      updatedData = globalData.map(el => {
        return {...el, toDoItems: [...el.toDoItems, {
          howImportant: newData.howImportant,
          toDo: newData.toDo,
          id: Date.now()
        }]}
      })
    } else {
      updatedData = [...globalData, {
        day: newData.weekDay,
        toDoItems: [{
          howImportant: newData.howImportant,
          toDo: newData.toDo,
          id: Date.now()
        }]
      }]
    }
    setGlobalData(updatedData);
  }
 
  console.log('globalData------------------', globalData)
 

  return (
    <div>
      <Menu updateGlobalData={updateData}/>
      {globalData.map((el) => <ToDoDay 
                                  weekDay={el.day} 
                                  toDoItems={el.toDoItems}
                                  key={el.day} />)}
    </div>
  );
}

export default App;
