import logo from './logo.svg';
import './App.css';
import UsecontextA from './UsecontextA';
import { createContext } from 'react';
import Controlledform from './Controlledform';
import Controlledformusingfuc from './Controlledformusingfuc';
import Multipleinput from './Multipleinput';
import Multiplecheckbox from './Multiplecheckbox';
import Refcomponent from './Refcomponent';
import Uncontrolledcomponent from './Uncontrolledcomponent';
import Callbackrefcomponent from './Callbackrefcomponent';
import Userefcomponent from './Userefcomponent';

export const NameContext = createContext()
export const Lastname = createContext()
function App() {
  let name = 'shubham';  //variable
  const human = { name: 'rahul', age: 22, gender: 'male' } //obj
  return (

    <div>
      {/* //jsx expression */}
      {/* <NameContext.Provider value={'shubham'}>
        <Lastname.Provider value={'byadagi'}>
          <UsecontextA />
        </Lastname.Provider>
      </NameContext.Provider> */}
      {/* <Controlledform /> */}
      {/* <Controlledformusingfuc /> */}
      {/* <Multipleinput /> */}
      {/* <Multiplecheckbox /> */}
      {/* <Refcomponent /> */}
      {/* <Uncontrolledcomponent /> */}
      {/* <Callbackrefcomponent /> */}
      <Userefcomponent />

    </div>

  );
}

export default App;
