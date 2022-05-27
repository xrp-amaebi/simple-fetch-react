import { Sidebar } from './components/SideBar';
import { Content } from './components/HomeScreen';

import './App.css';

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
