import { useContext } from "react";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
import { TaskContext } from "../../context/TaskContext";
import { columns, columnsRu } from "../../theme/Categories";
import { DndContext } from "@dnd-kit/core";
const Main = () => {
  const { cards, getError } = useContext(TaskContext);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    console.log(`Dragged item ${activeId} over ${overId}`);
  };

  return (
    <StyledMain>
      <MainBlock>
        <MainContent>
          {getError ? (
            <p>Ошибка: {getError}</p>
          ) : (
            <DndContext onDragEnd={handleDragEnd}>
              {columns.map((status) => (
                <Column
                  key={status}
                  id={status}
                  title={columnsRu[status]}
                  cards={cards.filter((card) => {
                    return (
                      card.status.toLowerCase() === status.toLowerCase() ||
                      card.status.toLowerCase() ===
                        columnsRu[status].toLowerCase()
                    );
                  })}
                />
              ))}
            </DndContext>
          )}
        </MainContent>
      </MainBlock>
    </StyledMain>
  );
};

export default Main;
