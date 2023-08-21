import './App.css';
import { Card } from './Card';
import { testObject } from './testObject';

function App() {
  return (
    <div className="App h-screen flex items-end justify-center">
      <Card nodeOfTree={testObject} title="Calendar" />
    </div>
  );
}

export default App;
