import { Spin } from "antd";

const Typing = () => {
  return (
    <Spin
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "end",
        paddingLeft: "18px",
        paddingBottom: "10px",
      }}
    />
  );
};

export default Typing;
