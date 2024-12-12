export const metadata = {
  title: "about page",
};

const AboutPage = async ({ searchParams }) => {
  const params = await searchParams;

  console.log(params);

  

  return "about page";
};

export default AboutPage;
