/* eslint-disable */ 
import Board from './Board';


const reactIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
      alt="react icon"
    />
  );
  const JSIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/600px-JavaScript-logo.png?20120221235433"
      alt="JS icon"
    />
  );
  const CSSIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png?20210705212817"
      alt="CSS3 icon"
    />
  );
  const HTMLIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/512px-HTML5_Badge.svg.png?20110131171049"
      alt="HTML5 icon"
    />
  );
  const SQLIcon = (
    <img
      src="https://upload.wikimedia.org/wikiversity/en/e/ee/MySQL_Logo.png?20210331222648"
      alt="SQL icon"
    />
  );
  const pythonIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/115px-Python-logo-notext.svg.png?20220821155029"
      alt="Python icon"
    />
  );
  const cIcon = (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/306px-ISO_C%2B%2B_Logo.svg.png?20170928190710"
      alt="C icon"
    />
  );




export default function Project() {
    return (
      <div className="Experience">
        <accent>011. Projects</accent>
        <br/>
        <Board
            image=<img src={require('./images/clock.png')} alt="project"/>
            title="Minimalist Clock"
            tech= {[reactIcon, JSIcon, CSSIcon, HTMLIcon]}
            description= "My first full website made using React."
            link= "https://lawj4.github.io/Minimalist-Clock/"
        />
        <Board
            image=<img src={require('./images/default.png')} alt="project"/>
            title="Air Quality Index"
            tech= {[pythonIcon]}
            description= "Detects air quality given a location query or latitude & longitude."
            link= "https://github.com/lawj4/Air_Quality_Index"
        />
        <Board
            image=<img src={require('./images/default.png')} alt="project"/>
            title="Wordle"
            tech= {[pythonIcon]}
            description= "Recreated a text-based version of the popular web game."
            link= "https://github.com/lawj4/wordle"
        />
      </div>
    );
  }
  