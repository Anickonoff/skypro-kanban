import Card from "../Card/Card";
import { ColumnCards, ColumnTitle, StyledColumn } from "./Column.styled";

const Column = ({ title, cards }) => {
  return (
    <StyledColumn>
      <ColumnTitle>{title.toUpperCase()}</ColumnTitle>
      <ColumnCards>
        {cards.length === 0
          ? "Новых задач нет"
          : cards.map((card) => <Card key={card._id} card={card} />)}
      </ColumnCards>
    </StyledColumn>
  );
};
export default Column;
