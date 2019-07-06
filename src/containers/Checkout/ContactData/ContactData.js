import React, {Component} from 'react'
import axios from '../../../axios-orders'

import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import Spinner from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Zipcode'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: ''
            }
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
                <Input elementType='...' elementConfig='...' value='...'></Input>
                <Input inputtype='input' type='text' name='email' placeholder='Your email'></Input>
                <Input inputtype='input' type='text' name='street' placeholder='Street'></Input>
                <Input inputtype='input' type='text' name='postal' placeholder='Postal Code'></Input>
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