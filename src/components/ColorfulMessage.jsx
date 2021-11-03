const ColorfulMessage = (props) => {
  // {color: "blue", message: "aaaa"}
  // console.log(props);
  // 毎回props.colorのように書かなくて済む
  const { color, message } = props;
  // font-sizeをjsではキャメルケース(fontSize)にする
  const contentStyle = {
    color: color,
    fontSize: "50px"
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
