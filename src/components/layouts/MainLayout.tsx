import { Footer, Header } from "components/ui";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const MainLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;

const Container = styled.main`
  max-width: var(--max-width);
  margin: auto;
  margin-top: 60px;
`;
