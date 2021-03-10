import React from 'react';
import Data from './people/data';
import List from './people/List';
import './App.css';


function App() {

const[people,setpeople] = React.useState(Data)




  return (
    <div className="main">
      <section className="container">

        
        <h3>{people.length}birthday Today</h3>
        <List people={people}/>
        
        <button onClick={()=>setpeople([])}>Clear All</button>

      </section>
    </div>
  )
}

export default App
