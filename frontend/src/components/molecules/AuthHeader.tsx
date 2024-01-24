type Props = {
  title: string;
  subTitle: string;
};

export default function AuthHeader({ title, subTitle }: Props) {
  return (
    <div className="flex-col flex justify-center items-center w-full">
      <h1 className="text-white text-[3.75rem] font-[900]">
        {title}
      </h1>
      <p className="text-grey text-xl font-medium">
        {subTitle}
      </p>
    </div>
  );
}
