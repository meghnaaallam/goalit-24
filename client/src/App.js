import './App.css';
import DisplayBucketList from './components/DisplayBucketList.js'
import AddGoals from './components/AddGoals.js'
import NavBar from './components/Navbar.js'

function App() {
  return (
    <div className="App">
             <NavBar/>
             <AddGoals/>
                 <DisplayBucketList/>
    </div>
  );
}

export default App;
