import styled, { css } from "styled-components";
import { categoryMap } from "../../theme/Categories";

const StyledCategory = styled.div`
  ${({ theme, $category }) => {
    const key = categoryMap[$category];
    const colors = theme.colors.categories[key] ?? theme.colors.categories.other;
    return css`
      background-color: ${colors.bg};
      color: ${colors.text};
    `;
  }}
`;

export { StyledCategory };
