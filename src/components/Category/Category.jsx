import { StyledCategory } from "./Category.styled";

const Category = ({ category }) => {
  return (
    <StyledCategory $category={category}>
      <p>{category}</p>
    </StyledCategory>
  );
};

export default Category;
