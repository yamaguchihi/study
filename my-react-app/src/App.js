
import './App.css';
import Header from './components/Header/header';
import Siteimage from './components/image/siteimage';
import About from './components/about/aboutare';
import NewsArea from './components/news/newsArea';
import Worksarea from './components/works/worksarea';
import Submittion from './components/submittion/submit';

export function App (){
  return (
      <div className="tittle">
        <Header />
        <Siteimage />
        <About />
        <NewsArea />
        <Worksarea/>
        <Submittion />
      </div>
      
  )
}






export default App;
