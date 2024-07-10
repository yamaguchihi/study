import './works.css';

export const Works = ({ imgs }) => {
  return (
    <div className="works-container">
      <h2 className="works-title">Works</h2>
      <div className="works-contents-container">
        {imgs.map((item, index) => {
          return <img key={index} className="works-img" src={item} alt="" />;
        })}
      </div>
    </div>
  );
};
