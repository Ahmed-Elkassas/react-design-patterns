import { SplitScreen } from "./SplitScreen";
import "./styles.css";

const LeftComponent = () => {
  return <h1 style={{ background: "green" }}>Left</h1>;
};

const RightComponent = () => {
  return <h1 style={{ background: "gray" }}>Right</h1>;
};

export default function App() {
  return (
    <div className="App">
      <SplitScreen
        left={LeftComponent}
        right={RightComponent}
        leftWeight={1}
        rightWeight={3}
      />
    </div>
  );
}
