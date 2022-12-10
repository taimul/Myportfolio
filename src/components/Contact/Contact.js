import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";


function Contact() {
    return (
        <Container fluid className="about-section">
            <Particle />
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <h1 className="project-heading">
                        Contact <strong className="purple">Me  </strong>
                    </h1>


                    {/* <Col
                        md={7}
                        style={{
                            justifyContent: "center",
                            paddingTop: "30px",
                            paddingBottom: "50px",
                        }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            About <strong className="purple">Me</strong>
                        </h1>

                    </Col> */}
                    {/* <Col
                        md={5}
                        style={{ paddingTop: "120px", paddingBottom: "50px" }}
                        className="about-img"
                    >
                        <img alt="about" className="img-fluid" />
                    </Col> */}
                </Row>




                {/* <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1> */}



            </Container>
        </Container>
    );
}

export default Contact;
