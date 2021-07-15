import AgriinputPurchase from './AgriinputPurchase'
import Maindata from './Maindata';

function Executing() {
  return (
    <>
    <div className="colums">
    <AgriinputPurchase/> <br />
    <div className='button_link'>
    <button className="btns">Undo Batch</button>
    <button className="btns">Assign Suppliers</button>
    <button className="btns disable">Generate PO</button>
    </div>
    <Maindata />
    </div>
    
    </>
  );
}

export default Executing;