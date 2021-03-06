import Main from "./main";
import Footer from "./footer";
import About from "./about";
import Jobs from "./jobs";
import Talent from "./talent";
import Wrapper from "./wrapper";

function Home() {
  return (
    <div class="page">
      <Main />
      <Wrapper />
      <Talent />
      <Jobs />
      <About />
      <Footer />
    </div>
  );
}

export default Home;
