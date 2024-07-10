import './news.css';

export const News = () => {
  const list = [
    {
      date: '2020.XX.XX',
      title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.11』に掲載していただきました。',
    },
    {
      date: '2020.XX.XX',
      title: 'ＸＸ月ＸＸ日から写真集「ＸＸＸＸＸＸＸ」の販売を開始します。',
    },
    {
      date: '2019.XX.XX',
      title:
        '【イベント開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト',
    },
    {
      date: '2019.XX.XX',
      title: 'デザイン雑誌「ＸＸＸＸＸＸ Vol.10』に掲載していただきました。',
    },
    {
      date: '2019.XX.XX',
      title:
        '【個展開催のお知らせ】テキストテキストテキストテキストテキストテキストテキスト',
    },
  ];

  return (
    <div className="news-area-container">
      <h2 className="news-area-header">News</h2>
      <div className="news-area-contents">
        {list.map((item) => {
          return (
            <div className="news-area-content">
              <div className="news-date-label">{item.date}</div>
              <div className="news-title">{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
// () => {} 無名関数
// function name () {}
