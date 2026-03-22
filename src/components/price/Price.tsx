import React from 'react';

interface PriceProps {
  currency: string;
  price: string | number;
}

function Price({currency, price}: PriceProps) {
  return (
    <>
        {currency}
        <span>{price}</span> 
    </>
  );
};
export default Price;