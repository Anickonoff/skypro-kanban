import Column from "../Column/Column";
import { cardList } from "../../data";

const Main = () => {
  const columns = [
    "без статуса",
    "нужно сделать",
    "в работе",
    "тестирование",
    "готово",
  ];
  // const groupByKey = (cards, key = "status") => {
  //   return cards.reduce((acc, card) => {
  //     if (!acc[card[key]]) {
  //       acc[card[key]] = [];
  //     }
  //     acc[card[key]].push(card);
  //     return acc;
  //   }, {});
  // };

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {columns.map((status) => (
              <Column
                key={status}
                title={status}
                cards={cardList.filter(
                  (card) => card.status.toLowerCase() === status.toLowerCase()
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
