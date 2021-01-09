import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // this will be in usd cent(1$ = 100cent);
  const publishableKey =
    'pk_test_51I5Jq8IvaYloT1hXcEel0TQMQY9aC5At6iEFisaQQ64OjgqznXQQ3wbG4zdldnNDudxftsiUWDyPmNiuO0bUcQ5b00iBhKEKfE';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAdress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your Total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripCheckoutButton;
