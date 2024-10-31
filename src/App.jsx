import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data.js';
import HeaderAdd from './components/Header/Header.jsx'
import { CoreConcept } from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js'



function App() {
  // let tabContent = 'component';
  const [selectedTopic, // change what
    setSelectedTopic// updated to what
  ] = useState(''); //Please click a button = what should be the default value or start value

  console.log("APP_COMPONENT_RENDERING");
  let tabContent = <p> Please click a button</p>;
  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>
        {EXAMPLES[selectedTopic].title}
      </h3>
      <p>
        {EXAMPLES[selectedTopic].description}
      </p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>;
  }
  function handleSelect(selectedButton) {
    console.log("selected handle Select for button => " + selectedButton);
    // tabContent = selectedButton;
    // console.log("updated tabContent => "+ tabContent );
    console.log("#initial_selected topic is " + selectedTopic);
    setSelectedTopic(selectedButton)
    console.log("#after_setCurrentTopic_ :selected topic is " + selectedTopic);
    console.log("setCurrentTopic topic is " + setSelectedTopic);
  }

  return (
    <div>
      <HeaderAdd />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts 1</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={function () { handleSelect('jsx') }}>Jsx</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}

        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;