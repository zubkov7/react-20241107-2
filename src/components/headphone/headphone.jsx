import { useAuth } from "../auth-context/use-auth";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { TabLink } from "../tab-link/tab-link";

export const Headphone = ({ name, brand, id }) => {
  const { auth } = useAuth();

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand</h3>
      <div>{brand}</div>
      {auth.isAuthorized && <HeadphoneCounter id={id} />}
      <TabLink href={`/headphones/${id}/reviews`} title='Reviews' />
      <TabLink href={`/headphones/${id}/codecs`} title='Codecs' />
    </section>
  );
};
