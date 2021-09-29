import { useState } from 'react';
import FilterGalleryTab from "./FilterGalleryTab";
import FilterGalleryLoop from "./FilterGalleryLoop";
import Menu from './mockData/filterGalleryData'

const FilterGallery = () => {

  const [filterGalleryData, setFilterGalleryData] = useState(Menu);

  // object
  // const allCateHead = new Set(Menu.map((item, index) => {return item.category;}));

  // convert array
  const allCateHead = ['all', ...new Set(Menu.map((item, index) => {return item.category;}))];

  // console.log(allCateHead);
  const [cateHead] = useState(allCateHead);

  const [activeTab, setActiveTab] = useState('all');

  const sortList = (cateItem) => {

    if (cateItem === 'all') {
      setActiveTab("all");
      setFilterGalleryData(Menu);
      return;
    }

    const updatedItem = Menu.filter((item) => {
      return item.category === cateItem;
    })
    setActiveTab(cateItem);
    setFilterGalleryData(updatedItem);
  }
  // console.log(activeTab);

  return (
    <>
      <h2>Filter Gallery</h2>
      <FilterGalleryTab
        sortList={sortList}
        cateHead={cateHead}
        activeTab={activeTab}
      />
      <FilterGalleryLoop filterGalleryData={filterGalleryData} />
      {activeTab}
    </>
  );
}

export default FilterGallery;
