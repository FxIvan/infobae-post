import { useState } from "react";

export default function FilterTag({ allTags, data, setDataFilterTag }) {
  const [tagSelected, setTagSelected] = useState([]);

  const handleFilterTag = (tag) => {
    if (tagSelected.includes(tag)) {
      setTagSelected([]);
      setDataFilterTag([]);
      return;
    }

    if (data.length === 0) {
      setDataFilterTag([]);
      return;
    }

    const filterData = data.filter((item) => item.tags.includes(tag));
    setDataFilterTag(filterData);
    setTagSelected([tag]);
  };

  return (
    <div className="flex flex-wrap mt-4">
      {allTags.map((tag) => (
        <button
          onClick={() => handleFilterTag(tag)}
          key={tag}
          className={` ${
            tagSelected.includes(tag)
              ? "bg-[#F68E01] text-white"
              : "bg-gray-200"
          } text-gray-800 px-2 py-1 rounded-lg mr-2 mb-2`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
