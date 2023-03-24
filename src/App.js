import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


// oi file gulo ekhane import kore na anle kaj korbe na ekhane(use korte parbo na)


// declaring a variable to use it in the template string {}
let num = 10;

// for styling creating an object with valid style property
const nameStyle = {
  color: 'white',
  backgroundColor: 'blue',
}

// creating an object to use this in templete string {} (without $ sign)
const obj = { name: 'sobuj', address: 'kuril' };


//basic
// function App() {
//   return (
//     <div className="App">
//       <div>
//         <h1 className='name'>Merajul Islam Sobuj</h1>
//         <h2 style={nameStyle}>ID:2014751167</h2>
//         <h3 style={nameStyle}>{obj.address}</h3>
//       </div>
//     </div>
//   );
// }

{/* direct props likhle '' dite hobe from array/object/api theke anle just {} use this */ }



//array of object
const singers =
  [
    { name: 'mafuz', job: 'singer' }, //akta singer object
    { name: 'agun', job: 'singer' }, //arekta singer object
    { name: 'pani', job: 'singer' },//arekta singer object
  ]



// created component(function) showing in UI using this main function

// atao akta component app component ata hole shob alada alda component r shomusti mane pura page tah tar moddhe onk component thake choto choto
function App() {
  const nayoks = ['bappa', 'rubel', 'jashim', 'anwar', 'razzak'];
  return (
    <div className="App">

      {/* creating a eventhandler component (make it-in another function but use it here)*/}
      <Counter></Counter>




      {/* ai component keo akhn dynamically banabo whether from API/array/object/array of object joto thakbe totogulay
      auto hoye UI te dekhabo */}
      {/* dynamically jah pathabo shob props hishebei pathate hobe */}
      {/* {names: 'bappa'} ai puratai akta object hobe */}
      {/* dynamic r kaj korle alada bracket use kore korbo */}
      {/* <Person2 names={nayoks[0]}></Person2> */}

      {/* array k loop chaliye component boshiye dile shobgula peye jabo set o hoye jabe ai tag diye */}

      {
        nayoks.map(nayok => <Person2 names={nayok}></Person2>)
      }



      {/* array of object k jebhabe dynamically dekhate pari */}
      {
        singers.map(singer => <Person3 name={singer.name} job={singer.job}></Person3>)
        //ekhane singer.name manei name (property) shei name property accces korbo pura object/props.name diye in component
      }




      {/* direct props likhle '' dite hobe from array/object/api theke anle just {} use this */}
      {/* this is how we make a own component in react */}
      {/* using a functionname as a tag & get what returns that function(html's)  */}
      {/* joto component banano lage baniye ekhane just diye dibo sheta UI t chole ashbe */}

      {/* making props(attribute) by our own it will be send to that component as object & get that object & use there{} 
      there but showing in UI here by using that component(function) by changing dynamic data - simillar in look diff in data */}

      <Person name="sakib" num="01718...."></Person>
      <Person name="rubel"></Person>
      <Person name="miraj"></Person>

      {/* jei componant call/lekha hobe shei component r props jeye sheta show hobe */}


      {/* boro hater function gular nam likhbo jate sheta tag e lekhle bujha jay ata html tag na ata amdr banano tag */}
      <h1>Another Component</h1>


    </div>
  );
}




//event handler component using setstate function (example of state)
// akta function/component r vhitor arekta funciton hobe then return korbo
// useStake e holo react-hook

function Counter() {
  const [count, setCount] = useState(10); // usestate akta array dey shei array k amra destructuring korbo (count holo value ta setcount holo functon ta)

  //arekta function lekhbo jar moddhe ami count k bariye sheta setCount function e parameter hishebe padhiye dibo 
  //tahole shei function e ager value r porer value 2tai eshee porbe

  const increseCount = () => {
    const newcount = count + 1;
    setCount(newcount);
  }

  const decreaseCount = () => {
    const newcount = count - 1;

    // if (newcount < 0) {
    //   alert('count is 0')
    //   return
    // }

    setCount(newcount);
  }

  //deta UI t dekhabe shetai return korbe ekhanei JSX(react r html) lekhte hobe
  return (
    <div className='person'>
      <h1>Count:{count}</h1>
      <button onClick={increseCount}>Increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}





// creating another function to make a component (will use this as a new tag in the main function called App )
//to get that props(attribute)using props property then using this
// props/banano attribute gula object hishebe ekhane ashbe
function Person(props) {
  // console.log(props);
  //return r line thekei start korte hobe next theke kaj korbe na kichu
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>{props.num}</p>
      {/* <h1>Sakib al hasan</h1> */}
      {/* <p>Profession: Cricketer</p> */}
    </div>
  )
}


// component for array
// creating another funtion(component) and use it in the main funciton as a tag
// attribute/props use korle object style e data get korte hobe
function Person2(props) {
  // console.log(props);
  return (
    <div className='person'>
      <h1>{props.names}</h1>
    </div>
  )
}



//component for array of object 
function Person3(props) {
  // console.log(props);
  return (
    //dynamic data gula always object hishebei pabo (props ta holo pura object name ta holo tar property (jeta k pathalm) )
    <div className='person2'>
      <h1>{props.name}</h1>
      <h1>{props.job}</h1>
    </div>
  )
}










export default App;
