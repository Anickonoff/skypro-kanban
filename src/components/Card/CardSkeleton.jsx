import {
  StyledCard,
  CardBtn,
  CardContent,
  CardDate,
  CardHeader,
  CardItem,
  CardTheme,
  CardTitle,
} from "./Card.styled";

const CardSkeleton = () => {
  return (
    <CardItem>
      <StyledCard>
        <CardHeader>
          <CardTheme $skeleton={true}>
            <p>Loading...</p>
          </CardTheme>
          <CardBtn $skeleton={true}>
            <div></div>
          </CardBtn>
        </CardHeader>
        <CardContent>
          <CardTitle $skeleton={true}>Title is loading...</CardTitle>
          <CardDate $skeleton={true}>
            <p>Loading...</p>
          </CardDate>
        </CardContent>
      </StyledCard>
    </CardItem>
  );
};

export default CardSkeleton;
