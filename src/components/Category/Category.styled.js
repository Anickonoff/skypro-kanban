import styled, { css } from "styled-components";

const StyledCategory = styled.div`
  ${({ theme, $category = "other", $presetId }) => {
    const category = theme.colors.categories[$category.toLowerCase()] || theme.colors.categories.other;
    const presetId = $presetId || category.presetId || theme.colors.categories.other.presetId;
    return css`
      background-color: ${theme.colors.categoriesPresets[presetId].bg};
      color: ${theme.colors.categoriesPresets[presetId].text};
    `;
  }}
`;

export { StyledCategory };
