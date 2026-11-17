import * as a from '../assets';
export function Hero({onReviews}:{onReviews:()=>void}) {
 return <section className="hero container" id="hero">
  <h1>Доставка лечебно-профилактического<br className="desktop-break"/> питания по столам <span>№1-15 Певзнера</span></h1>
  <p className="hero-description">Готовое лечебное питание по столам Певзнера — с учётом диагноза и рекомендаций врачей</p>
  <div className="hero-actions"><a className="button yellow" href="#tables">Выбрать и заказать</a><a className="button green" href="#formats">Посмотреть меню</a></div>
  <div className="gallery">
   <div className="gallery-tall photo-frame"><img src={a.imgRectangle6} alt="Лечебное питание с овощами"/></div>
   <div className="gallery-column"><div className="gallery-small photo-frame"><img src={a.imgRectangle5} alt="Готовое блюдо в контейнере"/></div><div className="bag-photo photo-frame"><img src={a.imgRectangle2} alt="Упаковка доставки Певзнер"/></div></div>
   <div className="gallery-tall photo-frame"><img src={a.imgRectangle4} alt="Рыба с овощами"/></div>
   <div className="gallery-column"><div className="gallery-small photo-frame"><img src={a.imgRectangle3} alt="Куриное филе с овощами"/></div><div className="reviews" id="reviews"><div><img className="yandex" src={a.imgYandexOfficialLogo1} alt="Яндекс"/><div className="rating"><span>Наш рейтинг:</span><img src={a.imgStars} alt="5 звёзд"/></div></div><button onClick={onReviews}>Все отзывы</button></div></div>
  </div>
 </section>;
}
