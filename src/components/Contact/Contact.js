import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast, ToastContainer } from 'react-toastify';
import './Contact.css';


function Contact() {

    const notify = () => toast("Email has been sent successfully !!!!!!!!!", {
        position: 'top-center',
    });
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vj43js7', 'template_uqp6pwv', form.current, 'f3CQdnnn0smamJF99')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <Container fluid className="about-section">

            <Container className='w-25 form-section'>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <h1 className="project-heading mb-3">
                        Contact <strong className="purple">Me  </strong>
                    </h1>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-3 mt-3">
                            <Form.Label>Your Name/ Company Name</Form.Label>
                            <Form.Control type="text" name='user_name' placeholder="Your Name/ Company Name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" name='user_email' placeholder="Enter email" />
                            {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Message</Form.Label>
                            <Form.Control name='message' as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Send" onClick={notify}>
                            Sent Email
                        </Button>
                        <ToastContainer />
                    </Form>

                    {/* <form ref={form} onSubmit={sendEmail}>
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </form> */}
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
                <Particle />



                {/* <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1> */}



            </Container>
        </Container>
    );
}

export default Contact;
