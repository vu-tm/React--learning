import { useState } from 'react';
import '../App.css'
import '../index.css'
import TabButton from './TabButton.jsx';


function App() {
  const [selectBtn, setSelectBtn] = useState("Click button"); //useState

  function handleClick(ten) {
    // alert(`You clicked ${ten}!`);
    setSelectBtn(ten);
  }
  return (
    <>
      <section id="examples">
        <h2>Examples</h2>
        <menu>
          {/* 
      Nếu chỉ truyền function gốc (ví dụ handleClick) → không cần arrow function.
      Nếu cần truyền thêm tham số (ví dụ 'Home', 'About') → phải bọc trong arrow,
        nếu không sẽ bị gọi ngay khi render, không phải khi click.
        */}
          <TabButton
            isSelected={selectBtn === 'Home'} // Nếu === thì giá trị isSelected là true
            tenBatKy={() => { handleClick('Home') }}>
            Home
          </TabButton>
          <TabButton
            isSelected={selectBtn === 'About'}
            tenBatKy={() => { handleClick('About') }}>
            About
          </TabButton>
          <TabButton
            isSelected={selectBtn === 'contact'}
            tenBatKy={() => { handleClick('contact') }}>
            Contact
          </TabButton>
        </menu>
        {selectBtn}  {/* Hiển thị giá trị state */}
      </section>
    </>
  )
}
export default App

