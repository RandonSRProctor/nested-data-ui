import { useState } from 'react';
import './App.css';
import { Card } from './Card';
import { testObject } from './testObject';
import { FloatControl } from './FloatControl/FloatControl';

function App() {
  const [depthOfFocus, setDepthOfFocus] = useState(-1);
  return (
    <div className="App h-screen flex flex-col items-center justify-end">
      <FloatControl
        depthOfFocus={depthOfFocus}
        setDepthOfFocus={setDepthOfFocus}
      />
      {/** Make a Title that animates fading smoothly handles timing **/}
      <Card
        depthOfFocus={depthOfFocus}
        setDepthOfFocus={setDepthOfFocus}
        nodeOfTree={testObject}
        title="Calendar"
      />
    </div>
  );
}

export default App;
