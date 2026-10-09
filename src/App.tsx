import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutPage from './pages/AboutPage';
import TasksPage from './pages/TasksPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TasksPage />} />
        <Route path="sobre" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
