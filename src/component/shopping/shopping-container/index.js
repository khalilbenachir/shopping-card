import React from 'react'
import ShoppingItems from '../../../container/shopping-items'
import ShoppingBasket from '../../../container/shopping-basket'

export default function ShppingCard() {
    return (
        <div className="shopping-card">
            <ShoppingItems/>
            <ShoppingBasket/>
        </div>
    )
}
