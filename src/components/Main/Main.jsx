import Column from "../Column/Column";
import { cardList } from "../../data";
import { MainBlock, MainContent, StyledMain } from "./Main.styled";

const Main = () => {
  const columns = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];

  return (
    <StyledMain>
      <MainBlock>
        <MainContent>
          {columns.map((status) => (
            <Column
              key={status}
              title={status}
              cards={cardList.filter(
                (card) => card.status.toLowerCase() === status.toLowerCase()
              )}
            />
          ))}
        </MainContent>
      </MainBlock>
    </StyledMain>
  );
};

export default Main;
