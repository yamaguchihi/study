import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <div className="container">
   <div className="header">
    <div className="left-tittle">
     <div>
      WCB CAFE
     </div>
    </div>

      <ul className="right-tittle">
        <li>News</li>
        <li>Menu</li>
        <li>Content</li>
      </ul>
   </div>
   <div>
    <h1>We'll Make Your Day</h1>
    {/* <img src></> */}
    <div>画像添付</div>
   </div>
   <div className="About">
    <h2>About Cafe</h2>
    <p>WCB cafeは、無添加の厳選食材とおしゃれな店内の雰囲気が魅力のカフェです。心と体に優しい、それでいて飽きの来ない空間をご用意しています。素材の本来のおいしさを引き出したメニューを楽しみながら、癒しの時間をお過ごしください。</p>
   </div>
   <div className="menu">
   
   </div>
  </div>
  );
}

export default App;
