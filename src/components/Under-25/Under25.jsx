import React from 'react';
import Banner from '../Under-25/Banner';
import ChoiceDematAc from './ChoiceDematAc';
import HoldUp from './HoldUp';
import OneAcFinancialNeeds from './OneAcFinancialNeeds';
import PayOnlyOrder from './PayOnlyOrder';
import './under-25.scss';


function Under25() {
  return (
    <>
    <Banner/>
    <PayOnlyOrder/>
    <OneAcFinancialNeeds />
    <ChoiceDematAc />
    <HoldUp />
    </>
  )
}

export default Under25