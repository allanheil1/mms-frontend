import { Routes, Route } from 'react-router-dom';
import Register from '@/pages/Auth/Register';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import MainDrawer from '@/components/MainDrawer/MainDrawer';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<MainDrawer> <Home /> </MainDrawer>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Routing;
