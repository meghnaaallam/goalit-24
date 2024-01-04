import './App.css';
import DisplayBucketList from './components/DisplayBucketList.js';
import AddGoals from './components/AddGoals.js';
import NavBar from './components/Navbar.js';
import DisplayCategory from './components/DisplayCategory.js';

function App() {
  return (
    <div className="App">
             <NavBar/>
             <AddGoals/>
             <DisplayCategory/>
                 <DisplayBucketList/>
    </div>
  );
}

export default App;
