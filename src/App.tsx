import React, { useEffect, useState } from 'react';
import './App.css';
import AdviceComponent from './Components/AdviceComponent';
import Advice from './Interfaces/interface';
import AdviceApi from './DataServices/DataService';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [adviceData, setAdviceData] = useState<Advice>();

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const fetchedData = await AdviceApi();
    setAdviceData(fetchedData);
  }

  const handleFetchAdviceClick = () => {
    fetchData();
  }

  return (
    <div className="App">

      {/* Make sure to only look at 1440px and 375px :3 */}

      <div className='cardbg lgsize border border-0 rounded-4 px-4 d-none d-lg-block position-relative'>
        {
          adviceData && <AdviceComponent id={adviceData?.slip.id} advice={adviceData?.slip.advice} />
        }
        <div className='padbot'>
          <svg width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z" /><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>

          <div className='col-12'>
            <button onClick={handleFetchAdviceClick} className='border-0 border btncolor position-absolute' style={{ top: '90%', left: '44%' }}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
            </button>
          </div>

        </div>
      </div>

      <div className='cardbg smsize border border-0 rounded-4 d-block d-lg-none position-relative'>
        <div className='px-4'>
        {
          adviceData && <AdviceComponent id={adviceData?.slip.id} advice={adviceData?.slip.advice} />
        }
        </div>
        <div className='padbot'>
          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
        
          <div className='col-12'>
            <button onClick={handleFetchAdviceClick} className='border-0 border btncolor position-absolute' style={{ top: '90%', left: '39%' }}>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
