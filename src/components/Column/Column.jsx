import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, StyledColumn } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <StyledColumn>
      <ColumnTitle>
        {title.toUpperCase()}
      </ColumnTitle>
      <ColumnCards>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ColumnCards>
    </StyledColumn>
  );
};
export default Column;
