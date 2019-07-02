import React from 'react'

import classes from './Order.css'

const order = () => (
    <div className={classes.Order}>
        <p>Ingredients: Salad</p>
        <p>Price: <strong>$6.20</strong></p>
    </div>
)

export default order