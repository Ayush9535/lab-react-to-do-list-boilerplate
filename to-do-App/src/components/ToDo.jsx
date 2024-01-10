import React  , {Component} from 'react';
import "./ToDo.css"

export default class TodoApp extends Component{
    constructor(){
        super()
        this.state = ({
            text : "",
            todolist : []
        })
    }

    
    render(){
        
        let {text , todolist} = this.state
        let handleChange = (event) =>{
            this.setState({text : event.target.value})
        }

        let handleClick = () => {
            this.setState({todolist:[...todolist , text]})
            this.setState({text:""})
        }
        
        let handleUpdate = (index) =>{
            let newValue = prompt("Enter new value..!!")
            let newarray = todolist.map((ele , i)=>{
                if (i == index){
                    return newValue
                }else{
                    return ele
                }
            })
            this.setState({todolist:newarray})
        }

        let handleDelete = (i) =>{
            let newarray = todolist.filter((ele , index)=>{
                if (i != index){
                    return ele
                }
            })
            this.setState({todolist:newarray})

        }

        return (
            <>  
                <div className='aligncenter'>
                    <div className='addTask'>
                        <input type="text" value={text} placeholder='Enter your task' onChange={handleChange} />
                        <button className='addbtn' onClick={handleClick}>ADD</button>
                    </div>

                    <div >
                        {todolist.map((ele , i)=>(
                            <div key={i} className='flex'> 
                            <div className="Output">
                                <p>{ele}</p></div> 
                                <div className="btns">
                                <button className='btn' id='update' onClick={()=>{handleUpdate(i)}}>Update</button>
                                <button className='btn' id='delete' onClick={()=>{handleDelete(i)}}>Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}




