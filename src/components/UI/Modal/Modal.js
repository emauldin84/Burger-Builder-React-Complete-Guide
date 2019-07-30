import React, {Component} from 'react'

import classes from './Modal.css'
import Aux from '../../../hoc/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        // no need to update modal and order summary if the modal is not showing
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children
    }

    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal} 
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)', 
                        opacity: this.props.show ? '1': '0'
                        }}>
                    {this.props.children}
                </div>

            </Aux>

        )
    }

}

export default Modal