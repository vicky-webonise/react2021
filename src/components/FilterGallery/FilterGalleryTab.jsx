const FilterGalleryTab = ({ activeTab, cateHead = [], sortList = () => {} }) => {
  console.log(activeTab);
  return (
    <div>
      <div className="btn-group mb-4" role="group" aria-label="Basic example">
        {cateHead.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => sortList(item)}
              className={`btn btn-primary ${
                item === activeTab ? "btn-success" : "false"
              }`}
            >
              {item}
            </button>
          );
        })}
        {/* <button
          onClick={() => setFilterGalleryData(Menu)}
          type="button"
          className="btn btn-warning"
        >
          All
        </button>
        <button
          onClick={() => sortList("beach")}
          type="button"
          className="btn btn-primary"
        >
          Beach
        </button>
        <button
          onClick={() => sortList("office")}
          type="button"
          className="btn btn-success"
        >
          Office
        </button>
        <button
          onClick={() => sortList("computer")}
          type="button"
          className="btn btn-info"
        >
          Computer
        </button>
        <button
          onClick={() => sortList("meeting")}
          type="button"
          className="btn btn-dark"
        >
          Meeting
        </button>
        <button
          onClick={() => sortList("building")}
          type="button"
          className="btn btn-warning"
        >
          building
        </button>*/}
      </div>
    </div>
  );
};

export default FilterGalleryTab;
