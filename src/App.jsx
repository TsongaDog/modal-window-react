import { useState } from 'react'
import { Modal } from "./component/Modal.jsx";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setOpen(true)}>✨ Открыть окно</button>
        <div className={`overlay animated ${open ? 'show' : ''}`}>
            <Modal setOpen={setOpen}>
                <h1>This is Modal Window!</h1>
            </Modal>
        </div>
    </div>
  )
}

export default App
