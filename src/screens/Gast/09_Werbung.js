import WeiterButton from "../../components/WeiterButton";
import MultipleChoiceTool from "../../components/MultipleChoiceTool";
import VerticalGrid from "../../components/VerticalGrid";

const ANSWER_OPTIONS = [
  "Freund*innen",
  "Verwandte",
  "Schule",
  "Soziale Medien",
  "Zeitung oder Radio",
  "Sonstiges",
];

function Screen({ onSubmit, data, nextRoute }) {
  function hasUserAnswered() {
    if (data && data.length > 0) {
      return true;
    }
    return false;
  }
  return (
    <>
      <p>Wie hast du vom Lokallabor gehört?</p>
      <div className="flex-grow overflow-auto">
        <VerticalGrid>
          <MultipleChoiceTool
            options={ANSWER_OPTIONS}
            onChange={onSubmit}
            data={data}
          />
          <WeiterButton inner disabled={!hasUserAnswered()} navigateTo={nextRoute} />
        </VerticalGrid>
      </div>
    </>
  );
}

export default Screen;
