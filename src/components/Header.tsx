import { Logo } from './Logo';
import * as a from '../assets';
export function Header({onContact}:{onContact:()=>void}) {
 const nav = ['Меню','Стоимость','Акции','Отзывы','О нас','Вопросы','Доставка','Контакты'];
 return <header className="site-header container">
  <div className="header-top"><a href="#" aria-label="Певзнер — главная"><Logo/></a>
  <p className="delivery">Доставка питания<br/>в Москве и МО</p>
  <div className="socials">{[a.imgSocials,a.imgSocials1,a.imgSocials2,a.imgSocials3].map((src,i)=><button key={src} onClick={onContact} aria-label={['ВКонтакте','Telegram','Одноклассники','Видео'][i]}><img src={src} alt=""/><img className="social-hover" src={src.replace('.svg','-hover.svg')} alt=""/></button>)}<button className="messenger" onClick={onContact} aria-label="Мессенджер"><img src={a.imgX00201} alt=""/></button></div>
  <a className="phone" href="tel:+74958449077"><img src={a.imgPhone} alt=""/>8 (495) 844-90-77</a>
  <button className="callback" onClick={onContact}>Заказать звонок</button>
  <button className="account" onClick={onContact} aria-label="Личный кабинет"><img src={a.imgEllipse} alt=""/><img className="person" src={a.imgGroup5} alt=""/></button></div>
  <nav aria-label="Основная навигация">{nav.map((text,i)=><a key={text} href={['#formats','#formats','#formats','#reviews','#hero','#tables','#hero','#contacts'][i]} onClick={i===7?e=>{e.preventDefault();onContact()}:undefined}>{text}</a>)}</nav>
 </header>;
}
