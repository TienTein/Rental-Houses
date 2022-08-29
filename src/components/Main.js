import Header from "./global-components/Header";
import Carousel from "./section-components/Carousel";
import Overview from "./section-components/Overview";
import Services from "./section-components/Services";
import FamousView from "./section-components/FamousView";
import Feedbacks from "./section-components/Feedbacks";
import News from "./section-components/News";
import Footer from "./global-components/Footer";
import Discover from "./global-components/Discover";
import { useEffect, useState } from "react";
function Main() {
  const [checkmain, setChekmain] = useState(false);
  useEffect(() => {
    setChekmain(true);
  }, [checkmain]);
  return (
    <div className="Main">
      <Header main={checkmain} />
      <Carousel />
      <Overview />
      <Services />
      <FamousView />
      <Feedbacks />
      <News />
      <Discover />
      <Footer />
    </div>
  );
}
export default Main;
