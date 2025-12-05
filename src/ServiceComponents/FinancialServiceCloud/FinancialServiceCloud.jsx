import React from 'react'
import ServicePageHeaderSection from '../ui/ServicePageHeaderSection/ServicePageHeaderSection'
import img1 from '../../assets/imgs/services-details-2/Financial-Cloud/img-1.jpg';
import FinancialServiceCloud_First from './FinancialServiceCloud_First/FinancialServiceCloud_First';
import FinancialServiceCloud_Second from './FinancialServiceCloud_Second/FinancialServiceCloud_Second';
import S_lastSection from '../HigherEducation/S_lastSection/S_lastSection';

function FinancialServiceCloud() {
  return (
    <>
    <FinancialServiceCloud_First/>
    <FinancialServiceCloud_Second/>
    <S_lastSection/>
    </>
  ) 
}

export default FinancialServiceCloud;