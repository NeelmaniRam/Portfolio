import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import medibot from "../../Assets/Projects/MediBot.png";
import DA from "../../Assets/Projects/DA.png";
import Rasberry from "../../Assets/Projects/Rasberry.png";
import CareConnect from "../../Assets/Projects/CareConnect.png";
import EmailAgent from "../../Assets/Projects/EmailAgent.png";
import Poker from "../../Assets/Projects/Poker.png";
import Chess from "../../Assets/Projects/Chess.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Developments </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "left", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EmailAgent}
              isBlog={false}
              title="AI Email Agent"
              description="Project involves creating a system that allows messages to be sent and received between individuals or groups in a structured format. It ensures that information is delivered efficiently, with clear organization and the ability to include additional details like attachments or responses. The system follows a set of rules for structuring messages, personalizing content, and ensuring proper formatting. It also includes mechanisms for handling inquiries, providing automated responses, and maintaining a record of interactions for future reference. The focus is on clarity, professionalism, and ease of use."
              ghLink="https://github.com/NeelmaniRam/InboxHero"
              
            />
          </Col>

  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medibot}
              isBlog={false}
              title="MediBot"
              description="AI-driven healthcare assistant designed to provide users with personalized medical guidance, symptom analysis, and health-related recommendations. The chatbot leverages advanced NLP and ML models to understand user queries, extract relevant medical insights, and offer accurate responses. Used TensorFlow, PyTorch, and scikit-learn, it integrates a vast medical knowledge base to assist users in identifying potential health concerns, and guiding them toward appropriate medical professionals. MediBot employs a multimodal approach, incorporating text-based interactions. Additionally, it utilizes secure API integrations for real-time medical data retrieval. "
              ghLink="https://github.com/NeelmaniRam/MediBot"
               
            />
          </Col>




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chess}
              isBlog={false}
              title="Chess Game"
              description="Web-based chess application built using web development technologies. It allows users to play chess against an AI opponent or another player. The project leverages HTML, CSS, and JavaScript for the frontend, ensuring a visually appealing and responsive design. The game logic is implemented using JavaScript, handling piece movement, legal moves, and checkmate conditions. Additional features include drag-and-drop functionality, move validation, and game history tracking. "
              ghLink="https://github.com/NeelmaniRam/Web_developmentProjects"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Poker}
              isBlog={false}
              title="RL Poker Bot"
              description="Enhancing RL Poker using Deep Reinforcement Learning Techniques project focused on developing an intelligent poker-playing system using various reinforcement learning (RL) algorithms. I implemented SARSA, Expected SARSA, Q-Learning, and Deep Q-Network (DQN) variants, including DQN Base, DQN with Target Network, and DQN with Target Network & Experience Replay. By ensembling these techniques, my model adapted dynamically to multi-agent poker strategies. The project aimed to improve decision-making in poker through RL, optimizing strategies for better gameplay in uncertain environments."
              ghLink="https://github.com/NeelmaniRam/-Enhancing-RL-Poker-using-Deep-Reinforcement-Learning-Techniques-main"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DA}
              isBlog={false}
              title="Data Analysis"
              description="Focus on data analysis, visualisation, and statistical exploration using Python, Pandas, NumPy, and Matplotlib/Seaborn. Demographic Data Analyser worked on statistical analysis on demographic datasets, computing mean, variance, and standard deviation.Medical Data Visualiser worked on analysis of  medical records, visualising health indicators and trends.Time Series and Sea level predictor predicts future sea levels using regression analysis based on historical data and explores time-series data with line plots, box plots, and rolling averages."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Intelligent QA System "
              description="The project focuses on developing an interactive question-answering model that enhances user interaction by implementing and analyzing various algorithms. It explores multiple NLP and deep learning techniques like BiLSTM,BiDAF,BERT and Distil BERT to improve answer accuracy, relevance, and contextual understanding. The model is designed for efficient information retrieval and response generation, leveraging advancements in machine comprehension."
              ghLink="https://github.com/NeelmaniRam/Interactive_Question_Answering_Model"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CareConnect}
              isBlog={false}
              title="CareConnect"
              description="An advanced healthcare chatbot designed to provide efficient and accurate medical assistance. It leverages the EleutherAI GPT-Neo 2.7B model for generating responses and utilizes FAISS for fast and accurate document retrieval through vector embeddings. The system is deployed on Runpod using Chainlit, with containerization handled via Docker for seamless deployment. This chatbot ensures quick access to medical information, enhancing user experience by delivering relevant healthcare insights efficiently."
              ghLink="https://github.com/NeelmaniRam/CareConnect-Healthbot"
              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rasberry}
              isBlog={false}
              title="Drunk Driving Detection"
              description="My cutting-edge drunk driving detection model leverages a breathalyzer to accurately measure blood alcohol levels and intelligently disable the vehicle’s engine if the detected alcohol concentration surpasses a predefined threshold. Seamlessly integrated with a Raspberry Pi and powered by Python, this advanced system serves as a crucial safeguard against intoxicated driving, significantly reducing the risk of accidents and enhancing road safety."
              ghLink="https://github.com/NeelmaniRam/Drunk-Driving-Detection-using-Raspberry-Pi"
               
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
