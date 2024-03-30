import logo from './logo.svg';
import './App.css';

const singers = [
  {name: 'Dr. Mahafuz', job: 'Doctor'},
  {name: 'Eva Rahman', job: 'singer'},
  {name: 'Agun', job: 'Sopno'},
  {name: 'Shuvro', job: 'Pathor'}
];

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jashim', 'Salman Shah'];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }
      {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="Kopila"></Person> */}
      <h4>New Component.</h4>
      <Friend name="Ajay Devgun" phone="017777"></Friend>
      <Friend name="Shakib Khan" phone="017777"></Friend>
    </div>
  );
}

function Person(props) {
  // console.log(props);
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h1>Name: {props.name}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
