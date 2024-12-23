import React from "react";
import { Card } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";




export const Player = (props) =>{
    return (
        <div className="mt-1 m-2">
            <Card style={{width:"18rem"}}>
                <Card.Img variant="top" src={  "https://via.placeholder.com/150"}/>
                <Card.Body>
                <Card.Title>{props.firstName} {props.lastName}</Card.Title>
                <ListGroup className="list-group-flush">
                   <ListGroup.Item>team: {props.team}</ListGroup.Item>
                   <ListGroup.Item>position: {props.position}</ListGroup.Item>
                   <ListGroup.Item>team: {props.nationality}</ListGroup.Item>
                   <ListGroup.Item>position: {props.jerseyNumber}</ListGroup.Item>
                </ListGroup>  
               </Card.Body>
            </Card>

         </div>
    );
};