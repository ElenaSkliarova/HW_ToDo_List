import React, { useState } from 'react';

const weekDays = [
    { value:'default', title: 'Выберите день недели'},
    { value:'Понедельник', title: 'Понедельник'},
    { value:'Вторник', title: 'Вторник'},
    { value:'Среда', title: 'Среда'},
    { value:'Четверг', title: 'Четверг'},
    { value:'Пятница', title: 'Пятница'},
    { value:'Суббота', title: 'Суббота'},
    { value:'Воскресенье', title: 'Воскресенье'},
];

const levelOfImportance = [
    { value: 'default', title: "Выберите важность"},
    { value: 'важно', title: "важно"},
    { value: 'неважно', title: "неважно"},
];

const initState = {
    weekDay: '',
    howImportant: '',
    toDo: '',
}

function Menu({updateGlobalData}) {
    const [data, setData] = useState(initState);
    
    const handleInputChange = (e) => {
        const {value, name} = e.target;
        console.log(e.target.value, e.target.name);

        const createdData = {...data, [name]:value}
        setData(createdData);
    };

    const submitForm = (e) => {
        e.preventDefault();
        Object.entries(data).forEach(([key, value]) => {
            if(value === ''){
                alert(`Вы не заполнили ${key} поле`)
                if(key === 'weekDay'){
                    alert('Вы не выбрали день')
                } else if (key === 'howImportant'){
                    alert('Вы не выбрали важность')
                } else if (key === 'toDo'){
                    alert('Вы не ввели описание')
                }
            } else {
                updateGlobalData(data);
                setData(initState);
            }            
        })    
        console.log('Data-----', data);
        // console.log('SUBMIT data------------', data);
        
    }

    return(
        <form onSubmit={submitForm}>   
            <select value={data.weekDay} onChange={handleInputChange} name={'weekDay'} >
                {weekDays.map((item) => 
                    <option 
                        hidden={item.value === 'default'}
                        key={item.value}
                        value={item.value}
                    >
                        {item.title}
                    </option>)
                }
            </select>
            <select onChange={handleInputChange} name='howImportant' value={data.howImportant} >
                {levelOfImportance.map((item) => 
                    <option 
                        hidden={item.value === 'default'}
                        key={item.value}
                        value={item.value}
                    >
                        {item.title}
                    </option>)
                }
            </select>
            <input type='text' name='toDo' placeholder='Описание' onChange={handleInputChange} value={data.toDo}  />
            <button >Добавить</button>
        </form>
    )
}


export default Menu






// import React, { useState } from 'react';

// function Menu() {
//     // const [selectedDay, setSelected] = useState('Monaday');
   

//     const createNote = (e) => {
//         e.preventDefault();
//         const {weekDays, howImportant, toDo} = e.target;
//         // console.log(weekDays.value, howImportant.value, toDo.value);
//         console.log(e.target);
//     }

//     return(
//         <form onSubmit={createNote}>
            
//             <select name='weekDays' size='1'defaultValue='default'>
//                 <option key={1} value='default' hidden>Выберите день недели</option>
//                 <option key={2} value='Понедельник'>Понедельник</option>
//                 <option key={3} value='Вторник'>Вторник</option>
//                 <option key={4} value='Среда'>Среда</option>
//                 <option key={5} value='Четверг'>Четверг</option>
//                 <option key={6} value='Пятница'>Пятница</option>
//                 <option key={7} value='Суббота'>Суббота</option>
//                 <option key={8} value='Воскресенье'>Воскресенье</option>
//             </select>
            
            
//             <select name='howImportant' size='1' deafulValue='default'>
//                 <option key={1} value='default' hidden>Выберите важность</option>
//                 <option key={2} value='important'>Важно</option>
//                 <option key={3} value='unimportant'>Неважно</option>
//             </select>
            
//             <input type='text' name='toDo' placeholder='Описание'></input>
//             <button >Добавить</button>
//         </form>
//     )
// }


// export default Menu