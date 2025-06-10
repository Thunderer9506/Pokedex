import ReactDom from "react-dom"

export default function Modal(props) {
    const {children, handelCloseModal} = props
    return ReactDom.createPortal(
        <div className="modal-container">
            <button onClick={handelCloseModal}
            className="modal-underlay"></button>
            <div className="modal-content">
                {children}
            </div>
        </div>,
        document.getElementById('portal')
    )
}