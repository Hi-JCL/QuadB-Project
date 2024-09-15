function ValueBox(props) {
  return (
    <div className="bg-[#F3F5F7] py-12 px-10 flex flex-col gap-2 w-full items-start justify-start">
      {props.icon}
      <p className="text-xl font-medium">{props.title}</p>
      <p className="text-[#6C7275] text-sm">{props.desc}</p>
    </div>
  );
}

export default ValueBox;
