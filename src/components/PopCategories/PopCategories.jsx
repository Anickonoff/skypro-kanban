import { use, useContext, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import {
  CategoriesBtnPrim,
  CategoriesBtnSec,
  CategoriesList,
  CategoriesListTitle,
  CategoriesTitle,
} from "./PopCategories.styled";
import {
  ModalCategoriesTheme,
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
  const [categoriesDraft, setCategoriesDraft] = useState(() => {
    let initCounter = 0;
    const draft = { categories: {} };
    Object.keys(fullTheme.colors.categories).forEach((key) => {
      draft.categories[initCounter++] = { ...fullTheme.colors.categories[key] };
    });
    return draft;
  }); //черновик категорий из существующей темы
  let categoryId = useRef(Object.keys(categoriesDraft.categories).length); //счетчик id для новых категорий
  let currentId = useRef(null); //текущий редактируемый id
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

  const handleEditorLoad = (Id) => {
    if (isEditor) {
      updateCategoriesDraft(currentId.current, newCategory);
    } else {
      setIsEditor(true);
    }
    if (Id !== undefined) {
      setNewCategory({ ...categoriesDraft.categories[Id] });
      currentId.current = Id;
    } else {
      setNewCategory({ label: "", presetId: "orange" });
      const tmpId = categoryId.current;
      currentId.current = tmpId;
      categoryId.current += 1;
    }
    console.log("currentId: ", currentId.current);
    console.log("categoryId: ", categoryId.current);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({
      ...newCategory,
      [name]: value,
    });
    // setErrors({
    //   ...errors,
    //   [name]: false,
    // });
    // setError("");
  };

  return (
    <Modal>
      <CategoriesTitle>Категории задач</CategoriesTitle>
      <CategoriesListTitle>
        Выберите категорию для редактирования
      </CategoriesListTitle>
      <CategoriesList>
        {Object.keys(categoriesDraft.categories).map((key) => (
          <ModalCategoriesTheme
            key={key}
            $presetId={categoriesDraft.categories[key].presetId}
            onClick={() => handleEditorLoad(key)}
          >
            {" "}
            <p>{categoriesDraft.categories[key].label}</p>{" "}
          </ModalCategoriesTheme>
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
              <ModalFormInput
                type="text"
                name="label"
                onChange={handleChange}
                value={newCategory.label || ""}
                placeholder="Введите название категории..."
                autoFocus
              />
            </ModalFieldBlock>
            <ModalFieldBlock>
              <ModalFormLabel htmlFor="presetId">
                Выберите цветовую палитру
              </ModalFormLabel>
              <ModalFormSelect
                name="presetId"
                id="presetId"
                onChange={handleChange}
              >
                {Object.keys(presets.presets).map((key) => (
                  <option
                    key={key}
                    value={key}
                    selected={newCategory.presetId === key}
                  >
                    {presets.presets[key].label}
                  </option>
                ))}
              </ModalFormSelect>
            </ModalFieldBlock>
            <CategoriesBtnSec>Удалить категорию</CategoriesBtnSec>
          </ModalForm>
          <ModalCategoriesTheme $presetId={newCategory.presetId || "orange"}>
            {" "}
            <p>{newCategory.label}</p>{" "}
          </ModalCategoriesTheme>
        </ModalWrap>
      )}
      <CategoriesBtnPrim
        type="button"
        onClick={() => {
          // Handle save action
        }}
      >
        Сохранить категории
      </CategoriesBtnPrim>
      <CategoriesBtnPrim type="button" onClick={handleClose}>
        Закрыть без сохранения
      </CategoriesBtnPrim>
    </Modal>
  );
};

export default PopCategories;
