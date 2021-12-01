import React from 'react'
import { Accordion } from 'react-bootstrap'

const Acordion = (props) => {
    return (
        <>
            <Accordion>
            <Accordion.Item eventKey={props.key}>
                <Accordion.Header>{props.title}</Accordion.Header>
                <Accordion.Body>
                    {props.body}
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            
        </>
    )
}

export default Acordion
