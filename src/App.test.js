import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

TheButtonClick();{
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
