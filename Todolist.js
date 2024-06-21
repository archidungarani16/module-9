// useState hook che
import './My.css';
import React, { useState } from 'react';

const Todolist = () => {
    const [todolist,setTodo] = useState([])
    const [indexId, setindexId] = useState(null)

    const addData = () =>{
        let inpt = document.getElementById('inpt').value
        if(indexId == null) {
        setTodo([...todolist,inpt])
        document.getElementById('inpt').value=''
        }else{
            let newTodo = [...todolist]
            newTodo[indexId] = inpt
            setTodo(newTodo)
            setindexId(null)
            document.getElementById('inpt').value =''
        }
    }

    const deleteData = (index) => {
        let newTodo =[...todolist]

        newTodo.splice(index, 1)
        setTodo(newTodo)
    }

    const updateData = (res, index) => {
        document.getElementById('inpt').value= res
        setindexId(index)
    }
  return (
    <>
        <input type="text" name="" id="inpt"/>
        <button onClick={()=>{
            addData()

        }}>{indexId==null ? 'Add Data' : 'Update Data'}</button>
        {todolist.map((result, index) => {
            return(
                <>
                    <h1>{result}
                        <button class='btn1' onClick = {() => {
                            deleteData(index)
                        }}>Delete

                        </button>
                        <button class='btn2' onClick = {() => { updateData(result,index)
                        }}>Update

                        </button>
                    </h1>
                </>
            )
        })}
    </>
  )
}

export default Todolist