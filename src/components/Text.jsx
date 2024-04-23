import brackets from "../assets/svg/Brackets";

const Text = ({ className, children }) => {
  return (
    <div className={` ${className}  tagline flex items-center md:justify-center justify-start  gap-3`}>
      {brackets("left")}
      <p className={` text-n-1/60 tracking-widest text-xs `}>{children}</p>
      {brackets("right")}
    </div>
  );
};

export default Text;
