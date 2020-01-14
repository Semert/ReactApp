import React from 'react'

class TodoForm extends React.Component {
 
    addTask(e) {
        e.preventDefault();
        const inp = document.getElementById('todoInput');
        const val = inp.value;
        inp.value = "";
        this.props.addTask(val);
    }

    render() {
        return (
            <div>
                <div className="todo type">
                    <form className="input-wrapper" onSubmit={this.addTask.bind(this)}>
                        <input id="todoInput" type="text" 
                        className="add-todo" autoComplete="off" placeholder="Ne eklemek istersiniz" />
                    </form>
                </div>      
                <button type="button" className="add-btn" onClick={this.addTask.bind(this)} />   
                <br/>
                <br/>  
            </div>
        )
    }
}
export default TodoForm;
