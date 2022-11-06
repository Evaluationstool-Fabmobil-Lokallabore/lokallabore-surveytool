import WeiterButton from "../../components/WeiterButton";
import VerticalGrid from "../../components/VerticalGrid";
import TextInput from "../../components/TextInput";

function Screen({ onSubmit, data, nextRoute }) {
  function hasUserAnswered() {
    if (!data) return false;
    return !!data.nickname && !!data.day && !!data.month && !!data.year;
  }
  return (
    <>
      <p>Melde dich mit deinem Spitznamen und Geburtstag an :)</p>
      <div className="vertical-center">
        <VerticalGrid>
          <TextInput
            placeholder="Nickname"
            value={data && data.nickname ? data.nickname : ""}
            onChange={(val) => onSubmit({ ...data, nickname: val })}
          />
          {/*Tag, Monat, Jahr */}
          <TextInput
            placeholder="Tag"
            value={data && data.day ? data.day : ""}
            onChange={(val) => onSubmit({ ...data, day: val })}
          />
          <TextInput
            placeholder="Monat"
            value={data && data.month ? data.month : ""}
            onChange={(val) => onSubmit({ ...data, month: val })}
          />
          <TextInput
            placeholder="Jahr"
            value={data && data.year ? data.year : ""}
            onChange={(val) => onSubmit({ ...data, year: val })}
          />
        </VerticalGrid>
      </div>
      <WeiterButton disabled={!hasUserAnswered()} navigateTo={nextRoute} />
    </>
  );
}

export default Screen;
