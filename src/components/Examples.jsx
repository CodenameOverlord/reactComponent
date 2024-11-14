import { useState } from "react";
import { EXAMPLES } from "../data.js";
import  TabButton  from "./TabButton.jsx"
export default function Examples(){
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
    <section id="examples">
    <h2>Examples</h2>
    <menu>
      <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect('components')}>Component</TabButton>
      <TabButton isSelected={selectedTopic === 'jsx'} onSelect={function () { handleSelect('jsx') }}>Jsx</TabButton>
      <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
      <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
    </menu>
    {tabContent}

  </section>)
}