import { useContext, useState } from "react";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
import { TaskContext } from "../../context/TaskContext";
import { columns, columnsRu } from "../../theme/Categories";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Card from "../Card/Card";
const Main = () => {
  const { cards, getError, updateCard, editError, editLoading } =
    useContext(TaskContext);

  const [idDragging, setIdDragging] = useState(null);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  const handleDragEnd = (event) => {
    const { active, over } = event;
    setIdDragging(null);
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;
    console.log(`Dragged item ${activeId} over ${overId}`);
    const draggedCard = cards.find((card) => card._id === activeId);
    console.log("Dragged card:", draggedCard);
    if (draggedCard) {
      const newStatus = overId;
      if (
        draggedCard.status.toLowerCase() !== newStatus.toLowerCase() &&
        draggedCard.status.toLowerCase() !== columnsRu[newStatus].toLowerCase()
      ) {
        const updatedCard = { ...draggedCard, status: columnsRu[newStatus] };
        console.log("Updating card:", updatedCard);
        updateCard(updatedCard);
      }
    }
  };

  const handleDragStart = (event) => {
    const { active } = event;
    console.log(`Drag started for item ${active.id}`);
    setIdDragging(active.id);
  };

  return (
    <StyledMain>
      <MainBlock>
        <MainContent>
          {getError ? (
            <p>Ошибка: {getError}</p>
          ) : (
            <DndContext
              sensors={sensors}
              onDragEnd={handleDragEnd}
              onDragStart={handleDragStart}
            >
              {columns.map((status) => (
                <Column
                  key={status}
                  id={status}
                  title={columnsRu[status]}
                  idDragging={idDragging}
                  showPlace={
                    idDragging !== null &&
                    cards
                      .find((card) => card._id === idDragging)
                      ?.status.toLowerCase() !==
                      columnsRu[status].toLowerCase() &&
                    cards
                      .find((card) => card._id === idDragging)
                      ?.status.toLowerCase() !== status.toLowerCase()
                  }
                  cards={cards.filter((card) => {
                    return (
                      card.status.toLowerCase() === status.toLowerCase() ||
                      card.status.toLowerCase() ===
                        columnsRu[status].toLowerCase()
                    );
                  })}
                />
              ))}
              <DragOverlay>
                {idDragging ? (
                  <Card card={cards.find((card) => card._id === idDragging)} />
                ) : null}
              </DragOverlay>
            </DndContext>
          )}
        </MainContent>
      </MainBlock>
    </StyledMain>
  );
};

export default Main;
