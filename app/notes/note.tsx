'use client';
import { useRouter } from 'next/navigation';

export default function Note({ note }: any) {
  const router = useRouter();
  const { id, title, content, created } = note || {};
  function hello(id:any) {
    var dlt = fetch('http://127.0.0.1:8090/api/collections/notes/records/'+id,{method: 'DELETE', cache: 'no-store' });
    console.log(id);
    router.refresh();
  }
  return (
      <div className='note'>
        <button type='button' onClick={()=>hello(id)} className="dlt">x</button>
        <h2>{title} </h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
  
  );
}
