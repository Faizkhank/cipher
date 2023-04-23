const Browse = () => {
  const list = [
    "App Development",
    "Web Development",
    "Game Development",
    "Data Structures",
    "Programming",
    "Machine Learning",
    "Data Science",
    "Others",
  ];
  return (
    <ul className=" bg-white  cursor-pointer  h-auto w-[160px] shadow-xl rounded-lg">
      {list.map((items, index) => (
        <li
          key={index}
          className=" font-normal hover:bg-slate-200 pb-1 rounded-lg px-1"
        >
          {items}
        </li>
      ))}
    </ul>
  );
};
export default Browse;
