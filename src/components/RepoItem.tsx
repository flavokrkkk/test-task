import { FC } from "react";
import { RepoData } from "../models/RepoData";

interface RepoItemProps {
  repo: RepoData;
}

const RepoItem: FC<RepoItemProps> = ({ repo }) => {
  return (
    <>
      <h1>{`Repo name: ${repo.name}`}</h1>
      <h1>{`Count start: ${repo.stargazers_count}`}</h1>
    </>
  );
};

export default RepoItem;
