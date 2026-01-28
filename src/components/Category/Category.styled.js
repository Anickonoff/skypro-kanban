import styled, { css } from "styled-components";

const StyledCategory = styled.div`
  ${({ theme, $category }) => {
    const colors =
      theme.colors.categories[$category.toLowerCase()] ??
      theme.colors.categories.other;
    return css`
      background-color: ${colors.bg};
      color: ${colors.text};
    `;
  }}
`;

export { StyledCategory };
