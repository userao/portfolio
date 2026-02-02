import { useState } from "react";
import Button from "../components/Button/Button";
import Socials from "../components/Socials/Socials";
import Modal from "../components/Modal/Modal";

export default function Main() {
    const [isModalShown, setIsModalShown] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    }
    return (
        <>
            <article className="article abt-me">
                <div className="horizontal-line" />
                <h1 className="article__header">
                    Я Андрей&nbsp;Остапенко
                    <br />
                    Веб разработчик
                </h1>
                <p className="article__content">
                    Делаю сайтики и обкашливаю вопросики
                </p>
                <Button
                    label={"Связь"}
                    className={"btn-dark"}
                    clickHandler={() => setIsModalShown(true)}
                />
                <h4 className="socials-header">Подпишись на меня</h4>
                <Socials />
            </article>
            {isModalShown && (
                <Modal>
                    <div className="reach-me__modal">
                        <form
                            className="reach-me__form"
                            onSubmit={handleSubmit}
                        >
                            <label>
                                Ваше имя
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                />
                            </label>
                            <label>
                                Ваш e-mail
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                />
                            </label>
                            <label>
                                Ваши идеи
                                <textarea
                                    rows={5}
                                    name="ideas"
                                    placeholder="Ну давай, расскажи мне..."
                                />
                            </label>
                            <Button label="Отправить запрос" type="submit" />
                        </form>
                        <button
                            className="close-modal-btn fa-solid fa-square-xmark"
                            onClick={() => setIsModalShown(false)}
                        />
                    </div>
                </Modal>
            )}
        </>
    );
}
