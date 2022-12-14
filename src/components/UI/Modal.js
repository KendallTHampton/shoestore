import React, {Fragment} from 'react'
import ReactDOM from "react-dom";
import classes from './Modal.module.css'

const Backdrop = props =>
{
    return <div onClick={props.onHide} className={classes.backdrop} />;
};



const ModalOverlay = (props) =>
{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};


function Modal(props)
{

    const portalElement = document.getElementById('overlays');

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onHide={props.onHideCart} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </Fragment>
    )
}

export default Modal