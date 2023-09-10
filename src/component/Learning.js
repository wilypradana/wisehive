import basicNetwork from "../images/basicNetwork.jpeg";
import bootstrap from "../images/bootstrap.png";
import css from "../images/css.png";
import git from "../images/git.png";
import html from "../images/html.png";
import js from "../images/js.png";
import mysql from "../images/mysql.png";
import php from "../images/php.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import office from "../images/office.webp";
export default function Learning() {
  return (
    <>
      <section className="bg-white dark:bg-[#111827]">
        <h1 className="text-black dark:text-white text-center text-2xl md:text-3xl pb-3 pt-10">
          Pelajaran yang relevan saat ini
        </h1>
        <h1
          className="text-black dark:text-white text-center text-xs md:text-2xl"
          id="kelas"
        >
          Belajar hal yang relevan dengan zaman memudahkan kamu mendapatkan
          pekerjaan atau membuat produk sendiri.
        </h1>
        <div className="container mt-10 md:mx-auto pb-2">
          <ul className="m-4 grid md:grid-cols-9 grid-cols-4 gap-3">
            <li>
              <img
                src={html}
                alt=""
                className="translate-x-4 skew-y-3 hover:transform-none"
                data-aos="flip-left"
              />
            </li>
            <li>
              <img
                src={css}
                alt=""
                className="translate-x-4 skew-y-3 hover:transform-none"
                data-aos="flip-right"
              />
            </li>
            <li>
              <img
                src={js}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-down"
              />
            </li>
            <li>
              <img
                src={php}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-left"
              />
            </li>
            <li>
              <img
                src={mysql}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-right"
              />
            </li>
            <li>
              <img
                src={bootstrap}
                alt=""
                className="translate-x-4 skew-y-3 hover:transform-none "
                data-aos="flip-up"
              />
            </li>
            <li>
              <img
                src={tailwind}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-down"
              />
            </li>
            <li>
              <img
                src={react}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-left"
              />
            </li>
            <li>
              <img
                src={git}
                alt=""
                className="translate-x-4 skew-y-3"
                transform-none
                data-aos="flip-left"
              />
            </li>
            <li>
              <img
                src={office}
                alt=""
                className="translate-x-4 skew-y-3 hover:transform-none mt-4"
                data-aos="flip-right"
              />
            </li>
            <li>
              <img
                src={basicNetwork}
                alt=""
                className="translate-x-4 skew-y-3 hover:transform-none mt-4"
                data-aos="flip-down"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
