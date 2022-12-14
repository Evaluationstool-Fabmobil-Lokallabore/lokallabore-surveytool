import ButtonNext from "../components/ButtonNext";
import VerticalGrid from "../components/VerticalGrid";

function Screen() {
  return (
    <div className="flex-grow flex flex-col justify-center">
      <VerticalGrid className="w-full px-4 md:-mt-72 flex justify-center">
        <ButtonNext to="/registrierung/start" normalPositioning>
          Registrierung
        </ButtonNext>
        <ButtonNext to="/login/anmeldung" normalPositioning>
          Login
        </ButtonNext>
        <ButtonNext to="/gast/start" normalPositioning>
          Ich bin zu Gast
        </ButtonNext>
        <div className="grid grid-cols-3 gap-6 fixed w-full left-0 bottom-0 justify-items-center px-6 h-20">
          <div className="Logo Logo--palm flex-grow"></div>
          <div className="Logo Logo--drosos flex-grow"></div>
          <div className="Logo Logo--beisheim flex-grow"></div>
        </div>
      </VerticalGrid>
    </div>
  );
}

export default Screen;
