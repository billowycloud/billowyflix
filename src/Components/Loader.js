import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

export default () => (
  <Container>
    <Helmet>
      <title>Loading | BILLOWYFLIX</title>　
    </Helmet>
    <span role="img" aria-label="Loading">
      ⏰
    </span>
  </Container>
);
