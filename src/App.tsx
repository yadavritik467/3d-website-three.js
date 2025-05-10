
import { Route, Routes } from 'react-router-dom';
import './App.css'; // Make sure this is imported
import CanvasEle from './pages/CanvasEle';
import Room from './pages/Room';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>

      <Routes>
        <Route path='' element={<CanvasEle />} />
        <Route path='/room/:roomID' element={<Room />} />
      </Routes>

    </div>
  );
}
