// import PocketBase from 'pocketbase';
import Link from 'next/link';
import './Notes.module.css';
import CreateNote from './CreateNote';
import Note from './note';

// export const dynamic = 'auto',
//   dynamicParams = true,
//   revalidate = 0,
//   fetchCache = 'auto',
//   runtime = 'nodejs',
//   preferredRegion = 'auto'





async function getNotes() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' });
  const data = await res.json();
  return data?.items as any[];
}


export default async function NotesPage() {
  const notes = await getNotes();

  return(
    <div>
    <CreateNote />
      <div className='grid'>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>

    </div>
  );
}

