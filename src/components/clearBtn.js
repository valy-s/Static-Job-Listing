import { clear } from "../store/actions/actions";

function ClearBtn(props) {
  return (
    <button onClick={clear} className="clear__btn">
      Clear
    </button>
  );
}

export default ClearBtn;
