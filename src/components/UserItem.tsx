import { FC } from "react";
import { UserData } from "../models/UserData";

interface UserItemProps {
  user: UserData;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <>
      <div>{`Full name: ${user.name}`}</div>
      <hr />
      <div>{`Count repo: ${user.public_repos}`}</div>
    </>
  );
};

export default UserItem;
