import '../App.css'

function App() {
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isActivated, setIsActivated] = useState(false);

    function activateHandler() {
        setIsAlertVisible(true);
    }

    function confirmHandler() {
        setIsAlertVisible(false);
        setIsActivated(true);
    }

    function cancelHandler() {
        setIsAlertVisible(false);
        setIsActivated(false);
    }
    return (
        <>
            {<button className="action-btn">Activate</button>}

            {
                <div className="alert-box">
                    <h2>Warning!</h2>
                    <p>Are you sure you want to activate this mode?</p>
                    <button className="confirm-btn">Confirm</button>
                    <button className="cancel-btn">Cancel</button>
                </div>
            }
            {<h3 className="success-message">Mode Activated!</h3>}
        </>
    )
}
export default App

