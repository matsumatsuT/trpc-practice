"use client";
import { clientApi } from "@/app/_trpc/client-api";

const Greeting1 = () => {
  const { data } = clientApi.greeting1.useQuery();

  const { data: postsData } = clientApi.getPosts.useQuery();
  console.log("テスト:", postsData);

  return (
    <div className="bg-red-100 p-5 border-2 border-red-500">
      <div className="text-red-500 font-bold">Client Component</div>
      <div>{data?.msg}</div>
    </div>
  );
};

export default Greeting1;
