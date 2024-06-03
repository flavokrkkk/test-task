import { FC } from "react";
import { UserData } from "../models/UserData";

interface UserItemProps {
  user: UserData;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <h1>{`Full name : ${user.name}`}</h1>
      <h1>{`Count repo: ${user.public_repos}`}</h1>
    </>
  );
};

export default UserItem;
