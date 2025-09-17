import '../App.css'
import TabButton from './TabButton.jsx';


function App() {

  function handleClick(ten) {
    alert(`You clicked ${ten}!`);
  }
  return (
    <>
      <menu>
        {/* 
      Nếu chỉ truyền function gốc (ví dụ handleClick) → không cần arrow function.
      Nếu cần truyền thêm tham số (ví dụ 'Home', 'About') → phải bọc trong arrow,
        nếu không sẽ bị gọi ngay khi render, không phải khi click.
        */}
        <TabButton tenBatKy={() => { handleClick('Home') }}>Home</TabButton>
        <TabButton tenBatKy={() => { handleClick('About') }}>About</TabButton>
        <TabButton tenBatKy={() => { handleClick('contact') }}>Contact</TabButton>
      </menu>
    </>
  )
}
export default App

