//@ts-ignore
import searchIcons from "../../../../public/Activities/iconsSearch.svg";
import useSearchQueryWithoutConfirm from "../../../Hooks/useSearchQueryWithoutConfirm";
export default function SearchComponent() {
  const { inputValue, setInputValue } = useSearchQueryWithoutConfirm({
    queryParams: "search",
  });
  return (
    <div className="SearchComponent">
      <p>SEARCH</p>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        type="text"
        placeholder="Enter Your Keyword"
        style={{
          backgroundImage: `url(${searchIcons})`,
        }}
      />
    </div>
  );
}
