import Column from "../Column/Column";
// import { cardList } from "../../data";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";

const Main = ({ cards, error }) => {
  const columns = ["none", "todo", "inProgress", "testing", "done"];
  const columnsRu = {
    none: "без статуса",
    todo: "нужно сделать",
    inProgress: "в работе",
    testing: "тестирование",
    done: "готово",
  };

  return (
    <StyledMain>
      <MainBlock>
        <MainContent>
          {error ? (
            <p>Ошибка: {error}</p>
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
