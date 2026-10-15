import "./HomePage.css";

import HomeHero from "../components/HomeHero.jsx";
import HomePlans from "../components/HomePlans.jsx";

function HomePage() {
  return (
    <main className="home-page">
      <div className="home-main-layout">
        <HomeHero />
        <HomePlans />
        {/* <HomeGenres />
        <HomePromotion />
        <HomeMember />
        <HomeBenefits />
        <HomeFAQ />
        <HomeDisclaimer /> */}
      </div>
    </main>
  );
}

export default HomePage;