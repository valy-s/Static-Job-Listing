import FilterContainer from "./filterContainer.js";
import BtnFilter from "./btnFilter";
import ClearBtn from "./clearBtn.js";
import ClearBtnSingle from "./clearBtnSingle.js";

function FilterSection(props) {
  return props.filterItems.length > 0 ? (
    <FilterContainer>
      <div className="filter__btns">
        {props.filterItems.map((item, index) => (
          <BtnFilter data-id={index} key={index}>
            {item} <ClearBtnSingle />
          </BtnFilter>
        ))}
      </div>
      <ClearBtn />
    </FilterContainer>
  ) : (
    " "
  );
}

export default FilterSection;
