import WeiterButton from "../../../components/WeiterButton";
import SingleChoice from "../../../components/SingleChoiceTool";
import TextInput from "../../../components/TextInput";
import VerticalGrid from "../../../components/VerticalGrid";
import iconLasercutting from "../../../assets/icon-lasercutting.png";
import icon3DDruck from "../../../assets/icon-3Ddruck.png";
import iconMikro from "../../../assets/icon-mikroelektronik.png";
import classNames from "classnames";

const ANSWER_OPTIONS = ["3D-Druck", "Lasercutting", "Mikroelektronik"];
const ANSWER_ICONS = [icon3DDruck, iconLasercutting, iconMikro];

function Screen({ onSubmit, data, nextRoute }) {
  function handleSingleChoice(val) {
    onSubmit({ predefinedValue: val, freeValue: "" });
  }

  function handleFreeValueInput(val) {
    onSubmit({ freeValue: val });
  }

  function hasUserAnswered() {
    if (data && data.predefinedValue && data.predefinedValue.length > 0) {
      return true;
    }
    if (data && data.freeValue && data.freeValue.length > 0) {
      return true;
    }
    return false;
  }

  return (
    <>
      <p>Mit welchen Technologien arbeitest du am am meisten? </p>
      <VerticalGrid>
        <SingleChoice
          addons={ANSWER_ICONS.map((el, i) => (
            <img
              alt=""
              src={el}
              className={classNames(
                "absolute top-0",
                { "right-0": i % 2 === 0 },
                { "left-0": i % 2 !== 0 }
              )}
            />
          ))}
          options={ANSWER_OPTIONS}
          answer={data && data.predefinedValue}
          onSelect={handleSingleChoice}
        />
        <TextInput
          placeholder="Andere"
          value={(data && data.freeValue) || ""}
          onChange={(val) => handleFreeValueInput(val)}
        />
        <WeiterButton
          inner
          disabled={!hasUserAnswered()}
          navigateTo={nextRoute}
        />
      </VerticalGrid>
    </>
  );
}

export default Screen;
