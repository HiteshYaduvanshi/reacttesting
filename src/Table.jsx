import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LaunchIcon from '@material-ui/icons/Launch';
import seed from './seeds.png'
import fertilizer from './fertilizer.png'
import pesticide from './pesticide.png'


function Table() {
  return (
    <><div className="table">
    <table className="table table-striped table-hover table-bordered border-dark">
    <thead className='table-dark'>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Agri input category</th>
      <th scope="col">Product Image</th>
      <th scope="col">Product Description</th>
      <th scope="col">Order Quantity</th>
    </tr>
  </thead>
  <tbody className='table-striped'>
    <tr>
      <th scope="row">1</th>
      <td>Seed/Seedlings</td>
      <td><img src={seed} alt="seed" className='table_img' /></td>
      <td>Chilli Sataka 651(1500 seeds)</td>
      <td>26</td>
      <td><button onClick={()=>alert('some details here')} className='lunch_btn'><LaunchIcon/></button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Nutrients/Fertilizer</td>
      <td><img src={fertilizer} alt="fertilizer" className='table_img' /></td>
      <td>Acme Brand Fert A/B Set -50kg</td>
      <td>114</td>
      <td><button onClick={()=>alert('some details here')} className='lunch_btn'><LaunchIcon/></button></td>
    </tr> 
    <tr>
      <th scope="row">3</th>
      <td>Pesticide/Fungicide</td>
      <td><img src={pesticide} alt="fertilizer" className='table_img' /></td>
      <td>Valiants ME(Methyl Eugenol) 30ml</td>
      <td>40</td>
      <td><button onClick={()=>alert('some details here')} className='lunch_btn'><LaunchIcon/></button></td>
    </tr>
  </tbody>
    </table>
    </div>
    </>
  );
}

export default Table;
