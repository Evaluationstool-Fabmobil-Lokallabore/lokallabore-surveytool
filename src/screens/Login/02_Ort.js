import SingleChoice from "../../components/SingleChoiceTool";
import VerticalGrid from "../../components/VerticalGrid";
import { useNavigate } from "react-router-dom";
import LOKALLABOR_LOCATIONS from "../../constants/lokallabor-locations";

const ANSWER_OPTIONS = LOKALLABOR_LOCATIONS;

function Screen({ onSubmit, data, nextRoute, globalData }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-grow">
      <p>
        Hey <span className="font-bold">{globalData.nickname}</span>! <br />{" "}
        <br />
        Schön, dass du wieder da bist! In welchem Lokallabor bist du gerade?
      </p>
      <div className="vertical-center">
        <VerticalGrid>
          <SingleChoice
            answer={data}
            options={ANSWER_OPTIONS}
            onSelect={(answer) => {
              onSubmit(answer);
              setTimeout(() => navigate(nextRoute), 500);
            }}
          />
        </VerticalGrid>
      </div>
    </div>
  );
}

export default Screen;
