import { Routes, Route } from 'react-router-dom';
import MainDrawer from '@/components/MainDrawer/MainDrawer';
import Login from '@/pages/Auth/Login';
import Home from '@/pages/Home/Home';
import Ativo from '@/pages/Ativo/Ativo';

const Routing = () => {
  return (
    <Routes>
      <Route path="/home" element={<MainDrawer> <Home /> </MainDrawer>} />
      <Route path="/ativo" element={<MainDrawer> <Ativo /> </MainDrawer>} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
};

export default Routing;
