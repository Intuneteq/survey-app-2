import { Images } from "../../assets";

export default function Login() {
  const { histogram } = Images;
  
  return (
    <div>
      <h1>Login</h1>
      <img src={histogram} alt="histogram" />
    </div>
  );
}
