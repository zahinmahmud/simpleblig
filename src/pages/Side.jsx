import React, { useState } from "react";

const Side = ({ blogcategories }) => {
  // 1. Initialize state to track the active category filter (defaults to "All")
  const [activeCategory, setActiveCategory] = useState("All");

  // 2. Filter the categories based on the active selection
  const filteredCategories = activeCategory === "All"
    ? blogcategories
    : blogcategories.filter(cat => cat.category_name === activeCategory);

  return (
    <div className="max-w-md mx-auto p-4 space-y-6 bg-slate-50 min-h-screen rounded-2xl shadow-sm">
      
      {/* Category Pills Navigation */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-1">
          Explore Topics
        </h3>
        <div className="flex flex-wrap gap-2">
          {/* Static "All" button to clear filter */}
          <button
            onClick={() => setActiveCategory("All")}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
              activeCategory === "All"
                ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                : "bg-blue-50 text-blue-600 hover:bg-blue-100"
            }`}
          >
            All
          </button>

          {/* Dynamic category filter buttons */}
          {blogcategories.map((blog, index) => {
            const isActive = activeCategory === blog.category_name;
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(blog.category_name)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                    : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {blog.category_name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Category Content Cards Stack */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1">
          Category Details
        </h3>
        <div className="space-y-3">
          {/* 3. Map over the filtered array instead of the original one */}
          {filteredCategories.map((blogcat, index) => (
            <div
              key={index}
              className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-100"
            >
              <h2 className="text-lg font-bold text-slate-800 mb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                {blogcat.category_name}
              </h2>
              <p className="text-sm leading-relaxed text-slate-500">
                {blogcat.description}
              </p>
            </div>
          ))}

          {/* Fallback layout if the array turns out empty */}
          {filteredCategories.length === 0 && (
            <p className="text-sm text-slate-400 text-center py-6">
              No topics found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Side;
