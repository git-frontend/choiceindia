import React from 'react';
import Banner from '../Under-25/Banner';
import OneAcFinancialNeeds from './OneAcFinancialNeeds';
import PayOnlyOrder from './PayOnlyOrder';
import './under-25.scss';


function Under25() {
  return (
    <>
    <Banner/>
    <PayOnlyOrder/>
    <OneAcFinancialNeeds />
    </>
  )
}

export default Under25