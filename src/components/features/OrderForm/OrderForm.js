import React from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderFrom.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';

const OrderForm = ({options, tripCost}) => {
  return(
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary options={options} cost={tripCost} />
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.node,
};

export default OrderForm;