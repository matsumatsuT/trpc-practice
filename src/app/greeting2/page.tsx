import { serverApi } from "@/app/_trpc/server-api";

const GreeTing2 = async () => {
  const greeting2 = await serverApi.greeting2({ name: "aaa" });

  return (
    <div className="">
      <div className="bg-blue-100 p-5 border-2 border-blue-500">
        <div className="text-blue-500 font-bold">Server Component</div>
        <div>{JSON.stringify(greeting2)}</div>
      </div>
    </div>
  );
};

export default GreeTing2;
