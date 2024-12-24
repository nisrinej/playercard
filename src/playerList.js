import React from "react";
import { Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import players from "./players";
import { Player } from "./player";


const PlayerList = () =>{
    return (
        <Container>
            <Row>
                {players.map((p)=>(
                    <Col xs={13} sm={7} md={5} lg={4}>
                        <Player
                            firstName= {p.first_name}
                            lastName = {p.last_name}
                            team = {p.team}
                            position = {p.position}
                            nationality = {p.nationality}
                            jerseyNumber = {p.jerseyNumber}
                            image = {p.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default PlayerList;