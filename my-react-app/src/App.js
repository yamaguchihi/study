import './App.css';
import * as UtilComponents from './components';
import Header from './components/header';
import Contact from './components';

function App() {
  return (
    <div className="main-container">
      <UtilComponents.Header />
      <UtilComponents.About />
    </div>
  );
}

// my-react-app/public
export default App;
