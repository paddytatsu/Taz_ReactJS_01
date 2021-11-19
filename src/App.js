import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi!Paddy!heyhey!!
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
        <button type="button" ID="TheButton" onclick="TheButtonClick()">Click me!</button>
      </div>
      <div id="TheButtonResult">

      </div>

    </div>
  );
}

function TheButtonClick(){
  // alert('Click');
  var newElement = document.createElement("p"); // p要素作成
  var newContent = document.createTextNode("子要素１"); // テキストノードを作成
  newElement.appendChild(newContent); // p要素にテキストノードを追加
  newElement.setAttribute("id","child-p1"); // p要素にidを設定

  // ----------------------------
  // 親要素の最初の子要素を追加します
  // ----------------------------
  // 親要素（div）への参照を取得
  var parentDiv = document.getElementById("TheButtonResult");
  
  // 追加
  parentDiv.insertBefore(newElement, parentDiv.firstChild);
}


export default App;
