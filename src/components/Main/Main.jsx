import { useContext } from "react";
import Column from "../Column/Column";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";
import { TaskContext } from "../../context/TaskContext";
import { columns, columnsRu } from "../../theme/Categories";
const Main = () => {
  const { cards, getError } = useContext(TaskContext);
  return (
    <StyledMain>
      <MainBlock>
        <MainContent>
          {getError ? (
            <p>Ошибка: {getError}</p>
          ) : (
            columns.map((status) => (
              <Column
                key={status}
                title={columnsRu[status]}
                cards={cards.filter((card) => {
                  return (
                    card.status.toLowerCase() === status.toLowerCase() ||
                    card.status.toLowerCase() ===
                      columnsRu[status].toLowerCase()
                  );
                })}
              />
            ))
          )}
        </MainContent>
      </MainBlock>
    </StyledMain>
  );
};

export default Main;
