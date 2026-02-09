import { useContext, useState } from "react";
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";
import { ColumnCards, ColumnTitle, StyledColumn } from "./Column.styled";
import { TaskContext } from "../../context/TaskContext";
import { useDroppable } from "@dnd-kit/core";
import CardPlace from "../Card/CardPlace";

const Column = ({ title, cards, id, idDragging, showPlace }) => {
  const [skeletonCount, setSkeletonCount] = useState(() => {
    return Math.floor(Math.random() * 3) + 1;
  });
  const { loading } = useContext(TaskContext);
  const skeletonCards = new Array(skeletonCount)
    .fill(0)
    .map((_, i) => <CardSkeleton key={i} />);
  const { setNodeRef } = useDroppable({
    id: id,
  });
  return (
    <StyledColumn ref={setNodeRef}>
      <ColumnTitle>{title.toUpperCase()}</ColumnTitle>
      <ColumnCards>
        {loading
          ? skeletonCards
          : cards.length === 0
            ? `Новых задач нет`
            : cards.map((card) => {
                return card._id === idDragging ? (
                  <CardPlace key={`place-${idDragging}`} />
                ) : (
                <Card key={card._id} card={card} />
                );
              })}
        {showPlace && <CardPlace />}
      </ColumnCards>
    </StyledColumn>
  );
};
export default Column;
