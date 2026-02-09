import { useContext, useEffect, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { ThemeModeContext } from "../../context/ThemeModeContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";
import { lightTheme } from "../../theme/theme";
import { toast } from "react-toastify";
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
  CategoriesImportLabel,
  CategoriesImportInput,
} from "./PopCategories.styled";
import {
  ModalFieldBlock,
  ModalForm,
  ModalFormInput,
  ModalFormLabel,
  ModalWrap,
} from "../Modal/Modal.styled";

const PopCategories = () => {
  const fullTheme = useTheme();
  const { updateUserCategories } = useContext(ThemeModeContext);
  const navigate = useNavigate();
  const baseCategoriesList = Object.keys(lightTheme.colors.categories); //список id базовых категорий
  const [categoriesDraft, setCategoriesDraft] = useState(() => {
    //нет валидации пресетов пользовательских категорий на соответствие глобальным темам (если тема вдруг поменяется на новую). Делать лень, добавлю, если буду тему менять динамически
    let initCounter = 0;
    const draft = { categories: {} };
    Object.keys(fullTheme.colors.categories).forEach((key) => {
      draft.categories[initCounter] = { ...fullTheme.colors.categories[key] };
      if (baseCategoriesList.includes(key)) {
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
  const [inputKey, setInputKey] = useState(() => Date.now()); //ключ для сброса инпута загрузки файла

  const updateCategoriesDraft = (id, category) => {
    const { hasError, ...rest } = category;
    setCategoriesDraft((prev) => ({
      categories: {
        ...prev.categories,
        [id]: { ...rest },
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
      if (isValid.category && isValid.preset) {
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
      setNewCategory({ label: "", presetId: "" });
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
    if (
      validateCategory(nextCategory).category &&
      validateCategory(nextCategory).preset
    ) {
      updateCategoriesDraft(currentId, nextCategory);
    }
  };

  //валидация категории
  const validateCategory = (category = newCategory) => {
    const checkResult = {
      category: true,
      preset: true,
      categoryError: "",
      presetError: "",
    };
    const normalizedLabel = category.label.trim().toLowerCase();
    if (category.label.trim() === "") {
      checkResult.category = false;
      checkResult.categoryError = "Название категории не может быть пустым.";
    } else {
      Object.keys(categoriesDraft.categories).some((key) => {
        if (
          categoriesDraft.categories[key].label.toLowerCase() ===
            normalizedLabel &&
          key !== currentId
        ) {
          checkResult.category = false;
          checkResult.categoryError =
            "Категория с таким названием уже существует.";
          return true;
        }
        return false;
      });
    }
    if (!Object.keys(presets.presets).includes(category.presetId)) {
      checkResult.preset = false;
      checkResult.presetError = "Выберите стиль оформления.";
    }
    return checkResult;
  };

  const isValid = validateCategory();

  //снятие hasError в открытой категории, если данные валидны
  useEffect(() => {
    if (newCategory.hasError && isValid.category && isValid.preset)
      updateCategoriesDraft(currentId, newCategory);
  }, [isValid.category, isValid.preset, currentId, newCategory]);

  //валидация черновика на hasError
  const validateDraft = () => {
    let count = 0;
    Object.keys(categoriesDraft.categories).forEach((key) => {
      categoriesDraft.categories[key].hasError && count++;
    });
    return count;
  };

  const isDraftValid = validateDraft();

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

  const draftToUserCategories = () => {
    const userCategories = { categories: {} };
    Object.keys(categoriesDraft.categories).forEach((key) => {
      userCategories.categories[
        categoriesDraft.categories[key].label.toLowerCase()
      ] = {
        label: categoriesDraft.categories[key].label,
        presetId: categoriesDraft.categories[key].presetId,
      };
    });
    return userCategories;
  };

  const handleSave = () => {
    const invalidCount = validateDraft();
    if (invalidCount > 0) {
      toast.error(
        `Нельзя сохранить: исправьте ошибки в ${invalidCount} категориях.`,
      );
      return;
    }

    updateUserCategories(draftToUserCategories());
    toast.success("Категории сохранены.");
    navigate("/");
  };

  const exportUserCategories = () => {
    try {
      let element = document.createElement("a");
      const file = new Blob([JSON.stringify(draftToUserCategories())], {
        type: "application/json",
      });
      element.href = URL.createObjectURL(file);
      element.download = "userCategories.json";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      URL.revokeObjectURL(element.href);
      toast.success("Категории экспортированы в файл userCategories.json.");
    } catch (error) {
      toast.error(`Ошибка при экспорте категорий: ${error.message}`);
    }
  };

  const handleImport = (event) => {
    //загрузка файла и сохранение в переменную
    const file = event.target.files[0];
    if (!file) {
      setInputKey(Date.now());
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => {
      toast.error("Ошибка при чтении файла");
      setInputKey(Date.now());
    };
    reader.onload = (e) => {
      try {
        const importedCategories = JSON.parse(e.target.result);
        const valid = validateImportedCategories(importedCategories);
        if (valid) {
          importCategories(importedCategories);
        }
      } catch (error) {
        if (error instanceof SyntaxError) {
          toast.error("Ошибка синтаксиса JSON: " + error.message);
        } else {
          toast.error("Некорректный файл JSON: " + error.message);
        }
      } finally {
        setInputKey(Date.now()); //сброс инпута загрузки файла
      }
    };
    reader.readAsText(file);
  };

  const validateImportedCategories = (importedCategories) => {
    if (
      importedCategories &&
      importedCategories.categories &&
      typeof importedCategories.categories === "object"
    ) {
      Object.keys(importedCategories.categories).forEach((key) => {
        const category = importedCategories.categories[key];
        if (
          !category.label ||
          typeof category.label !== "string" ||
          category.label.trim() === ""
        ) {
          throw new Error(
            "Отсутствует или некорректно указано название категории",
          );
        }
      });
      return true;
    }
    throw new Error("Некорректный формат файла категорий");
  };

  const importCategories = (importedCategories) => {
    let importedDraft = { categories: {} };

    //Добавляем в черновик базовые категории
    Object.keys(lightTheme.colors.categories).forEach((key, index) => {
      importedDraft.categories[index] = {
        ...lightTheme.colors.categories[key],
        isBase: true,
      };
    });

    //Првоеряем импортированные категории на совпадения с базовыми
    Object.keys(importedDraft.categories).forEach((key) => {
      let coincidenceIndex = [];
      const baselabel = importedDraft.categories[key].label.toLowerCase();
      Object.keys(importedCategories.categories).forEach((impKey) => {
        if (
          baselabel ===
          importedCategories.categories[impKey].label.toLowerCase()
        ) {
          coincidenceIndex.push(impKey);
        }
      });
      if (coincidenceIndex.length === 1) {
        //если совпадение одно, помечаем на перезаписывание базовой категории
        importedCategories.categories[coincidenceIndex[0]].overridesBase = true;
      }
    });

    //проверяем импортированные категории на совпадения между собой
    //получаем массив label в файле
    const importedLabels = [];
    Object.keys(importedCategories.categories).forEach((key) => {
      importedLabels.push(
        importedCategories.categories[key].label.toLowerCase(),
      );
    });

    //ищем дубликаты и помечаем их как ошибочные
    const duplicates = [
      ...new Set(
        importedLabels.filter(
          (item, index) => importedLabels.indexOf(item) !== index,
        ),
      ),
    ];
    Object.keys(importedCategories.categories).forEach((key) => {
      if (
        duplicates.includes(
          importedCategories.categories[key].label.toLowerCase(),
        )
      ) {
        importedCategories.categories[key].hasError = true;
      }
    });

    //Проверяем категории на наличие presetId и совпадение с существующими в теме
    Object.keys(importedCategories.categories).forEach((key) => {
      const presetId = importedCategories.categories[key].presetId;
      if (!presetId || !Object.keys(presets.presets).includes(presetId)) {
        importedCategories.categories[key].presetId = "";
        importedCategories.categories[key].hasError = true;
      }
    });

    //Импортируем категории в черновик, перезаписывая базовые при необходимости
    let importCounter = Object.keys(importedDraft.categories).length;
    Object.keys(importedCategories.categories).forEach((key) => {
      const category = importedCategories.categories[key];
      if (category.overridesBase) {
        //перезаписываем базовую категорию
        Object.keys(importedDraft.categories).forEach((impKey) => {
          if (
            importedDraft.categories[impKey].label.toLowerCase() ===
            category.label.toLowerCase()
          ) {
            importedDraft.categories[impKey] = {
              label: category.label,
              presetId: category.presetId,
              isBase: true,
              ...(category.hasError && { hasError: true }),
            };
          }
        });
      } else {
        //добавляем новую категорию
        importedDraft.categories[importCounter] = {
          label: category.label,
          presetId: category.presetId,
          ...(category.hasError && { hasError: true }),
        };
        importCounter += 1;
      }
    });
    setCategoriesDraft(importedDraft);
    const errorCount = Object.values(importedDraft.categories).filter(
      (c) => c?.hasError,
    ).length;

    if (errorCount > 0) {
      toast.warn(
        `Импорт выполнен, но есть проблемы: ${errorCount} категорий требуют исправления.`,
      );
    } else {
      toast.success("Категории успешно импортированы.");
    }
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
            $hasError={categoriesDraft.categories[key].hasError}
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
                  $message={isValid.categoryError}
                  $error={!isValid.category}
                />
              </CategoriesInputWrap>
            </ModalFieldBlock>
            <ModalFieldBlock>
              <ModalFormLabel htmlFor="presetId">
                Выберите цветовую палитру
              </ModalFormLabel>
              <CategoriesInputWrap>
                <CategoriesSelect
                  name="presetId"
                  id="presetId"
                  onChange={handleChange}
                  value={newCategory.presetId || ""}
                >
                  <option value="">--Выберите стиль оформления--</option>
                  {Object.keys(presets.presets).map((key) => (
                    <option key={key} value={key}>
                      {presets.presets[key].label}
                    </option>
                  ))}
                </CategoriesSelect>
                <CategoriesCheck
                  $message={isValid.presetError}
                  $error={!isValid.preset}
                />
              </CategoriesInputWrap>
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
        <CategoriesImportLabel htmlFor="import-categories">
          Импорт категорий
        </CategoriesImportLabel>
        <CategoriesImportInput
          type="file"
          id="import-categories"
          key={inputKey}
          accept=".json,application/json"
          onChange={(e) => {
            handleImport(e);
          }}
        />
        <CategoriesBtnSec
          type="button"
          onClick={() => {
            exportUserCategories();
          }}
        >
          Экспорт категорий
        </CategoriesBtnSec>
      </CategoriesBtns>
      <CategoriesBtns>
        {isDraftValid > 0 && (
          <CategoriesCheck
            $message={`Исправьте ошибки в ${isDraftValid} категориях`}
            $error={isDraftValid > 0}
          />
        )}
        <CategoriesBtnPrim
          type="button"
          onClick={() => {
            handleSave();
          }}
          disabled={isDraftValid > 0}
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
