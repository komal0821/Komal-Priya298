// import logo from './logo.svg';
// import './App.css';

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

// export default App;


// Import your components here
import PostForm from './PostForm';
import GetRequest from './GetRequest';

function App() {
  return (
    <div className="App">
      <h1>BFHL App</h1>
      <PostForm />
      <GetRequest />
    </div>
  );
}

export default App;
