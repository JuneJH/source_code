import './App.css';
import Page from './components/测试fiber';
;


function App() {
  console.log(<Page/>)
  return (
    <div className="App">
      hello react!!!
      <Page/>
    </div>
  );
}

export default App;
