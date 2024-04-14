import Button from "@frontend/components/atoms/button";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {
  name: string;
};

const Top: React.FC<Props> = ({ name }) => {
  return (
    <>
      <p className="font-bold">Welcome {name}!</p>
      <Button className="bg-gray-500 text-white" onClick={() => signOut()}>
        Sign Out
      </Button>
    </>
  );
};

export default Top;
