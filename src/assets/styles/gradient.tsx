import styled from 'styled-components';

export const Gradient1 = styled.div`
  background: rgb(254, 172, 94);
  background: linear-gradient(
    193deg,
    rgba(254, 172, 94, 1) 0%,
    rgba(199, 121, 208, 1) 50%,
    rgba(75, 192, 200, 1) 100%
  );
`;

export const GradientBoxStyled = styled.div`
  border: 3px solid transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.colors.lightGrey},
      ${(props) => props.theme.colors.lightGrey}
    ),
    linear-gradient(
      193deg,
      rgba(254, 172, 94, 1) 0%,
      rgba(199, 121, 208, 1) 50%,
      rgba(75, 192, 200, 1) 100%
    );

  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const GradientButtonStyled = styled.button`
  width: 100%;
  height: 70px;

  font-family: 'Space-Quest';
  font-style: italic;

  border: 1px solid transparent;
  background-image: linear-gradient(
      ${(props) => props.theme.colors.lightGrey},
      ${(props) => props.theme.colors.lightGrey}
    ),
    linear-gradient(
      193deg,
      rgba(254, 172, 94, 1) 0%,
      rgba(199, 121, 208, 1) 50%,
      rgba(75, 192, 200, 1) 100%
    );

  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export default Gradient1;