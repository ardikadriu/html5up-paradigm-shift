import {
  Intro,
  First,
  Content,
  Firstimages,
  Secondimages,
  Thirdimages,
  Buttons,
  Getintouch,
} from "./sections";

export default function Home() {
  return (
    <body>
      <main id="wrapper">
        <Intro />
        <First title={"Magna sed nullam nisl adipiscing"} />
        <Content />
        <Firstimages />
        <Secondimages />
        <Thirdimages />
        <Buttons />
        <Getintouch />
      </main>
    </body>
  );
}
