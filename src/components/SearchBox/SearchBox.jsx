import { useId } from "react";

const SearchBox=({filterContact})=>{
    const searchFieldId=useId();
  
    return <>
    <div>
    <p>Find contacts by name</p>
      <input type="text" name="search" id={searchFieldId}   onChange={(e) => filterContact(e.target.value) }      />
    </div>

    
    </>
}
export default SearchBox;