import reactImg from '../../assets/react-core-concepts.png';
import './Header.css'

export default function HeaderAdd(){
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