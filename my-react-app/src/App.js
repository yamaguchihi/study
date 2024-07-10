import './App.css';
import * as UtilComponents from './components';

function App() {
  return (
    <div className="main-container">
      <UtilComponents.Header />
      <UtilComponents.About />
      <UtilComponents.Works
        imgs={[
          '/images/logo192.png',
          '/images/logo192.png',
          '/images/logo192.png',
          '/images/logo192.png',
          '/images/logo192.png',
          '/images/logo192.png',
        ]}
      />
      <UtilComponents.News />
    </div>
  );
}

// my-react-app/public
export default App;
