
import { useContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '.';
import './Style/App.css';
import AppRouter from './Components/AppRouter';
import Loader from './Components/Loader';
import Navbar from './Components/Navbar';

function App() {
  const { auth } = useContext(Context);
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <Loader />

  return (
    <div className="App">
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
