import '../App.css'
import TabButton from './TabButton.jsx';


function App() {

  function handleClick(ten) {
    alert(`You clicked ${ten}!`);
  }
  return (
    <>
      <menu>
        <TabButton tenBatKy={() => { handleClick('Home') }}>Home</TabButton>
        <TabButton tenBatKy={() => { handleClick('About') }}>About</TabButton>
        <TabButton tenBatKy={() => { handleClick('contact') }}>Contact</TabButton>
      </menu>
    </>
  )
}
export default App
