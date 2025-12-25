import Card from "../Card/Card";

const Column = ({ title, cards }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title.toUpperCase()}</p>
      </div>
      <div className="cards">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
export default Column;
