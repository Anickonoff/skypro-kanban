import Calendar from "../Calendar/Calendar";
import "../../App.css";
import { useNavigate, useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { getTask } from "../../services/api";
import Loader from "../Loader/Loader";
// import { cardList } from "../../data";

const PopBrowse = () => {
  const { id } = useParams();
  // const card = cardList.find((card) => card.id == id);
  const [card, setCard] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getCard = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTask({
        token: "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k",
        id,
      });
      if (!data) throw new Error("Задача не найдена");
      setCard(data);
    } catch (e) {
      setError(e.message);
      console.error(e.message);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCard();
  }, [getCard]);

  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };
  if (loading) return <Loader />;
  if (error) return <div className="error">Ошибка: {error}</div>;
  if (!card) return <div className="empty">Задача не найдена</div>;

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">{card.title}</h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">{card.topic}</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme _hide">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme _hide">
                  <p>В работе</p>
                </div>
                <div className="status__theme _hide">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme _hide">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={card.description}
                  ></textarea>
                </div>
              </form>
              <Calendar />
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                className="btn-browse__close _btn-bg _hover01"
                type="button"
                onClick={handleClose}
              >
                Закрыть
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete"
                >
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button
                className="btn-edit__close _btn-bg _hover01"
                type="button"
                onClick={handleClose}
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;
