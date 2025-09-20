# Kích hoạt sự kiện
#### Click vào kích hoạt - Click lần nữa để huỷ kích hoạt
```jsx
export default function App() {
    const [isActive, setIsActive] = useState(false);
    // isActive : Trạng thái hiện tại
    // setIsActive : Thay đổi trạng thái

    function handleChange() {
        setIsActive( (p) => !p ); // Đảo ngược sự kiện
    }
    return (
        <>
            <p className={isActive ? "active" : undefined}>Click</p>
            {/* Thêm className active nếu muốn kích hoạt, undefined ngược lại */}

            <button onClick={handleChange}>Change</button>
            {/* Nếu sự kiện click xảy ra thì lắng nghe sự kiện handleChange */}
        </p>
    )
} 
```