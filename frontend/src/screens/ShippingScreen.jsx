import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'

function ShippingScreen() {
    const navigate = useNavigate();
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart;
    const dispatch = useDispatch();
    const [address, setAddress] = useState(shippingAddress ? shippingAddress.address : '');
    const [city, setCity] = useState(shippingAddress ? shippingAddress.city : '');
    const [postalCode, setPostalCode] = useState(shippingAddress ? shippingAddress.postalCode : '');
    const [country, setCountry] = useState(shippingAddress ? shippingAddress.country : '');

    // let shpaddr = localStorage.getItem('shippingAdress');
    // console.log(shpaddr)

    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(saveShippingAddress({address,city,postalCode, country}))
        navigate('/payment')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='text' placeholder='Enter address' value={address ? address : ''}
                        onChange={(e) => setAddress(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='text' placeholder='Enter city' value={city ? city : ''}
                        onChange={(e) => setCity(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label>Pin Code</Form.Label>
                    <Form.Control type='text' placeholder='Enter pin code' value={postalCode ? postalCode : ''}
                        onChange={(e) => setPostalCode(e.target.value)} required/>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='text' placeholder='Enter Country' value={country ? country : ''}
                        onChange={(e) => setCountry(e.target.value)} required/>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Continue
                </Button>
            </Form>
        </FormContainer>
    )
}

export default ShippingScreen