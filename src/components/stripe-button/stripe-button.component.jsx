import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K1FMZEkBeizbef3ZRa6biYQBRpF5IreiQd4TuJ31eapc1k6WlFenPJPsQU5tyGAFSUeGg4jh1lzI0gWgY43OXnZ00r2BjSslZ';

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;