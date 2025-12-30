import styled from "styled-components";
import { devices } from "../../breakpoints";

const StyledColumn = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;
  @media screen and (${devices.lg}) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
  color: #94a6be;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

const ColumnCards = styled.div`
  width: 100%;
  display: block;
  position: relative;
  @media screen and (${devices.lg}) {
    display: flex;
    overflow-y: auto;
  }
`;

export { StyledColumn, ColumnTitle, ColumnCards };
