import React from "react";
import Rapidapp from "./components/rapidapp";
import Aboutus from "./components/aboutus";
import Ourprocess from "./components/ourprocess";
import Whychoose from "./components/whychoose";
import Helpyou from "./components/helpyou";
import Ourcustomers from "./components/ourcustomers";
import Ourproducts from "./components/ourproducts";
import Leaderships from "./components/leaderships";
import Footer from "./components/footer";
export default function Page() {
  return (
    <>
      <div className="overflow-x-hidden">
        <Rapidapp />
        <Aboutus />
        <Ourprocess />
        <Whychoose />
        <Helpyou />
        <Ourproducts />
        <Ourcustomers />
        <Leaderships />
        <Footer />
      </div>
    </>
  );
}
