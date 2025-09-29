import '../App.css'
import TabButton from './TabButton.jsx';
import { Component, useState } from 'react';
import { EXAMPLES, myData } from '../../data2.js';

function App() {
    const kq = myData.map((item) => ({ ...item }));
    console.log(kq);

    const [selectedTopic, setSelectedTopic] = useState();
    {/*   Tạo state selectedTopic. Lúc đầu không có giá trị (undefined).
setSelectedTopic là hàm để cập nhật state. Khi state thay đổi, component sẽ re-render.
*/}
    let tabContent = <p>Vui lòng click vào nút để lựa chọn 1 chủ đề</p>; // Nội dung mặc định khi chưa chọn chủ đề
    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].desc}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        );
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }
    return (
        <>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Khái niệm chính trong React</h2>
                    <ul>
                        {/* <MainContent {...myData[0]} />
            <MainContent {...myData[1]} />
            <MainContent {...myData[2]} />
            <MainContent {...myData[3]} /> */}

                        {myData.map((item) => (
                            <MainContent key={item.title} {...item} /> // key-prop giúp React nhận biết các phần tử nào thay đổi, được thêm hoặc xóa
                        ))}

                    </ul>
                </section>

                <section id="examples">
                    <h2>Examples</h2>
                    {/* prettier-ignore */}
                    <menu>
                        <TabButton
                            isSelected={selectedTopic === "components"}
                            onSelect={() => { handleSelect('components') }}>
                            Components
                        </TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => { handleSelect('jsx') }}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onSelect={() => { handleSelect('props') }}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onSelect={() => { handleSelect('state') }}>State</TabButton>
                    </menu>
                    {tabContent}
                </section>
            </main>
        </>
    );
}

export default App;