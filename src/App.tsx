import { useEffect, useState } from 'react';
import './App.css'
import Spinner from './components/spinner';
import { loadStored } from './methods/loadStored';
import './assets/output.css'
import NavMenu from './components/NavMenu';
import { useNavigate } from 'react-router-dom';

function App() {
  let foundDocs: JSX.Element[] = [];
  let [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
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
    <div className='w-full h-full'>
    <NavMenu />
    {
    loaded ? 
        foundDocs.length > 0 ?
        <div className='flex columns-2'>
          foundDocs
        </div>
        :
        <div className='pt-6 grid grid-cols-1 h-full justify-items-center space-y-5 gap-6'>
          <div className='pt-3 grow-0 align-middle'>
            <div>No documents :(</div>
          </div>
          <div>
                <button
                  className="border-2 border-purple-500 focus:outline-none rounded bg-white row-span-[1/2]"
                  type="submit"
                  onClick={()=>{ navigate('/newDocument'); }}
                >
                  Create a new document
                </button>
          </div>
        </div>
        : spinner
      }
    </div>
  );
}

export default App
