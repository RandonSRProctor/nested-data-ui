import { useState, createContext, Dispatch } from 'react';
import './App.css';
import { testObject } from './testObject';
import { FloatControl } from './FloatControl/FloatControl';
import { Root } from './Root/Root';

type ContextType = {
  depthOfFocus: number;
  setDepthOfFocus: Dispatch<number> | (() => void);
  selectedNodePath: (string | number)[];
  setSelectedNodePath: Dispatch<(string | number)[]> | (() => void);
};

export const Context = createContext<ContextType>({
  depthOfFocus: -1,
  setDepthOfFocus: () => undefined,
  selectedNodePath: [],
  setSelectedNodePath: () => undefined,
});

function App() {
  const [depthOfFocus, setDepthOfFocus] = useState(-1);
  const [selectedNodePath, setSelectedNodePath] = useState<any[]>([]); //Not a fan of this any
  const contextState = {
    depthOfFocus,
    setDepthOfFocus,
    selectedNodePath,
    setSelectedNodePath,
  };

  return (
    <Context.Provider value={contextState}>
      <div className="App h-screen flex flex-col items-center justify-end">
        <FloatControl />
        {/** Make a Title that animates fading smoothly handles timing **/}
        <Root
          depthOfFocus={depthOfFocus}
          setDepthOfFocus={setDepthOfFocus}
          selectedNodePath={selectedNodePath}
          setSelectedNodePath={setSelectedNodePath}
          data={testObject}
          title="Calendar"
        />
      </div>
    </Context.Provider>
  );
}

export default App;
