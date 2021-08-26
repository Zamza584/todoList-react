import React from 'react';

function TodoItem(props) {
    return (        
        <div className="todo-item">
            <input 
                type="checkbox" name="chk" 
                checked={props.item.completed} 
                onChange={() => props.handleChange(props.item.id)}/>
            <label for="chk">{props.item.text}</label><br/>
        </div>
    )
}

export default TodoItem;