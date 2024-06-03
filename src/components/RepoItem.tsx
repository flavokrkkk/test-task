import { FC } from "react";
import { RepoData } from "../models/RepoData";

interface RepoItemProps {
  repo: RepoData;
}

const RepoItem: FC<RepoItemProps> = ({ repo }) => {
  return (
    <>
      <div>{`Repo name: ${repo.name}`}</div>
      <hr />
      <div>{`Count start: ${repo.stargazers_count}`}</div>
    </>
  );
};

export default RepoItem;
