
const FilterGalleryLoop = ({filterGalleryData}) => {
  return (
    <>
      {!filterGalleryData.length && "no data found"}
      <div className="row">
        {filterGalleryData.map((item, index) => {
          const { imgsrc, title, disc, link, category } = item;
          return (
            <div key={index} className="col-3 mb-4">
              <h3>
                <a href={link}>{title}</a>
              </h3>
              <p>{category}</p>
              <img className="img-fluid" src={imgsrc} alt={title} />
              {disc}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FilterGalleryLoop;
