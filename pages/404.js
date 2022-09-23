import styled from 'styled-components';
import Link from "next/link";

const FourOhFourSection = styled.section`
  color: ${({ theme }) => theme.colors.isWhite};
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  display: grid;
  align-content: center;
  justify-content: center;
  height: 99vh;
  h1 {
    margin-bottom: 5rem;
  }
`;

const Custom404 = () => (
    <>
        <FourOhFourSection>
            <h1>Oops! <small>Page Not Found</small></h1>
            <Link href="/">RETURN TO HOME</Link>
        </FourOhFourSection>
    </>
);

export default Custom404;
