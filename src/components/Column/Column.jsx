import { useContext, useState } from "react";
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";
import { ColumnCards, ColumnTitle, StyledColumn } from "./Column.styled";
import { TaskContext } from "../../context/TaskContext";

const Column = ({ title, cards }) => {
  const [skeletonCount, setSkeletonCount] = useState(()=> {
    return Math.floor(Math.random() * 3) + 1;
  });
  const { loading } = useContext(TaskContext);
  const skeletonCards = new Array(skeletonCount)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);

  return (
    <StyledColumn>
      <ColumnTitle>{title.toUpperCase()}</ColumnTitle>
      <ColumnCards>
        {loading
          ? skeletonCards
          : cards.length === 0
            ? "Новых задач нет"
            : cards.map((card) => <Card key={card._id} card={card} />)}
      </ColumnCards>
    </StyledColumn>
  );
};
export default Column;
