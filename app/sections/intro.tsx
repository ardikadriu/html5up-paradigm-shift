import Image from "next/image";
import pic01 from "@/public/pic01.jpg";
import ImgBgc from "./ImgBgc";

const Intro = () => {
  return (
    <section className="intro">
      <header>
        <h1>Paradigm Shift</h1>
        <p>
          A free responsive site template designed by{" "}
          <a href="https://twitter.com/ajlkn">@ajlkn</a> /{" "}
          <a href="https://html5up.net">HTML5 UP</a>
        </p>
        <ul className="actions">
          <li>
            <a href="#first" className="arrow scrolly">
              <span className="label">Next</span>
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
        <ImgBgc position={"center"} src={pic01} />
      </div>
    </section>
  );
};

export default Intro;
