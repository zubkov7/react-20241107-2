export const getHeadphones = async () => {
  const result = await fetch("http://localhost:3001/api/products", {
    next: { tags: ["getHeadphones"] },
  });

  return result.json();
};
