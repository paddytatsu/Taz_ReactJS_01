import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      clickTimes: 0,
      templateString: "Hi!Paddy!heyhey!!"
    }
  }

  updateClickTimes(){
    this.setState(prevState => {
      return {clickTimes: prevState.clickTimes+1}
    });
  }


  render(){
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {this.state.templateString}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div>
        <button type="button" id="theButton" onClick={() => this.updateClickTimes()}>Click me!</button>
        <p>{this.state.clickTimes}</p>
      </div>
      <div id="TheButtonResult">

      </div>

    </div>
    )
  }
}

// function TheButtonClick(){
//   // alert('Click');
//   var newElement = document.createElement("p"); // p要素作成
//   var newContent = document.createTextNode("子要素１"); // テキストノードを作成
//   newElement.appendChild(newContent); // p要素にテキストノードを追加
//   newElement.setAttribute("id","child-p1"); // p要素にidを設定

//   // ----------------------------
//   // 親要素の最初の子要素を追加します
//   // ----------------------------
//   // 親要素（div）への参照を取得
//   var parentDiv = document.getElementById("TheButtonResult");
  
//   // 追加
//   parentDiv.insertBefore(newElement, parentDiv.firstChild);
// }


export default App;
