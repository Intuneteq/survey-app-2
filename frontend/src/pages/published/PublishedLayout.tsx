import { Outlet } from "react-router-dom";

export default function PublishedLayout() {
  return (
    <main className="bg-published bg-cover bg-no-repeat bg-center p-20 ">
      <Outlet />
    </main>
  );
}
