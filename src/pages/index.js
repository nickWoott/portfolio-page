import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    // i think we can probably do something here that will fix this?
    // just create a new component that is a placeholder
    <Layout>
      {/* <Section grid> */}
      <Hero />
      {/* <Timeline /> */}
      {/* <BgAnimation /> */}
      {/* </Section> */}
      {/* <Projects /> */}
      {/* <Technologies /> */}
    </Layout>
  );
};

export default Home;
