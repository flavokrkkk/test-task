import axios from "axios";
import { ChangeEvent, FormEvent, SyntheticEvent, useState } from "react";
import { UserData } from "./models/UserData";
import { RepoData } from "./models/RepoData";
import UserItem from "./components/UserItem";
import RepoItem from "./components/RepoItem";
import Form from "./components/UI/Form/Form";
import Input from "./components/UI/Input/Input";
import Select from "./components/UI/Select/Select";
import { options } from "./utils/mockData";
import { SelectValue } from "./models/SelectValue";
import { baseUrl } from "./utils/baseUrl";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [selectValue, setSelectValue] = useState<SelectValue | "">("");

  const [user, setUser] = useState<UserData | null>(null);
  const [repo, setRepo] = useState<RepoData | null>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    selectValue === "user" && handleAsyncUser();
    selectValue === "repo" && handleAsyncRepos();
    setInputValue("");
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event: SyntheticEvent<HTMLSelectElement>) => {
    setSelectValue(event.currentTarget.value as SelectValue);
  };

  const handleAsyncUser = async () => {
    try {
      const { data } = await axios.get<UserData>(baseUrl.USER_URL + inputValue);
      const userData: UserData = {
        name: data.name,
        public_repos: data.public_repos,
      };
      setUser(userData);
    } catch (error) {
      alert("Проверьте еще раз данные!");
    }
  };

  const handleAsyncRepos = async () => {
    try {
      const { data } = await axios.get<RepoData>(baseUrl.REPO_URL + inputValue);
      const repoData: RepoData = {
        name: data.name,
        stargazers_count: data.stargazers_count,
      };
      setRepo(repoData);
    } catch (err) {
      alert("Проверьте еще раз данные!");
    }
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input value={inputValue} onChange={handleChangeValue} />
        <Select options={options} onChange={handleSelectChange} />
      </Form>
      <div>
        {selectValue === "user" && user && <UserItem user={user} />}
        {selectValue === "repo" && repo && <RepoItem repo={repo} />}
      </div>
    </>
  );
}

export default App;
