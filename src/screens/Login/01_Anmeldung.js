import WeiterButton from "../../components/WeiterButton";
import VerticalGrid from "../../components/VerticalGrid";
import TextInput from "../../components/TextInput";
import { useNavigate } from "react-router";

function prefixWithZero(numberString) {
  if (!numberString) return "";
  return numberString.length > 1 ? numberString : `0${numberString}`;
}

function Screen({
  onSubmit,
  data,
  nextRoute,
  firebaseClient,
  onLogin,
  onError = () => {},
}) {
  const navigate = useNavigate();
  function hasUserAnswered() {
    if (!data) return false;
    if (
      !("day" in data) ||
      !("month" in data) ||
      !("year" in data) ||
      !("nickname" in data)
    )
      return false;
    if (!data.day.match(/^[0-9]{2}$/)) return false;
    if (!data.month.match(/^[0-9]{2}$/)) return false;
    if (!data.year.match(/^[0-9]{4}$/)) return false;
    return true;
  }
  return (
    <>
      <p>
        Willkommen zurück! <br />
        Logge dich mit deinem Vornamen und Geburtsdatum (in Zahlen) ein!
      </p>
      <div className="vertical-center">
        <VerticalGrid>
          <TextInput
            placeholder="Vorname"
            maxLength={15}
            value={data && data.nickname ? data.nickname : ""}
            onChange={(val) => onSubmit({ ...data, nickname: val })}
          />
          {/*Tag, Monat, Jahr */}
          <TextInput
            placeholder="31"
            minLength={2}
            maxLength={2}
            value={data && data.day ? data.day : ""}
            onChange={(val) => onSubmit({ ...data, day: val })}
            onBlur={() => onSubmit({ ...data, day: prefixWithZero(data.day) })}
          />
          <TextInput
            placeholder="01"
            minLength={2}
            maxLength={2}
            value={data && data.month ? data.month : ""}
            onChange={(val) => onSubmit({ ...data, month: val })}
            onBlur={() =>
              onSubmit({ ...data, month: prefixWithZero(data.month) })
            }
          />
          <TextInput
            placeholder="2001"
            minLength={4}
            maxLength={4}
            value={data && data.year ? data.year : ""}
            onChange={(val) => onSubmit({ ...data, year: val })}
          />
          <WeiterButton
            style={{ position: "static" }}
            disabled={!hasUserAnswered()}
            onClick={() => {
              const userID = firebaseClient.createUserID(data.nickname, {
                day: data.day,
                month: data.month,
                year: data.year,
              });
              return firebaseClient
                .userDoesExist(userID)
                .then((doesExist) => {
                  if (!doesExist) {
                    onError("USER_EXISTS_NOT");
                    throw Error();
                  }
                  onLogin(userID);
                })
                .then(() => {
                  navigate(nextRoute);
                })
                .catch((err) => console.log("Error", err));
            }}
          />
        </VerticalGrid>
      </div>
    </>
  );
}

export default Screen;
