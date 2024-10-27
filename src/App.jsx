import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import HeaderAdd from './components/Header/Header.jsx'
import { CoreConcept } from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';




function App() {
  let tabContent = 'click a button to update text';
  console.log("APP_COMPONENT_RENDERING");
  function handleSelect(selectedButton){
    console.log("selected handle Select for button => "+ selectedButton );
    tabContent = selectedButton;
    console.log("updated tabContent => "+ tabContent );
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
            {tabContent}
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;