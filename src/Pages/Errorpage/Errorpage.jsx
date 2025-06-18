import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/Button";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h3> 404</h3>
          <p>This page you are looking for doest not exist.</p>

          <NavLink to="/">
            <Button>Go Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    padding: 9 rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }
    h2 {
      font-size: 4.2rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default Errorpage;
