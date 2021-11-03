// Reactでは関数を使って画面のコンポーネントを作る
const App = () => {
  const onClickButton = () => alert();
  // font-sizeをjsではキャメルケース(fontSize)にする
  const contentStyle = {
    color: "blue",
    fontSize: "20px"
  };
  return (
    // <> ... </>で囲わないといけない
    // ボタンを押されたときに処理を{}でjavascriptを書いていく
    <>
      <h1 style={contentStyle}>こんにちは</h1>
      <p>よろしく</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// App関数を他のファイルでも使えるようにする
export default App;
