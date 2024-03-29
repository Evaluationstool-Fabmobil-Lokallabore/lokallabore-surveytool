import ButtonNext from "../../components/ButtonNext";
import RobiGif from "../../components/RobiGif";

function Screen({ globalData }) {
  return (
    <>
      <p>
        Danke <span className="font-bold">{globalData.nickname}</span> für deine
        Anmeldung! <br />
        <br />
        Logge dich aus und genieße deinen Aufenthalt im Lokallabor!
      </p>
      <RobiGif className="w-80" style={{ transform: "rotate(20.25deg)" }} />
      <ButtonNext to={"/"}>Log Out</ButtonNext>
    </>
  );
}

export default Screen;
