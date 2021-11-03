import ColorfulMessage from "./components/ColorfulMessage";

// Reactでは関数を使って画面のコンポーネントを作る
const App = () => {
  const onClickButton = () => alert();
  return (
    // <> ... </>で囲わないといけない
    // ボタンを押されたときに処理を{}でjavascriptを書いていく
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue" message="AAA" />
      <ColorfulMessage color="red" message="BBB" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

// App関数を他のファイルでも使えるようにする
export default App;
