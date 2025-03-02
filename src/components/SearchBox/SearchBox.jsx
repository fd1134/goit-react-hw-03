import { useId } from "react";
import css from "./SearchBox.module.css";
const SearchBox = ({ filterContact }) => {
  const searchFieldId = useId();

  return (
    <>
      <div className={css.searchContainer}>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="search"
          id={searchFieldId}
          onChange={(e) => filterContact(e.target.value)}
        />
      </div>
    </>
  );
};
export default SearchBox;
