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
    loaded ? 
      <>
      {
        foundDocs.length > 0 ?
        <div className='flex columns-2'>
          foundDocs
        </div>
        :
        null
      }
        <div className='flex-gr columns-1'>
          <div><p className='text-2xl'>Options</p></div>
          <div>
            <Link to="/contactInfo">Contact Info</Link>
          </div>
          <div>
          <Link to="/newDocument">New Document</Link>
          </div>
        </div>
      </>
    : spinner
  );
}

export default App
