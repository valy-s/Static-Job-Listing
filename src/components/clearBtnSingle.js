import { remove } from "../store/actions/actions";

function ClearBtnSingle(props) {
  return (
    <span onClick={remove} className="clear__btn__single">
      X
    </span>
  );
}

export default ClearBtnSingle;
