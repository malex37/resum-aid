import { useEffect, useState } from 'react';
import './App.css'
import Spinner from './components/spinner';
import { loadStored } from './methods/loadStored';
import './assets/output.css'
import { Link } from 'react-router-dom';

function App() {
  let foundDocs: JSX.Element[] = [];
  let [loaded, setLoaded] = useState(false);
  const spinner = <Spinner />;
  useEffect(() => {
    console.info('Loading local data');
    loadStored().then(dbEntries => {
      if (dbEntries.length === 0) {
        setLoaded(true);
        return;
      }
      setLoaded(true);
      dbEntries.map(entry => {
        foundDocs.push(
        <>
          <div>{ entry.documentName }</div>
          <div>{ entry.createDate.toDateString() }</div>
        </>);
      });
    });
  }, []);
  return (
    <>
    { !loaded ? spinner
      : 
      <>
      {
        foundDocs.length > 0 ?
        <div className='flex columns-2'>
          foundDocs
        </div>
        :
        null
      }
        <div className='flex-gr columns-2'>
          <div><p className='text-2xl'>Create a new Document</p></div>
          <div></div>
          <div></div>
          <Link to="/new">New Document</Link>
        </div>
      </>
    }
    </>
  )
}

export default App
