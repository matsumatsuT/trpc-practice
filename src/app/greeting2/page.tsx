// import { serverApi } from "@/app/_trpc/server-api";

import { createCaller } from "@/server";

const GreeTing2 = async () => {
  const caller = createCaller({});
  const data = await caller.greeting2({ name: "テスト" });

  // const { data: postsData } = await caller.getPosts();

  return (
    <div className="">
      <div className="bg-blue-100 p-5 border-2 border-blue-500">
        <div className="text-blue-500 font-bold">Server Component</div>
        <div>{data.msg}</div>
      </div>
    </div>
  );
};

export default GreeTing2;
