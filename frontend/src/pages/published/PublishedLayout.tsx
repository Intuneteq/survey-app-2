import { Outlet } from "react-router-dom";
export default function PublishedLayout() {
  return (
    <main className="bg-published bg-cover bg-no-repeat bg-center">
      <div className=" flex justify-center">
        <div className="  max-w-[53.75rem] py-[5.19rem]">
          <Outlet />
        </div>
      </div>
    </main>
  );
}
