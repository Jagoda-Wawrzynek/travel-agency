import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderFrom.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from './../OrderOption/OrderOption';
import pircing from './../../../data/pricing.json';
import Button from './../../common/Button/Button';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';
import { formatPrice } from '../../../utils/formatPrice';

const sendOrder = (options, tripCost, tripDetails) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    ...tripDetails,
  };

  if (options.name != '' && options.contact != '') {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;

    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };

    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  } else {
    alert('You should fill name and contact');
  }
};


const OrderForm = ({options, tripCost, setOrderOption, tripDetails}) => {
  return(
    <Grid>
      <Row>
        {pircing.map( option => (
          <Col md={4} key={option.id}>
            <OrderOption key={option.id} currentValue={options[option.id]} setOrderOption={setOrderOption} {...option} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary options={options} cost={tripCost} />
        </Col>
        <Button onClick={() => sendOrder(options, tripCost, tripDetails)}>Order now!</Button>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.node,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,
};

export default OrderForm;