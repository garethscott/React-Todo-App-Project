import React from 'react';
import './List.css'


export const List = (props) => {

    const mappedList = props.mapList.map((task) => {

        return <div className="list-box" key={task._id}>

            <p className="task-text">{task.task}</p>


            <h3 className="x-text" onClick={() => props.handleDelete(task._id)}>X</h3>


        </div>
    })
    return (
        <div>
            {props.loading
                ? <div>{mappedList}</div>
                : <h1 className="loading">Loading...</h1>
            }

        </div>
    )
}





// export const List = (props) => {
//     const mappedList = props.mapList.map((task, index) => {

//         return <div className="list-box" key={index.key}>
//             <div key={index.key} className="text-con">
//                 <p key={index.key} className="task-text">{task.text}</p>
//             </div>
//             <div key={index.key} className="x-con">
//                 <h3 key={index.key} className="x-text">X</h3>
//             </div>

//         </div>
//     })
//     return (
//         <div>{mappedList}</div>
//     )
// }


// onClick = {() => props.handleDelete(index.key)}