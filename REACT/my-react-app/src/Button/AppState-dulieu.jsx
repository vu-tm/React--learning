import '../App.css'
import '../index.css'
import '../../data2.js'
import TabButton from './TabButton.jsx';
import { Component, useState } from 'react';
import { EXAMPLES } from '../../data2.js';

function App() {
  const [selectBtn, setSelectBtn] = useState("components");
  // Gán giá trị mặc định là components để mặc định chạy components đầu tiên khi khởi tạo web

  function handleClick(ten) {
    setSelectBtn(ten);
  }
  return (
    <>
      <menu>
        <TabButton tenBatKy={() => { handleClick('components') }}>Component</TabButton>
        <TabButton tenBatKy={() => { handleClick('jsx') }}>JSX</TabButton>
        <TabButton tenBatKy={() => { handleClick('props') }}>Props</TabButton>
        <TabButton tenBatKy={() => { handleClick('state') }}>State</TabButton>
      </menu>
      <div id="tab-content">
        {/*
        {EXAMPLES.components.title}
        {EXAMPLES["components"].desc}
        */}
        <h3>{EXAMPLES[selectBtn].title}</h3>
        <p>{EXAMPLES[selectBtn].desc}</p>
        <pre>
          <code>{EXAMPLES[selectBtn].code}</code>
        </pre>
      </div>
    </>
  )
}
export default App
