
export default async function Home() {
  const {login} = await fetch("https://api.github.com/users/opsrennerdev")
    .then((res) => res.json())

  // https://github.com/opsrennerdev.png
  return (
    <h1>{login}</h1>
  );
}
