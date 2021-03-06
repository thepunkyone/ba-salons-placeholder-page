import Head from "next/head";
import Link from "next/link";

import styles from "../styles/Home.module.scss";

const title = "BA Salons | Masāžas Rīgā un Tukumā";
const description = "No sirds PALDIES visiem, kas bija kopā ar mums!";
const absoluteUrl = "https://ba-salons.lv/";
const metaImage = "/hero-500px.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="rating" content="general" />
        <meta name="robots" content="all" />

        <meta property="og:site_name" content="BA Salons" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={absoluteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:site" content="@BASalons" />
        <meta property="twitter:url" content={absoluteUrl} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={metaImage} />
      </Head>

      <main className={styles.main}>
        <div className={styles.hero}>
          <img
            className={styles.heroImage}
            srcset="/hero-500px.jpg 500w,
             /hero-1000px.jpg 1000w,
             /hero-2000px.jpg 2000w,
             /hero-4000px.jpg 4000w"
            sizes="(max-width: 500px) 500px,
            (min-width: 501px) and (max-width: 1000px) 1000px,
            (min-width: 1001px) and (max-width: 2000px) 2000px,
            (min-width: 2001px) 4000px"
            src="/hero-1000px.jpg"
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
