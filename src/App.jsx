/* eslint react-hooks/exhaustive-deps: off */
import { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

// Reactでは関数を使って画面のコンポーネントを作る
const App = () => {
  // const = [変数名, 変更するための関数] = useState(初期値);
  const [num, setNum] = useState(0);
  const [isShowedFace, setIsShowedFace] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickShowFace = () => {
    setIsShowedFace(!isShowedFace);
  };

  // 第二引数に持たせた変数が変わるたびに処理が呼ばれる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        isShowedFace || setIsShowedFace(true);
      } else {
        isShowedFace && setIsShowedFace(false);
      }
    }
  }, [num]);

  return (
    // <> ... </>で囲わないといけない
    // ボタンを押されたときに処理を{}でjavascriptを書いていく
    // flag && 処理 => trueの時は処理を行う
    // flag || 処理 => falseの時は処理を行う
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color="blue" message="AAA" />
      <ColorfulMessage color="red" message="BBB" />
      <button onClick={onClickCountUp}>CountUp</button>
      <p>{num}</p>
      <button onClick={onClickShowFace}>on/off</button>
      {isShowedFace && <p>AAAAA</p>}
    </>
  );
};

// App関数を他のファイルでも使えるようにする
export default App;
