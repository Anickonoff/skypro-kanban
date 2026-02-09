import styled from "styled-components";

const StyledColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (${({ theme }) => theme.devices.lg}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const ColumnCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-align: center;
  @media screen and (${({ theme }) => theme.devices.lg}) {
    display: flex;
    overflow-y: auto;
  }
`;

export { StyledColumn, ColumnTitle, ColumnCards };
