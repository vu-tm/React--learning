// children là prop đặc biệt nên buộc phải ghi đúng tên
// tenBatKy là prop tùy ý đặt tên gì cũng được
export default function TabButton({ children, tenBatKy }) {
    // Hàm handleClick không nhận được giá trị hoặc nội dung từ bên ngoài
    // vì nó bị giới hạn trong phạm vi của component TabButton
    // function handleClick() {
    //     alert('You clicked the button!');
    // }

    return (
        <>
            <li><button onClick={tenBatKy}>{children}</button></li>
        </>
    );
}