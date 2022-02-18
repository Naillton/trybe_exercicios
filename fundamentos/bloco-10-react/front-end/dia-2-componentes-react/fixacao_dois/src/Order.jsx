import React from 'react';

class Order extends React.Component {
  render() {
    const itens = [
        {
          id: 102,
          user: "cena@gmail.com",
          product: "Razer Headphone",
          price: {
            value: 99.99,
            currency: "dollars"
          }
        },
        {
          id: 77,
          user: "cena@gmail.com",
          product: "Monster 500mL",
          price: {
            value: 9.99,
            currency: "dollars"
          }
        }
    ];
    return ( itens.map( iten => (
      <div className="order">
        <p> {iten.user} bought {iten.product} for {iten.price.value} {iten.price.currency} </p>
      </div>
    )));
  }
}

export default Order;