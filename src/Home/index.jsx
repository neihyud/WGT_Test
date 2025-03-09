import "../index.css";
import bicycle from "@assets/image/bicycle.png";
import lake from "@assets/image/lake.png";
import conicalHat from "@assets/image/conical-hat.png";
import bench from "@assets/image/bench.png";

const HomePage = () => {
  return (
    <div className="container">
      <p className="section__title">Lorem ullamco</p>
      <div className="introduce">
        <div className="introduce__image-group">
          <div className="introduce__image">
            <img src={lake} alt="Lake" />
          </div>
          <div className="introduce__image">
            <img src={bicycle} alt="Bicycle" />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur
          eiusmod consectetur proident Lorem reprehenderit esse do anim velit in
          aliquip dolore ut officia. Consectetur reprehenderit proident do
          exercitation eu. Sunt fugiat pariatur elit est laboris quis. Esse
          mollit incididunt quis amet. Qui non irure incididunt laborum nisi
          cillum consequat aliquip aliquip cillum in. Ut excepteur labore
          voluptate tempor cupidatat dolor eiusmod do ipsum Lorem cupidatat do
          labore.
        </p>

        <p>
          Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur. Non
          excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem incididunt
          nisi mollit nostrud. Irure velit enim elit minim commodo qui culpa
          cillum duis fugiat consequat pariatur.
        </p>
      </div>

      <div className="introduce-detail">
        <div className="card item-1">
          <img src={bench} alt="Bench" />
        </div>

        <div className="introduce-detail__text card item-2">
          <div className="card__text--first">
            <h2 className="card__title">Lorem ipsum</h2>

            <p className="spacer-4 "></p>

            <h4 className="card__subtitle">Excepteur eiusmod consectetur</h4>
            <p className="card__text">
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>

            <p className="spacer-4 "></p>

            <h4 className="card__subtitle">Quis aliqua reprehenderit</h4>
            <p className="card__text">
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>

            <p className="spacer-4 "></p>

            <h4 className="card__subtitle">
              Ad sit cillum amet duis quis commodo
            </h4>
            <p className="card__text">
              Proident dolore nisi eiusmod excepteur aliquip esse ut excepteur.
              Non excepteur sunt reprehenderit sit ex ullamco eiusmod Lorem
              incididunt nisi mollit nostrud. Irure velit enim elit minim
              commodo qui culpa cillum duis fugiat consequat pariatur.
            </p>
          </div>
        </div>

        <div className="introduce-detail__text card item-3">
          <div className="card__text--second ">
            <p className="card__title">Mollit aliquip do ipsum consectetur</p>

            <p className="spacer-10"></p>

            <p className="card__text">
              Ex laborum ea qui consectetur mollit commodo eiusmod culpa dolor
              cupidatat. Ullamco dolore irure ea sit elit velit non officia. Ad
              eu reprehenderit in et voluptate mollit. Reprehenderit incididunt
              magna consequat enim sit eiusmod est dolor laborum cupidatat.
            </p>

            <p className="spacer-4"></p>

            <p className="card__text">
              Ipsum minim mollit irure dolore. Sint fugiat deserunt dolor aute
              enim et cillum adipisicing cillum nostrud anim. Sit dolore
              incididunt dolore do sunt pariatur consectetur id qui pariatur eu
              incididunt adipisicing. Irure sint fugiat officia veniam
              consectetur. Esse laborum amet aliqua ad in sunt labore duis.
            </p>
          </div>
        </div>

        <div className="card item-4">
          <img src={conicalHat} alt="Conical Hat" />
        </div>
      </div>

      <p className="spacer-10"></p>
    </div>
  );
};
export default HomePage;
