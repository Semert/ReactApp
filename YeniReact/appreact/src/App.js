import React from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Header from './inc/header';
import Footer from './inc/footer';


class App extends React.Component {
 constructor() {
    super();
     this.state = {myTasks: [
        {text:"Finallere Çalış",status:"passive"},
        {text:"React ile uygulama geliştir",status:"passive"},
        {text:"Styled Components Öğren",status:"passive"},
        {text:"GitHub tekrarı yap,",status:"passive"}
      ]};
     this.addTask = this.addTask.bind(this);
  } 
  addTask(val) {
    let updatedList = this.state.myTasks;
    updatedList.push({text:val,status:"passive"});
    this.setState({myTasks:updatedList});
   //myTasks.push(val);
  }
  
  doneTask = (task_id) => {
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    let newStatus = 'active';
    let currentStatus = updatedList[task_id].status;
    if (currentStatus ==='active'){
      newStatus = 'passive';
    }
    updatedList[task_id].status = newStatus;
    this.setState({myTasks: updatedList});
  }

  removeTask = (task_id) => {
    task_id = task_id.replace('task_','');
    let updatedList = this.state.myTasks;
    updatedList.splice(task_id,1);
    this.setState({myTasks: updatedList});
  }

  render () {
  return (
    <div className="content">
      <Header/>
      <TodoForm addTask={this.addTask}/>
      <TodoList myTasks={this.state.myTasks} 
                doneTask={this.doneTask} 
                removeTask={this.removeTask}/>
      <Footer/>
    </div>
  );
  }
}
export default App;


