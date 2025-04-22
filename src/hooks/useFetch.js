import useFetch from "../hooks/useFetch";

const Users = () => {
  const { data, loading } = useFetch("https://api.example.com/users");

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
