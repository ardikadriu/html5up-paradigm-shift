import Content from "../sections/content";
import First from "../sections/First";
import Intro from "../sections/intro";
import Firstimages from "../sections/firstimages";
import Secondimages from "../sections/Secondimages";

export default function Home() {
  return (
    <main className="wrapper">
      <h1>about</h1>
      <Intro />
      <First />
      <Content />
      <Firstimages />
      <Secondimages />
    </main>
  );
}
