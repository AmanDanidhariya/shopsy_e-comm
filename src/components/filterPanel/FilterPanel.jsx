const FilterPanel = () => {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "T-Shirts",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  return (
    <div className="w-1/4 bg-gray-100 flex flex-col h-screen p-4 ">
      {buttons.map((button) => {
        return (
          <div className="flex gap-4 font-bold " key={button.id}>
            <label className="label cursor-pointer ">
              <input
                type="radio"
                name="radio-10"
                className="radio-sm checked:bg-blue-500"
                defaultChecked
              />
            </label>
            <span className="label-text text-lg text-red-400 uppercase">{button}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FilterPanel;
