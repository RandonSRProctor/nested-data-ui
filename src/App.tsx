import JSONVisualizer from './JSONVisualizer/JSONVisualizer';
import './App.css';
import { testObject } from './testObject';
import { useState } from 'react';

export function App() {
  const [jsonInput, setJSONInput] = useState('');

  function handleTextChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setJSONInput(event.target.value);
  }
  const [jsonToSubmit, setJSONToSubmit] = useState(testObject);

  function visualizeJSONInput() {
    try {
      setJSONToSubmit(JSON.parse(jsonInput));
    } catch {
      setJSONInput('Invalid Submission');
    }
  }

  return (
    <div className="App">
      <header className="Header">
        <h1 className="HeaderText">JSON Visualizer</h1>
      </header>
      <div className="CentralContent flex">
        <div className="TextInputSection">
          <div className="textareaContainer">
            <textarea
              className="textarea"
              onChange={handleTextChange}
              value={jsonInput}
            ></textarea>
          </div>
          <button onClick={visualizeJSONInput} className="TextAreaButton">
            Visualize
          </button>
        </div>
        <div className="VisualizerContainer">
          <JSONVisualizer data={jsonToSubmit} />
        </div>
      </div>
    </div>
  );
}
