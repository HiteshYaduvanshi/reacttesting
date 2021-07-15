import React, { useState } from 'react';
import FaceIcon from '@material-ui/icons/Face';
import Table from './Table';
import GetAppIcon from '@material-ui/icons/GetApp';
import excel from './excel.png'
import reacttest from './react test.csv'


function Maindata() {
  const [expand,setexpand]= useState(false);
  const expandit =()=>{
    setexpand(!expand);
  };
  return (
    <>
    <div className="header" >
    <h5>Executing Agri Input Orders</h5>
    <h5 style={{marginLeft:"280px"}}>Batched By</h5>
    </div><hr />
    <div className='data'>
    <button className='data_btn' onClick={expandit}>AGBUY1345342_545 </button>
    <div className='batched'>
    <FaceIcon  className='face'/>
    <div>
    <p>Alex Lee <br /> Mon,10 june , 10:55 Am</p>
    </div>
     </div>
    <button className="data_btn" ><img src={excel} alt="seed" className='table_img' /><a href={reacttest} download> RFOLIST_86757675 <GetAppIcon/></a>  </button>
    </div>
    {expand?  <Table />: null}
    <div className='data'>
    <button className='data_btn'>AGBUY1345342_545</button>
    <div className='batched'> 
    <FaceIcon  className='face'/>
    <div>
    <p>Alex Lee <br /> Mon,10 june , 10:55 Am</p>
    </div>
     </div>
     
    <button className="data_btn"><img src={excel} alt="excel" className='table_img' /> <a href={reacttest} download> RFOLIST_86757675 <GetAppIcon/></a></button>
    </div>
    </>
  );
}

export default Maindata;
