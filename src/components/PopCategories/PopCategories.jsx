import { useContext, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { lightTheme } from "../../theme/theme";
import {
  CategoriesBtnPrim,
  CategoriesBtns,
  CategoriesBtnSec,
  CategoriesEl,
  CategoriesCheck,
  CategoriesList,
  CategoriesListTitle,
  CategoriesTitle,
  CategoriesSelect,
  CategoriesInputWrap,
} from "./PopCategories.styled";
import {
  ModalFieldBlock,
  ModalForm,
  ModalFormInput,
  ModalFormLabel,
  ModalFormSelect,
  ModalWrap,
} from "../Modal/Modal.styled";

const PopCategories = () => {
  const fullTheme = useTheme();
  const { updateUserCategories } = useContext(ThemeModeContext);
  const navigate = useNavigate();
  const baseCategories = Object.keys(lightTheme.colors.categories);
  const [categoriesDraft, setCategoriesDraft] = useState(() => {
    let initCounter = 0;
    const draft = { categories: {} };
    Object.keys(fullTheme.colors.categories).forEach((key) => {
      draft.categories[initCounter] = { ...fullTheme.colors.categories[key] };
      if (baseCategories.includes(key)) {
        draft.categories[initCounter].isBase = true;
      }
      initCounter += 1;
    });
    return draft;
  }); //черновик категорий из существующей темы
  let categoryId = useRef(Object.keys(categoriesDraft.categories).length); //счетчик id для новых категорий
  const [currentId, setCurrentId] = useState(""); //текущий редактируемый id
  const [newCategory, setNewCategory] = useState({ label: "", presetId: "" }); //редактируемая категория
  const [isEditor, setIsEditor] = useState(false); //режим редактирования категории
  const presets = { presets: { ...fullTheme.colors.categoriesPresets } }; //список пресетов

  const updateCategoriesDraft = (id, category) => {
    setCategoriesDraft((prev) => ({
      categories: {
        ...prev.categories,
        [id]: { ...category },
      },
    }));
  };

  const handleClose = () => {
    navigate("/");
  };

  // открытие категории для редактирование
  const handleEditorLoad = (Id) => {
    if (!isEditor) {
      setIsEditor(true);
    } else {
      if (isValidCategory) {
        updateCategoriesDraft(currentId, newCategory);
      }
    }
    if (Id !== undefined) {
      setCurrentId(Id);
      setNewCategory({ ...categoriesDraft.categories[Id] });
    } else {
      const tmpId = categoryId.current;
      setCurrentId(String(tmpId));
      categoryId.current += 1;
      setNewCategory({ label: "", presetId: "orange" });
    }
  };

  //отслеживане изменений в форме
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextCategory = {
      ...newCategory,
      [name]: value,
    };
    setNewCategory(nextCategory);
    if (validateCategoryLabel(nextCategory)) {
      updateCategoriesDraft(currentId, nextCategory);
    }
  };

  const validateCategoryLabel = (category = newCategory) => {
    let checkResult = true;
    if (category.label.trim() === "") {
      checkResult = false;
    } else {
      Object.keys(categoriesDraft.categories).forEach((key) => {
        if (
          categoriesDraft.categories[key].label.toLowerCase() ===
            category.label.trim().toLowerCase() &&
          key !== currentId
        ) {
          checkResult = false;
        }
      });
    }
    return checkResult;
  };

  let isValidCategory = validateCategoryLabel();
  let errorMessage = !isValidCategory
    ? newCategory.label.trim() === ""
      ? "Название категории не может быть пустым."
      : "Категория с таким названием уже существует."
    : "";

  //удаление выбранной категории или сброс базовой категории
  const handleDelete = (id) => {
    const updatedCategories = { ...categoriesDraft.categories };

    if (!updatedCategories[id]?.isBase) {
      delete updatedCategories[id];
    } else {
      const baseCategoryKey = Object.keys(lightTheme.colors.categories).find(
        (key) =>
          lightTheme.colors.categories[key].label.toLowerCase() ===
          updatedCategories[id].label.toLowerCase(),
      );
      updatedCategories[id] = {
        ...lightTheme.colors.categories[baseCategoryKey],
        isBase: true,
      };
    }
    setCategoriesDraft({ categories: updatedCategories });
    setIsEditor(false);
    setCurrentId("");
  };

  const handleSave = () => {
    const userCategories = { categories: {} };
    Object.keys(categoriesDraft.categories).forEach((key) => {
      userCategories.categories[
        categoriesDraft.categories[key].label.toLowerCase()
      ] = {
        label: categoriesDraft.categories[key].label,
        presetId: categoriesDraft.categories[key].presetId,
      };
    });
    updateUserCategories(userCategories);
    navigate("/");
  };

  return (
    <Modal>
      <CategoriesTitle>Категории задач</CategoriesTitle>
      <CategoriesListTitle>
        Выберите категорию для редактирования
      </CategoriesListTitle>
      <CategoriesList>
        {Object.keys(categoriesDraft.categories).map((key) => (
          <CategoriesEl
            key={key}
            $presetId={categoriesDraft.categories[key].presetId}
            onClick={() => handleEditorLoad(key)}
            $editing={currentId === key && isEditor}
          >
            {" "}
            <p>{categoriesDraft.categories[key].label}</p>{" "}
          </CategoriesEl>
        ))}
      </CategoriesList>
      <CategoriesListTitle>
        или{" "}
        <CategoriesBtnSec onClick={() => handleEditorLoad()}>
          добавьте новую
        </CategoriesBtnSec>
      </CategoriesListTitle>
      {isEditor && (
        <ModalWrap>
          <ModalForm>
            <ModalFieldBlock>
              <ModalFormLabel htmlFor="label">
                Название категории
              </ModalFormLabel>
              <CategoriesInputWrap>
                <ModalFormInput
                  type="text"
                  name="label"
                  id="label"
                  onChange={handleChange}
                  value={newCategory.label || ""}
                  placeholder="Введите название категории..."
                  autoFocus
                />
                <CategoriesCheck
                  $message={errorMessage}
                  $error={!isValidCategory}
                />
              </CategoriesInputWrap>
            </ModalFieldBlock>
            <ModalFieldBlock>
              <ModalFormLabel htmlFor="presetId">
                Выберите цветовую палитру
              </ModalFormLabel>
              <CategoriesSelect
                name="presetId"
                id="presetId"
                onChange={handleChange}
                value={newCategory.presetId || ""}
              >
                {Object.keys(presets.presets).map((key) => (
                  <option
                    key={key}
                    value={key}
                  >
                    {presets.presets[key].label}
                  </option>
                ))}
              </CategoriesSelect>
            </ModalFieldBlock>
            <CategoriesBtnSec onClick={() => handleDelete(currentId)}>
              {!categoriesDraft.categories[currentId]?.isBase
                ? "Удалить категорию"
                : "Сбросить настройки базовой категории"}
            </CategoriesBtnSec>
          </ModalForm>
        </ModalWrap>
      )}
      <CategoriesBtns>
        <CategoriesBtnPrim
          type="button"
          onClick={() => {
            handleSave();
          }}
        >
          Сохранить категории
        </CategoriesBtnPrim>
        <CategoriesBtnPrim type="button" onClick={handleClose}>
          Закрыть без сохранения
        </CategoriesBtnPrim>
      </CategoriesBtns>
    </Modal>
  );
};

export default PopCategories;
