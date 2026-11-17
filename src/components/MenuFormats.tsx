import {useState} from 'react';
import * as a from '../assets';
import {SectionHeading} from './SectionHeading';
export function MenuFormats(){
 const [premium,setPremium]=useState(false);
 return <section className="formats container" id="formats">
 <SectionHeading label="Два вида меню" description="Два формата питания — выберите комфортный уровень вкуса и разнообразия">Выберите подходящий формат — оба варианта строго <span>соответствуют лечебным диетам</span></SectionHeading>
 <div className="format-grid">
 {[false,true].map(isPremium=><article key={String(isPremium)} className={'format-card '+(premium!==isPremium?'muted':'')}>
 <div className={'format-photo '+(!isPremium?'standard-photo':'')}><img src={isPremium?a.imgRectangle:a.imgRectangle1} alt={isPremium?'Премиальное меню':'Стандартное меню'}/><div className={'badges '+(isPremium?'green':'yellow')}><span>{isPremium?'Премиум':'Стандарт'}</span><span>{isPremium?'От 3190 ₽':'от 1590 ₽'}</span></div></div>
 <div className="format-body"><div><h3>{isPremium?'Премиальное меню':'Стандартное меню'}</h3><p>{isPremium?'Ресторанный уровень подачи и вкуса с соблюдением всех медицинских требований. Меню приближено к среднезерноморской диете с использованием морепродуктов и других дорогих продуктов.':'Сбалансированное лечебное питание из качественных продуктов. Идеальный вариант для ежедневного рациона по диете Певзнера'}</p></div><button className={'button '+(isPremium?'green':'yellow')} aria-pressed={premium===isPremium} onClick={()=>setPremium(isPremium)}>{premium===isPremium?'Выбрано':'Выбрать рацион'}</button></div>
 </article>)}
 <button className="swap" onClick={()=>setPremium(!premium)} aria-label="Сменить формат меню"><img src={a.imgGroup1} alt=""/><img className="swap-hover" src="./assets/90399-hover.svg" alt=""/></button>
 </div></section>;
}
