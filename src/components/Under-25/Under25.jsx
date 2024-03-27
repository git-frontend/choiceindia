import React from 'react';
import Banner from '../Under-25/Banner';
import ChoiceDematAc from './ChoiceDematAc';
import DematForm from './DematForm';
import FormSec from './FormSec';
import HoldUp from './HoldUp';
import OneAcFinancialNeeds from './OneAcFinancialNeeds';
import PayOnlyOrder from './PayOnlyOrder';
import TakeWord from './TakeWord';
import './under-25.scss';


function Under25() {

  return (
    <>
    <Banner/>
    <PayOnlyOrder/>
    <OneAcFinancialNeeds />
    <ChoiceDematAc />
    <HoldUp />
    <FormSec />
    <TakeWord />
    </>
  )
}

export default Under25