


import React from "react";
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';


function BrokerageCalculator(props) {


    const schema = yup.object().shape({
        buyPrice: yup.string().required("Buy Price is required"),
        sellPrice: yup.string().required("Sell Price is required"),
        quantity: yup.string().required("Quantity no is required"),
       
      })
    
      const { register, handleSubmit, formState: { errors }, reset , watch} = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
      });
      // Callback version of watch.  It's your responsibility to unsubscribe when done.
      React.useEffect(() => {
        const subscription = watch((value) => {
          
            calculatebrokerage(value)
        });
        return () => subscription.unsubscribe();
      }, [watch]);
    

      function calculatebrokerage(value){

        
        console.log(value)
      }
    
  return (
   
    <div className="box-sub">
      <h3 className="box-sub-head">{props.name}</h3>
      <div className="calc-input-list">
        <div className="input-itm">
          <h5>Buy Price</h5>
          <Form>
            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
              <Form.Control type="number"  name="buyPrice" placeholder="10000" className="formcontrol"  {...register('buyPrice', {
valueAsNumber: true,
})} />
            </Form.Group>
          </Form>
        </div>
        <div className="input-itm">
          <h5>Sell Price</h5>
          <Form>
            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
              <Form.Control type="number" name="sellPrice" placeholder="10000" className="formcontrol"  {...register('sellPrice', {
valueAsNumber: true,
})} />
            </Form.Group>
          </Form>
        </div>
        <div className="input-itm">
          <h5>Quantity</h5>
          <Form>
            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
              <Form.Control type="number" name="quantity" placeholder="10000" className="formcontrol"  {...register('quantity', {
valueAsNumber: true,
})} />
            </Form.Group>
          </Form>
        </div>
      </div>
      <div className="calc-data-des">
        <ul className="reset">
          <li>
            <span>Turnover</span>
            <span>880000</span>
          </li>
          <li>
            <span>Brokerage</span>
            <span>40</span>
          </li>
          <li>
            <span>STT Total</span>
            <span>120</span>
          </li>
          <li>
            <span>Exchange Txn. Charge</span>
            <span>30.36</span>
          </li>
          <li>
            <span>Clearing Charge</span>
            <span>0</span>
          </li>
          <li>
            <span>GST</span>
            <span>12.66</span>
          </li>
          <li>
            <span>SEBI Charges</span>
            <span>0.88</span>
          </li>
          <li>
            <span>Stamp Duty</span>
            <span>12</span>
          </li>
          <li>
            <span>Total Tax &amp; Charges</span>
            <span>250.9</span>
          </li>
          <li>
            <span className="ttl-amt">Total Brokerage</span>
            <span className="ttl-amt">0.54</span>
          </li>
        </ul>
      </div>
    </div>
 
 
  );
}

export default BrokerageCalculator;
