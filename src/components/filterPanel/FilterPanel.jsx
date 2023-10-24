import { useSelector } from "react-redux";

const FilterPanel = () => {
  const buttons = useSelector((state)=>state.products.filterButtons)

  return (
    <div className="min-w-[20%] bg-indigo-100 flex flex-col min-h-[596px] p-4 ">
      {buttons.map((button , index) => (
        <div className="flex gap-4 font-bold border-b-[2px] py-3" key={index}>
          <label className="label cursor-pointer ">
            <input
              type="radio"
              name="radio-10"
              className="radio-sm checked:bg-blue-500" />
          </label>
          <span className="label-text text-lg text-red-400 uppercase leading-8">{button}</span>
        </div>
      ))}
    </div>
  );
};

export default FilterPanel;