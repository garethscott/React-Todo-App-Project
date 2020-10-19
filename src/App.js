import React from 'react';
import axios from 'axios';
import './App.css';
import { TextBox } from './components/TextBox'
import { Button } from './components/Button'
import { List } from './components/List'
import { ClearButton } from './components/ClearButton'

class App extends React.Component {
  state = {
    list: [],
    task: '',
    taskList: [],
    loaded: false,
    test: ''
  }
  //Test

  // async componentDidMount() {
  //   await fetch('http://localhost:4058/tasks')
  //     .then(result => {
  //       return result.json();
  //     })
  //     .then(data =>
  //       this.setState({
  //         taskList: data,
  //         loaded: true
  //       })
  //     )
  //     .catch(error => this.setState({ error, loaded: false }));
  // }

  async handleFetch() {
    await fetch('http://localhost:4059/tasks')
      .then(result => {
        return result.json();
      })
      .then(data =>
        this.setState({
          taskList: data,
          loaded: true
        })
      )
      .catch(error => this.setState({ error, loaded: false }));

    console.log("handleFetch activated")
  }

  componentDidMount() {
    this.handleFetch()
  }


  handleChange = (e) => {
    this.setState({
      task: e.target.value,
    })
  }


  handleSubmit = async (e) => {
    e.preventDefault()
    const newTask = {
      task: this.state.task
    }
    console.log(this.state.task)

    await axios.post('http://localhost:4059/tasks', newTask)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    this.handleFetch()

    this.setState({ task: "" })
  }


  handleDelete = (id) => {
    axios.delete(`http://localhost:4059/tasks/${id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });

    console.log(id)
    let temp = this.state.taskList.filter(task =>
      task._id !== id)

    this.setState({
      taskList: temp
    })

  }

  handleClear = () => {
    axios.delete('http://localhost:4059/tasks')
      .then(res => {
        console.log(res)
        console.log(res.data)
      })
    this.setState({ taskList: [] })
  }

  render() {
    // console.log(this.state.taskList)
    // console.log(this.state.loaded)
    // console.log(this.state.taskList[1].task)
    return (
      <div className="app">
        <div className="wrapper">
          <div className="margins">
            <div className="input-and-btn">
              <form onSubmit={this.handleSubmit}>
                <TextBox handleChange={this.handleChange} value={this.state.task} />
                <Button />
              </form>
            </div>

            <div className="list">
              <List mapList={this.state.taskList} loading={this.state.loaded} handleDelete={this.handleDelete} />
            </div>
            <div className="clear-btn-con">
              <ClearButton handleClear={this.handleClear} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
