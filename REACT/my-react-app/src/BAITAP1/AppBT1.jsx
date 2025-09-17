import '../App.css'
import { useState } from 'react'

function App() {
  const [loiChao, setLoiChao] = useState('Chào bạn!');
  const currentHour = new Date().getHours();

  function handleLoiChao() {
    if (currentHour > 5 && currentHour < 12) {
      setLoiChao('Chào buổi sáng!');
    } else if (currentHour >= 12 && currentHour < 18) {
      setLoiChao('Chào buổi chiều!');
    } else {
      setLoiChao('Chào buổi tối!');
    }
  }
  return (
    <>
      <h1>{loiChao}</h1>
      <button onClick={handleLoiChao}></button>
    </>
  )
}
export default App
