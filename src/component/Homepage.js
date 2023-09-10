import "../index.css";
import Navbar from "./Navbar";
import Service from "./Service";
import Header from "./Header";
import Learning from "./Learning";
import Footer from "./Footer";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Header />
      <Service />
      <Learning />
      <Footer />
    </>
  );
}
