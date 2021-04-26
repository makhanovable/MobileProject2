import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
let id = 0;

// Makhanov Madiyar, 20MD0195
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      todoList: [],
      valueStr: ''
    };
    this.colorList = ['#FF0000', '#00FF00']
  }

  changeStyle(id) {
    this.setState({
      todoList: this.state.todoList.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          color: this.choose()
        }
      })
    })
  }

  choose() {
    const index = Math.floor(Math.random() * this.colorList.length);
    return this.colorList[index];
  }

  render() {
    return (
      <div>
        <input type='text' value={this.state.valueStr} onChange={todo => {
          this.setState({
            valueStr: todo.target.value
          })
        }} placeholder='Enter todo'/>
        <button onClick={() => {
          const newData = this.state.valueStr;
          if (newData.length > 0) {
            this.setState({
              todoList: [...this.state.todoList, {id: id++, text: newData, color: '#000000'}],
              valueStr: ''
            })
          } else {
            alert('Error')
          }
        }}>Add todo
        </button>
        <ul>
          {this.state.todoList.map(todo => (
            <li className="noselect" key={todo.id}>
              <button onClick={() => this.setState({
                todoList: this.state.todoList.filter(todo => todo.id !== id)
              })}>Delete
              </button>
              <span onDoubleClick={() => this.changeStyle(todo.id)} style={{color: todo.color}}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}


export default App;
