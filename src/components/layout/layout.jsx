export const Layout = ({ children, sidebar }) => {
  return (
    <div>
      <header>Some header</header>
      {sidebar}
      {children}
      <footer>Some footer</footer>
    </div>
  );
};
