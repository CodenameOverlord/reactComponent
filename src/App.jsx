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

function CoreConcept (props){
  return (
  <li>
    <img src={componentsImg} alt={componentsImg} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>

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
            <CoreConcept
            title = {CORE_CONCEPTS[0].title}
            description = {CORE_CONCEPTS[0].description}
            image = {CORE_CONCEPTS[0].image}
            />            
            <CoreConcept
            title = {CORE_CONCEPTS[1].title}
            description = {CORE_CONCEPTS[1].description}
            image = {CORE_CONCEPTS[1].image}
            />
            <CoreConcept
            title = {CORE_CONCEPTS[2].title}
            description = {CORE_CONCEPTS[2].description}
            image = {CORE_CONCEPTS[2].image}
            />            
            <CoreConcept
            title = {CORE_CONCEPTS[3].title}
            description = {CORE_CONCEPTS[3].description}
            image = {CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
