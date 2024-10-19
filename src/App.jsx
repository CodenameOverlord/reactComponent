import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';

function HeaderAdd(){
  const description = reactDescription[getRandomInt(reactDescription.length-1)];
    return (      
    <header>
      <img src= {reactImg}
      // "src/assets/react-core-concepts.png" 
      alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {
          // reactDescription[getRandomInt(reactDescription.length-1)]
          description
        }
         React concepts you will need for almost any app you are
        going to build!
        Something extra
      </p>
    </header>
    );
}

const reactDescription = ["Fundamental ", "Crucial ", "Core "];
function getRandomInt(max){
  return Math.floor(Math.random()*(max+1));
}

function CoreConcept ({image, title, description}){
  return (
  <li>
    <img src= {image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>

  </li>)
}

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
