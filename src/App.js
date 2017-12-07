import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Navbar from './components/Navbar';


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Section />
  </div>
);

export default App;
