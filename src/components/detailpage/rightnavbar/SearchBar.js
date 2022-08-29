import "../../../assets/sass/detailpage/SearchBar.scss";

function SearchBar() {
  return (
    <div className="searchbar">
      <h1>Tìm Kiếm</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Nhập từ khóa .."
          aria-label="Nhập từ khóa .."
          aria-describedby="button-addon2"
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div> /* End fragment */
  );
}

export default SearchBar;
