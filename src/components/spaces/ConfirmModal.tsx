import { Component } from "react";
import './ConfirmModalComponent.css'

interface ConfirmModalProps {
    show: boolean,
    content: string,
    close: () => void
}

interface ConfirmModalState {

}

class ConfirmModal extends Component<ConfirmModalProps, ConfirmModalState> {

    render() {
        if (!this.props.show) {
            return false
        } else {
            return (
                <div className="modal">
                    <div className="modal-content">
                        <h2>YOu tried to reserve and ...</h2>
                        <h3 className="modal-text">{this.props.content}</h3>
                        <div><button onClick={() => this.props.close()}>Close</button></div>
                    </div>
                </div>
            )
        }
    }
}

export default ConfirmModal;