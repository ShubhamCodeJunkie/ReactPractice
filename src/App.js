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
import RouterpracticeComponent from './RouterpracticeComponent';
// import Comp1 from './Comp1';
// import Comp2 from './Comp2';
import { lazy,Suspense } from 'react';
import Formvalidation from './Formvalidation';
import FormikForm from './FormikForm';
import FormikComponent from './FormikComponent';
import Reactbootstrap from './Reactbootstrap';
import FetchApi from './FetchApi';
const Comp1 = lazy(()=> import('./Comp1'))
const Comp2 = lazy(()=>import('./Comp2'))

export const NameContext = createContext()
export const Lastname = createContext()
function App() {
  let name = 'shubham';  //variable
  const human = { name: 'rahul', age: 22, gender: 'male' } //obj
  return (

    <div className='App'>
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
      {/* <Userefcomponent /> */}
      {/* <h1>Lazy loading demo</h1>
      <Comp1/>
      <Suspense fallback={<div>loading.....</div>}>

      <Comp2/>
      </Suspense> */}

      {/* <Formvalidation/> */}
      {/* <FormikForm/> */}
      {/* <FormikComponent/> */}
      {/* <Reactbootstrap/> */}
      <FetchApi/>
    </div>

  );
}

export default App;
