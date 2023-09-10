import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
export default function Service() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="dark:bg-[#111827] dark:text-white  w-full">
      <h1 className="text-center text-xl md:text-3xl p-5">
        WiseHive Developing Skills, Enriching Lives
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-3 mt-10 md:mx-auto">
        <div className="w-full md:w-1/2 service-list ml-4" data-aos="fade-left">
          {/* <!--  card --> */}
          <div className="w-1/2 md:w-full">
            <div className="bg-pink-500 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">
              Siswa lebih aktif bertanya
            </h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Karena tidak ada tekanan waktu, siswa lebih mudah untuk bertanya
              ketika ada yang mereka tidak mengerti.
            </p>
          </div>
        </div>
        {/* <!--  card --> */}
        <div
          className="w-full md:w-1/2 service-list ml-4 mt-10 md:mt-0"
          data-aos="fade-right"
        >
          <div className="w-1/2 md:w-full">
            <div className="bg-yellow-300 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">Materi lebih fokus</h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Materi yang disampaikan dalam jam tambahan dapat difokuskan secara
              spesifik sesuai dengan kebutuhan siswa.
            </p>
          </div>
        </div>
        {/* <!--  card --> */}
        <div
          className="w-full md:w-1/2 service-list ml-4 mt-10 md:mt-0"
          data-aos="fade-right"
        >
          <div className="w-1/2 md:w-full">
            <div className="bg-pink-400 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">Pengajar lebih asik</h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Instruktur yang asik, tetap jelas saat mengajar, anggap seperti
              teman yang senang mengajar
            </p>
          </div>
        </div>
        {/* <!--  card --> */}
        {/* <!--  card --> */}
        <div
          className="w-full md:w-1/2 service-list ml-4 mt-10 md:mt-10"
          data-aos="fade-left"
        >
          <div className="w-1/2 md:w-full">
            <div className="bg-blue-400 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">Belajar Bersama</h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Kalian dapat belajar bersama dengan teman, berdiskusi materi dan
              buat projek bersama untuk memperkuat pemahaman.
            </p>
          </div>
        </div>
        {/* <!--  card --> */}
        {/* <!--  card --> */}
        <div
          className="w-full md:w-1/2 service-list ml-4 mt-10 md:mt-10"
          data-aos="fade-left"
        >
          <div className="w-1/2 md:w-full">
            <div className="bg-green-400 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">Praktek Langsung</h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Jika di kelas kebanyakan materi, maka disini kita akan full
              praktek
            </p>
          </div>
        </div>
        {/* <!--  card --> */}
        {/* <!--  card --> */}
        <div
          className="w-full md:w-1/2 service-list ml-4 mt-10 md:mt-10"
          data-aos="fade-right"
        >
          <div className="w-1/2 md:w-full">
            <div className="bg-yellow-200 w-16 flex justify-center py-4 rounded-t-3xl font-poppins font-bold rounded-b-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold ps-2 pt-2">Gratis</h1>
            <p className="text-xs dark:text-white text-slate-700 font-sans ps-2 pt-2">
              Jika mengikuti Kelas ini tidak ada biaya tambahan atau langganan
              setiap bulannya
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
