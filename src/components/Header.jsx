import React from 'react';
import icon from '/assets/images/icon-remove.svg';

const Header = ({ filters = [], removeFilter, clearFilters }) => {
  return (
    <div
        className={`flex items-center font-league relative bg-desaturatedcyan bg-[url(/assets/images/bg-header-desktop.svg)] ${
          filters.length > 0 ? 'py-10' : 'py-18'
        }`}
      >
      {filters.length > 0 && (
        <div className="flex items-center justify-between px-10 bg-white py-5 max-w-[350px] lg:min-w-[1280px] container mx-auto">
          <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
            {filters.map((filter, index) => (
              <div key={index} className="flex items-center bg-filtercyan">
                <h3 className="text-[15px] px-2.5 py-1 font-semibold text-desaturatedcyan">
                  {filter}
                </h3>
                <button
                  onClick={() => removeFilter(filter)}
                  className="bg-desaturatedcyan p-2 cursor-pointer hover:bg-darkgrayish"
                >
                  <img src={icon} alt="remove filter" />
                </button>
              </div>
            ))}
          </div>
          <div>
            <h3
              onClick={clearFilters}
              className="text-[15px] font-semibold text-desaturatedcyan underline cursor-pointer"
            >
              Clear
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;