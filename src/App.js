import './App.css';
import MyProfile from './profile/profile';

function App() {
  return (
      <div className="App">
        <div style={{background: "yellow"}}>
        <MyProfile fullName="Full Name: Linus Nwankwo" proffession="Proffession: Student" bio= "Bio: GoMycode Student"/>
        </div>
      </div>
  );
}

export default App;
