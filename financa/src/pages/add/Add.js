// import logo from './logo.svg';
import Sidebar from '../../components/sidebar/Sidebar'
import './Add.css';
import DataGridComponent from '../../components/dataGrid/DataGrid';

function Add() {
  return (
    <div className="App">
      <Sidebar/>
      <section className='secundary_section datagrid_section'>
        <div><DataGridComponent props={{ title: 'Despesas fixas', route: '/fixed' }} /> </div>
        <div><DataGridComponent props={{ title: 'Despesas Variadas', route: '/variable' }} /> </div>
      </section>
    </div>
  );
}

export default Add;
