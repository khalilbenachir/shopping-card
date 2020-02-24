import React from 'react'
import ShoppingItems from '../shopping-items'
import ShoppingBasket from '../shopping-basket'

export default function ShppingCard() {
    return (
        <div className="shopping-card">
            <ShoppingItems/>
            <ShoppingBasket/>
        </div>
    )
}
