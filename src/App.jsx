import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import HeaderAdd from './components/Header/Header.jsx'
import { CoreConcept } from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';




function App() {
  function handleSelect(){
    console.log("selected handle Select")
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
              <TabButton onSelect={handleSelect}>Component</TabButton>
              <TabButton onSelect={handleSelect}>Jsx</TabButton> 
              <TabButton onSelect={handleSelect}>Props</TabButton>
              <TabButton onSelect={handleSelect}>State</TabButton>
            </menu>
            Dynamic Content
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;