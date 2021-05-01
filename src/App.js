import logo from './logo.svg';
import './App.css';
import EmailBlock from './EmailBlock';
import PassWordBlock from'./PassWordBlock';
import SigninButton from './SigninButton';


function App() {
  return (
    <div class="container">
      <div class="block">
        {
          EmailBlock()
        }
        </div>
        <div class="block">      
          {
            PassWordBlock()
          }
        </div>
        <div class="block">
          {
            SigninButton()
          }
        </div>
      </div>
  );
} 

export default App;
