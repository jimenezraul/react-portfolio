import React from "react";

const Header = ({currentSelect}) => {
    return (
        <div className="flex pb-5">
        <div className="flex flex-col w-full flex-grow">
          <div className="container mx-auto flex flex-col flex-grow">
            <div className="flex w-full p-4 border-b border-gray-300 dark:border-gray-500">
              <h2 className="text-2xl font-bold text-gray-600 dark:text-gray-200">
                {currentSelect}
              </h2>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Header;