import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import HeaderAdd from './components/Header/Header.jsx'
import { CoreConcept } from './components/CoreConcepts.jsx';





function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
