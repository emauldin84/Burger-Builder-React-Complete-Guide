import React, {Component} from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false,
    }

    orderHandler = (event) => {
        event.preventDefault()
        this.setState({loading: true})
        const order = {
            ingredients: this.props.ingredients,
            // in a production app you should calculate price on the backend to avoid the likelyhood of users manipulating the price on purchse
            price: this.props.price,
            customer: {
                name: 'Eric Mauldin',
                address: {
                    street:'123 Street Ave',
                    zipCode: '30312',
                    country: 'USA',
                },
                email: 'eric@test.com'
            },
            deliveryMethod: 'fastest'
        }
        // must add .json to end of url for Firebase
        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({ loading: false, })
            })
    }

    render() {
        let form = (
            <form>
                <input className={classes.Input} type='text' name='name' placeholder='Your name'></input>
                <input className={classes.Input} type='text' name='email' placeholder='Your email'></input>
                <input className={classes.Input} type='text' name='street' placeholder='Street'></input>
                <input className={classes.Input} type='text' name='postal' placeholder='Postal Code'></input>
                <Button btnType='Success' clicked={this.orderHandler}>Order</Button>
            </form>
        )
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }

}

export default ContactData