import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import HeaderAdd from './components/Header/Header.jsx'
import { CoreConcept } from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';




function App() {
  let tabContent = 'click a button to update text';
  const [selectedTopic, // change what
     setSelectedTopic// updated to what
  ] = useState('Please click a button'); //Please click a button = what should be the default value or start value
  console.log("APP_COMPONENT_RENDERING");
  function handleSelect(selectedButton){
    console.log("selected handle Select for button => "+ selectedButton );
    // tabContent = selectedButton;
    // console.log("updated tabContent => "+ tabContent );
    console.log("#initial_selected topic is "+selectedTopic);
    setSelectedTopic(selectedButton)
    console.log("#after_setCurrentTopic_ :selected topic is "+selectedTopic);
    console.log("setCurrentTopic topic is "+setSelectedTopic);
  }

  return (
    <div>
      <HeaderAdd />
      <main>
        <section id = "core-concepts">
          <h2>Core Concepts 1</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]}/>            
            <CoreConcept {...CORE_CONCEPTS[1]}/>            
            <CoreConcept {...CORE_CONCEPTS[2]}/>            
            <CoreConcept {...CORE_CONCEPTS[3]}/>            
          </ul>
        </section>
        <section id = "examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={()=>handleSelect('Component')}>Component</TabButton>
              <TabButton onSelect={function (){handleSelect('JSX')}}>Jsx</TabButton> 
              <TabButton onSelect={()=>handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={()=>handleSelect('State')}>State</TabButton>
            </menu>
            {selectedTopic}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;