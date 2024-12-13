// import logo from './logo.svg';
import Sidebar from '../../components/sidebar/Sidebar'
import TableComponent from '../../components/table/Table';
import './List.css';

function Add() {
  return (
    <div className="App">
      <Sidebar/>
      <section className='secundary_section list_div_section'>
        <div>
          <TableComponent className='table_div'/>
        </div>
        <div>
          <TableComponent className='table_div'/>
        </div>
      </section>
    </div>
  );
}

export default Add;
