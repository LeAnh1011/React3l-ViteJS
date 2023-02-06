import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button } from "antd";
import { Model } from "react3l-common";
import { Field } from "react3l-decorators";
import "./App.scss";

class AppModel extends Model {
  @Field(String)
  public name?: string;
  @Field(Number)
  public code?: string;
}

function App() {
  const [count, setCount] = useState(0);
  const appModel: AppModel = useMemo(() => {
    const value = AppModel.create();
    Object.assign(value, { name: "App", code: "3" });
    return value;
  }, []);
  const baseUrl = import.meta.env.BASE_URL;
  const viteBaseUrl = process.env.VITE_BASE_URL;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more {appModel.name} -{" "}
        {appModel.code} - {baseUrl} - {viteBaseUrl}
      </p>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;
