export const getUsers = async () => {
  const result = await fetch("http://localhost:3001/api/users", {
    next: { tags: ["getUsers"] },
    cache: "force-cache",
  });

  return result.json();
};
