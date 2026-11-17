import { useState } from 'react';
import * as a from '../assets';
import {SectionHeading} from './SectionHeading';
const plans = [
 {description:'Щадящее питание при гастрите, язвенной болезни и после операций на желудке',indication:'Язва, послеоперационный период',icon:a.imgGroup,color:'#fff2cb'},
 {description:'Питание для стимуляции пищеварения при пониженной кислотности желудка',indication:'Гастрит с пониженной кислотностью',icon:a.imgFrame,color:'#e8f2f2'},
 {description:'Рацион, направленный на улучшение работы кишечника',indication:'Запоры, нарушение перистальтики',icon:a.imgGroup2,color:'#ebfadc'},
 {description:'Максимально щадящее питание при острых заболеваниях кишечника',indication:'Диарея, обострения ЖКТ',icon:a.imgDDDD1,color:'#fbeaf5'},
 {description:'Диета для восстановления печени и желчевыводящих путей',indication:'Гепатит, холецистит',icon:a.imgGroup3,color:'#eff4fe'},
 {description:'Питание для нормализации обмена веществ и снижения уровня мочевой кислоты',indication:'Подагра, мочекаменная болезнь',icon:a.imgGroup4,color:'#fbe8de'},
];
export function MealPlans({selected,onSelect}:{selected:number;onSelect:(id:number)=>void}) {
 const [page,setPage]=useState(0);
 return <section className="meal-plans" id="tables"><div className="container">
 <SectionHeading label="Столы Певзнера" description="Найдите свой стол и начните соблюдать диету без ошибок">Выберите план питания, подходящий <span>вашему диагнозу</span></SectionHeading>
 <div className="plans-grid">{plans.map((plan,i)=><article key={i} className={'meal-card '+(Math.floor(i/2)===page?'mobile-visible':'')}>
  <div><div className="meal-title"><div className={'meal-icon icon-'+(i+1)} style={{background:plan.color}}><img src={plan.icon} alt=""/></div><h3>Стол №{i+1}</h3></div><p className="meal-description">{plan.description}</p></div>
  <div><p className="indication">{plan.indication}</p><button className="plan-button" aria-pressed={selected===i+1} onClick={()=>{onSelect(i+1);document.getElementById('formats')?.scrollIntoView({behavior:'smooth'})}}>Подобрать рацион</button></div>
 </article>)}</div>
 <div className="pagination" aria-label="Столы питания"><button className="page-arrow" aria-label="Предыдущие столы" disabled={page===0} onClick={()=>setPage(page-1)}><img src={a.imgChevronLeft} alt=""/></button><div className="dots">{[0,1,2].map(i=><button key={i} className={page===i?'current':''} aria-label={'Страница '+(i+1)} aria-current={page===i?'page':undefined} onClick={()=>setPage(i)}/>)}</div><button className="page-arrow" aria-label="Следующие столы" disabled={page===2} onClick={()=>setPage(page+1)}><img src={a.imgChevronRight} alt=""/></button></div>
 </div></section>;
}
