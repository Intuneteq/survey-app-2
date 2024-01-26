type props = {
  title: string;
  subtitle: string;
};

function IntroHeader({ title, subtitle }: props) {
  return (
    <div>
      <h1 className=" text-[#000] text-[6.25rem] font-[700] leading -normal">
        {title}
      </h1>
      <h4 className="text-[#434242] text-[1.5rem] font-[700] leading-normal">
        {subtitle}
      </h4>
    </div>
  );
}
export default IntroHeader;
