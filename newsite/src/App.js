import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
     <div classname="mainvisual">
       <img src="mainvisual.jpg" alt="メインビジュアル"></img>
     </div>
     <header classname="header">
       <h1>
        Wooden Jewelry
       </h1>
       <nav>
         <ul>
          <li>Concept</li>
          <li>Work</li>
          <li>Contact</li>
         </ul>
       </nav>
     </header>

    <div classname="container">
      <main>
        <section id="concept" className="content">
         <div className="img">
          <img></img>
         </div>
         <div className="text">
          <h2 className="section-tittle">私たちの考えるジュエリーとは</h2>
          <span className="section-tittle-en">Concept</span> 
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
         </div>
        </section>

        <section id="work" className="content">
          <div className="text">
            <h2 className="section-tittle">ハンドメイドにこだわる理由</h2>
            <span className=""section-tittle-en>Work</span>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          </div>
          <div className="img">
            <img></img>
          </div>
        </section>
      </main>

      <footer id="footer">
        <div className="logo">
          <img></img>
        </div>
        <p>&copy; 2021 Wooden Jewelry</p>
      </footer>
    </div>
    </div>
  );
}

export default App;
