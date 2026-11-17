import {useState} from 'react';
import {Header} from './components/Header';
import {Hero} from './components/Hero';
import {MealPlans} from './components/MealPlans';
import {MenuFormats} from './components/MenuFormats';
import {ContactDialog} from './components/ContactDialog';
export default function App(){
 const [selected,setSelected]=useState(2);
 const [dialog,setDialog]=useState<'contact'|'reviews'|null>(null);
 return <><Header onContact={()=>setDialog('contact')}/><main><Hero onReviews={()=>setDialog('reviews')}/><MealPlans selected={selected} onSelect={setSelected}/><MenuFormats/></main><ContactDialog kind={dialog} onClose={()=>setDialog(null)}/></>;
}
