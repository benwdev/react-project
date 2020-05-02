import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState(
    {
      persons: [
        { name: 'Max', age: 30 },
        { name: 'Max2', age: 35 },
        { name: 'Max3', age: 38 }
      ],
      otherState: "blah"
    }
  )

  const switchNameHandler = () => {
    //console.log('was clicked')
    setPersonsState({
      persons: [
        { name: 'Maxamilian', age: 30 },
        { name: 'Max2', age: 35 },
        { name: 'Max3', age: 38 }
      ] 
    })
  }

  return (
    <div className="App">
      <h1>Hi I'm a react app</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
    
  
}

export default app;