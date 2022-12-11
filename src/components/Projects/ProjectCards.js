import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          GitHub Client
          {/* {props.isBlog ? "Blog" : "GitHub"} */}
        </Button>
        {"\n"}
        {"\n"}

        {props.ghLin2 ? <Button className="m-2" variant="danger" href={props.ghLink2} target="_blank">
          <BsGithub /> &nbsp;
          GitHub Server

        </Button> : <p></p>}
        {/* <Button className="m-2" variant="primary" href={props.ghLink2} target="_blank">
          <BsGithub /> &nbsp;
          GitHub Server
          
        </Button> */}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="success"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"LiveLink"}
          </Button>
        )}
        {/* <Button className="mx-2" variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          Read More
        </Button> */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
