import { useState } from "react";
//import { age, ageWork } from "../../utils/age";
import { Texts } from "../../utils/texts";
import '../../sass/items.scss'

export const WhoIAm = () => {
  const [activeTab, setActiveTab] = useState(2019);

  const handleTabClick = (year) => {
    setActiveTab(year);
  };

  const activeTabContent = Texts.find((tab) => tab.year === activeTab);
  return (
    <>
      <div className="container-text">
        <div className="tabs is-centered is-fullwidth ">
          <ul className="list-tabs">
            <li
              className={activeTab === 2019 ? "is-active" : ""}
              onClick={() => handleTabClick(2019)}
            >
              <a>2019</a>
            </li>
            <li
              className={activeTab === 2020 ? "is-active" : ""}
              onClick={() => handleTabClick(2020)}
            >
              <a>2020</a>
            </li>
            <li
              className={activeTab === 2021 ? "is-active" : ""}
              onClick={() => handleTabClick(2021)}
            >
              <a>2021</a>
            </li>
            <li
              className={activeTab === 2022 ? "is-active" : ""}
              onClick={() => handleTabClick(2022)}
            >
              <a>2022</a>
            </li>
            <li
              className={activeTab === 2023 ? "is-active" : ""}
              onClick={() => handleTabClick(2023)}
            >
              <a>2023</a>
            </li>
            <li
              className={activeTab === 2024 ? "is-active" : ""}
              onClick={() => handleTabClick(2024)}
            >
              <a>2024</a>
            </li>
          </ul>
        </div>
        <div style={{ padding: "3em", lineHeight: "2em" }} className="text">
          {/*<h3>SENTA QUE LÁ VEM HISTÓRIA ...</h3>
          <p>
            Prazer, me chamo Alan Dorneles, tenho {age} anos e trabalho com
            front-end há {ageWork} anos, natural de Venâncio Aires - RS
  </p>*/}
          <p className="text">{activeTabContent && activeTabContent.text}</p>
        </div>
      </div>
    </>
  );
};
