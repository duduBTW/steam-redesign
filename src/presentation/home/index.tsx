import { useState } from "react";
import styled from "styled-components";
import { data } from "./data";

function HomePage() {
  const [counter, setCounter] = useState(0);

  return (
    <Container>
      {data.map((item) => (
        <div key={item} onClick={() => setCounter((c) => c + 1)}>
          {item}
        </div>
      ))}
      {counter}
    </Container>
  );
}

const Container = styled.div`
  background-color: green;
`;

export default HomePage;
