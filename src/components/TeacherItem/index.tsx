import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/20601076?s=460&u=95033f8c6a205dbab0f3825fb455928c9c8136e0&v=4"
          alt="Francisco Maik"
        />
        <div>
          <strong>Francisco Maik</strong>
          <span>Banco de Dados</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti magni
        tempora consequuntur sit provident minima exercitationem eaque commodi
        nostrum repudiandae laborum dolores similique minus quasi obcaecati
        sapiente, eos nobis accusantium!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
