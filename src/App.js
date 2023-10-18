import './App.css';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className='flex w-full h-screen'>
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <SignIn/>
      </div>
    </div>
  );
}

export default App;
