import React from "react";
import "./App.css";
import { Drawer, Navigation, Layout, Header, Content } from "react-mdl";
import Main from "./Main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header title="My Portfolio" scroll>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
