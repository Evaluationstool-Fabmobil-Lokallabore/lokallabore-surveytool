import ButtonNext from "../../../components/ButtonNext";
import RobiGif from "../../../components/RobiGif";

function Screen({ globalData }) {
  return (
    <>
      <p>
        Danke <span className="font-bold">{globalData.nickname}</span>! <br />
        Viel Spaß im Lokallabor!
      </p>
      <RobiGif style={{ transform: "rotate(2.2deg)", width: 331 }} />
      <ButtonNext to="/">Log Out</ButtonNext>
    </>
  );
}

export default Screen;
