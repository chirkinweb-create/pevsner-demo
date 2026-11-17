import {useEffect,useRef,useState} from 'react';
export function ContactDialog({kind,onClose}:{kind:'contact'|'reviews'|null;onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);
 // Preserve the content while the native dialog finishes its exit transition.
 const [visibleKind,setVisibleKind]=useState(kind);
 useEffect(()=>{
  const element=dialog.current;
  if(!element)return;
  if(kind){
   setVisibleKind(kind);
   element.dataset.instant=String(document.activeElement?.matches(':focus-visible')??false);
   if(!element.open)element.showModal();
  }else element.close();
 },[kind]);
 const close=()=>{
  if(dialog.current)dialog.current.dataset.instant='false';
  onClose();
 };
 return <dialog ref={dialog} onCancel={()=>{if(dialog.current)dialog.current.dataset.instant='true';onClose()}} onClick={e=>{if(e.target===e.currentTarget)close()}} aria-labelledby="dialog-title"><button className="dialog-close" onClick={e=>{if(e.detail===0){if(dialog.current)dialog.current.dataset.instant='true';onClose()}else close()}} aria-label="Закрыть">×</button><h2 id="dialog-title">{visibleKind==='reviews'?'Наш рейтинг:':'Заказать звонок'}</h2>{visibleKind==='reviews'?<img className="dialog-stars" src="./assets/97f06.svg" alt="5 звёзд"/>:<a className="button green" href="tel:+74958449077">8 (495) 844-90-77</a>}</dialog>;
}
