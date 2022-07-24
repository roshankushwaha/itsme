import { useEffect, useState } from "react";
import moment from "moment";
export default function About() {
  const [autotext, setautotext] = useState("");
  const [age, setage] = useState("...");
  useEffect(() => {
    let date = document.getElementsByClassName("date")[0];
    setInterval(() => {
      let time = diffYMDHMS(moment(), moment("9-6-2003", "D-M-YYYY"));
      let age =
        "I'm " +
        time.years +
        " years " +
        time.months +
        " months " +
        time.days +
        " days " +
        time.hours +
        " hours " +
        time.minutes +
        " minutes " +
        time.seconds +
        " seconds and " +
        time.mili +
        "  milliseconds " +
        "old";
      setage(age);
    });

    function diffYMDHMS(current, birthday) {
      let duration = moment.duration(current.diff(birthday));
      let years = duration.years();
      let months = duration.months();
      let days = duration.days();
      let hours = duration.hours();
      let minutes = duration.minutes();
      let seconds = String(duration.seconds());
      let mili = String(duration.milliseconds());
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      } //something for git
      if (mili.length == 1) {
        mili = "00" + mili;
      } else if (mili.length == 2) {
        mili = "0" + mili;
      }
      return { years, months, days, hours, minutes, seconds, mili };
    }
    let str = ["pradeep", "coder", "student", "a proud indian"];

    let i = 0,
      j = 0;
    let p;
    let first = true;
    setInterval(() => {
      setautotext(str[i].substring(0, j + 1));
      j++;
      if (j == str[i].length) {
        j--;
      }
      if (str[i].length - 1 == j && first) {
        first = false;
        setTimeout(() => {
          j = 0;
          i++;
          if (i == str.length) {
            i = 0;
          }
          first = true;
        }, 2000);
      }
    }, 50);
  }, []);

  return (
    <div className="h-[80vh]   flex  flex-col justify-center font-spacing font-black">
      <div className="  h-[20rem] flex flex-col justify-center items-center">
        <div className="pt-[20px]  ">
          Hi! i'm{" "}
          <span
            className="after:w-[2px]   after:overflow-hidden after:h-[1rem] after:content-['|']  after:font-[900] after:font-xl after:animate-pulse"
            id="auto-text"
          >
            {autotext}
          </span>
        </div>
        <div className=" leading-8 indent-4 max-w-[40ch] p-[10px] text-justify tracking-wider ">
          <span className="date">{age}</span>
          <span>
            {" "}
            and I'm pursuing B.Tech in computer science from{" "}
            <a
              href="https://uttaranchaluniversity.ac.in/"
              className="text-blue-300 hover:text-red-300"
              target="_blank"
            >
              Uttranchal University
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
