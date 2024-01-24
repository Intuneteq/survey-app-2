import { Link } from "react-router-dom";

type Props = {
  text: string;
  to: string;
  linkText: string;
};
export default function AuthFooter({ text, to, linkText }: Props) {
  return (
    <article className="flex justify-center items-center gap-[0.62rem]">
      <p className="text-white text-xl font-normal">{text}</p>
      <Link to={to} className="text-secondary">
        {linkText}
      </Link>
    </article>
  );
}
