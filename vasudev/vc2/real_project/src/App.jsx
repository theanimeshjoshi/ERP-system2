import Sidebar from './components/sidebar';
import Header from './components/header';
import VideoGrid from './components/videoGrid';
import ActionButtons from './components/action';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <VideoGrid />
      <ActionButtons />
    </div>
  );
}

export default App;