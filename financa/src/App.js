// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import BarComponent from './components/BarChart/BarChart'
import PieComponent from './components/pieChart/PieChart';
import TableComponent from './components/table/Table';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <section className='main_section'>
        <BarComponent/>
        <PieComponent/>
      </section>
      <section className='secundary_section table_main_section'>
        <div><TableComponent/></div>
        <div><TableComponent/></div>
      </section>
    </div>
  );
}

export default App;
