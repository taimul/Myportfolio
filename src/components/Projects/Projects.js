import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              ghLin2={true}
              title="Bike-Reseller"
              description="Bike Reselling website, where user can post there second hand bikes and another user can book the bike for to buy, also there is an admin panel where an he can manage all the user and seller."
              ghLink="https://github.com/taimul/used-resale-client-side"
              ghLink2="https://github.com/taimul/used-bike-resale-server"
              demoLink="https://bike-reseller-2438b.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              ghLin2={true}
              title="E-learning"
              description="Online learning website with various courses is been categorized. Courses has been organized with subjective category.Course details available with course descriptions which user can download as a PDF format."
              ghLink="https://github.com/taimul/Learning-platform-client-side"
              ghLink2="https://github.com/taimul/Elearn-server-side"
              demoLink="https://learn-759e1.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              ghLin2={false}
              title="Quick-Quiz"
              description="This website is based on quiz test. There are four types of quiz available and user can test there skills by taking participation of any of this quiz listed on the website."
              ghLink="https://github.com/taimul/quick-quiz"
              demoLink="https://melodious-sawine-f7896a.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              ghLin2={true}
              title="Travel Review"
              description="In this website user can see various places to travel, where user can register and review the places they visited. There also an option where user can post the place he/she visited and other user can review as well."
              ghLink="https://github.com/taimul/travel-review/tree/main/travel-review-client"
              ghLink2="https://github.com/taimul/travel-review/tree/main/travel-review-server"
              demoLink="https://tourist-service-e587f.web.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              ghLin2={true}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              ghLin2={true}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
