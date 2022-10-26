import React, { FC, useRef } from "react";
import styles from "./Address.module.scss";
import { Search } from "../../components/svgs/Search";
import { AddressSuggestions } from "react-dadata";

export const Adress: FC = () => {
  const direction = useRef<AddressSuggestions>(null);

  return (
    <div className={styles.address}>
      <div className={styles.title}>
        <h2>Поиск адресов</h2>
        <p>Введите интересующий вас адрес</p>
      </div>

      <div className={styles.container}>
        <div className={styles.blockInput}>
          <div className={styles.search}>
            <AddressSuggestions
              token="14672f0dd80a221b24c5b72776b238b020e46174"
              ref={direction}
              suggestionsClassName={styles.suggestions}
              suggestionClassName={styles.suggestion}
              containerClassName={styles.containers}
              minChars={3}
              count={50}
              hintText={"Адреса"}
              hintClassName={styles.textHint}
            />
          </div>
          <div className={styles.button}>
            <button>
              <span>
                <Search />
              </span>
              Поиск
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
