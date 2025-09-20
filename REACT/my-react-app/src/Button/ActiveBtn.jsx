import '../index.css'
import '../App.css'
import { useState } from 'react';

function App() {
    // Đặt giá trị cho isAlertVisible và isActivated là false ban đầu (1)
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    function activateHandler() {
        setIsAlertVisible(true);
    }

    function confirmHandler() {
        setIsAlertVisible(false);
        setIsActivated(true);
    }

    function cancelHandler() {  // Gán 2 cái false để thực hiện (2)
        setIsAlertVisible(false);
        setIsActivated(false);
    }
    return (
        <>
            {/* Nếu không có thông báo và chưa kích hoạt -> hiển thị nút Activate (2)*/}
            {!isActivated && !isAlertVisible && (
                <button onClick={activateHandler} className="action-btn">
                    Activate
                </button>
            )}
            {/* Sau khi hiện nút Active thì hàm activateHandler làm cho hiện thông báo
        -> !isActived && isAlertVisible -> sai -> không thực hiện (2) */}

            {isAlertVisible && (
                <div className="alert-box">
                    <h2>Warning!</h2>
                    <p>Are you sure you want to activate this mode?</p>
                    <button onClick={confirmHandler} className="confirm-btn">Confirm</button>
                    <button onClick={cancelHandler} className="cancel-btn">Cancel</button>
                </div>
            )}

            {isActivated && (
                <h3 className="success-message">Mode Activated!</h3>
            )}
        </>
    )
}
export default App

