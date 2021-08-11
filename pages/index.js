import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BA Salons</title>
        <meta
          name="description"
          content="No sirds PALDIES visiem, kas bija kopā ar mums!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            className={styles.heroImage}
            src="/hero.jpg"
            alt="BA Salons Masāžas galds"
          />

          <div className={styles.heroText}>
            <img
              className={styles.logo}
              src="/lotus.svg"
              alt="BA Salons logo"
            />
            <h1 className={styles.heading}>BA Salons</h1>
          </div>
        </div>

        <div className={styles.contentWrapper}>
          <section className={styles.content}>
            <div className={styles.contentSection}>
              <p>
                Sveicināti! Informējam, ka masāžas no 01.08.2021 vairs nebūs
                pieejamas. Šis ir bijis pārmaiņu un pārdomu laiks daudziem. Arī
                mums.{" "}
              </p>
              <p>
                Lūdzu visus, kam ir neizmantotas dāvanu kartes, sazinieties ar
                mums zvanot uz{" "}
                <Link href="tel:29161903">
                  <a>29161903</a>
                </Link>{" "}
                vai rakstot uz{" "}
                <Link href="mailto:salons@ba-salons.lv">
                  <a target="_blank">salons@ba-salons.lv</a>
                </Link>
                ; atmaksāsim naudu. Atvainojamies par sagādātajām neērtībām!
              </p>
              <p>No sirds PALDIES visiem, kas bija kopā ar mums! ❤️</p>
            </div>

            <div className={styles.contentSection}>
              <p>
                Здравствуйте! Информируем, что с 1 августа 2021 года массажи не
                будут доступны. Просим владельцев неиспользованных подарочных
                карт связаться с нами по телефону{" "}
                <Link href="tel:29161903">
                  <a>29161903</a>
                </Link>{" "}
                или электронной почте{" "}
                <Link href="mailto:salons@ba-salons.lv">
                  <a target="_blank">salons@ba-salons.lv</a>
                </Link>
                . Извиняемся за возникшие неудобства!{" "}
              </p>
              <p>От всего сердца благодарим, что были с нами. ❤️</p>
            </div>

            <div className={styles.contentSection}>
              <p>
                Hello! We inform you that from 1 August 2021 massages will no
                longer be available. If you have a gift card, please get in
                touch with us on{" "}
                <Link href="tel:29161903">
                  <a>29161903</a>
                </Link>{" "}
                or{" "}
                <Link href="mailto:salons@ba-salons.lv">
                  <a target="_blank">salons@ba-salons.lv</a>
                </Link>
                . We apologise for any inconvenience this may cause.
              </p>
              <p>
                From the bottom of our heart, thank you for all your support. ❤️
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
