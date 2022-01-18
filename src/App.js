import { MyFirstFetchingInput } from "./components/MyFirstFetchingInput";
import { MyFirstObjectState } from "./components/MyFirstObjectState";
import "./App.css";

function App() {
  return (
    <div className='App'>
      {/*  <MyFirstEffect /> */}
      <h2>Object Satate</h2>
      <MyFirstObjectState />
      <MyFirstFetchingInput />
    </div>
  );
}

export default App;
