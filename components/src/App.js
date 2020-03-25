import React from 'react';
import Component from './Component'
import C1 from './C1'
import C2 from './C2'

function App() {
  return (
    <div>
      <C1 text="This is C1"/>
      <Component c1={<C1 text="This is C1"/>}>
        <C2 text="This is C2"/>
      </Component>
    </div>
  );
}

export default App;
     
