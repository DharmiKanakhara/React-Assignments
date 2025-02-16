import './App.css';
import Compo1 from './Compo1';
import Counter from './Counter';
import Greeting from './Greeting';
import UserCard from './UserCard';
import WelcomeMessage from './WelcomeMessage';

function App() {
  return (
    <div className="App">
      <Compo1/>
      <Greeting name={"Dharmi"}/>
      <WelcomeMessage/>
      <UserCard name={"John Doe"} age={25} location={"USA"}/>
      <Counter/>
    </div>
  );
}

export default App;
