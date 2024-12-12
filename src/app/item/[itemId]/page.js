const ItemPage = async ({ params }) => {
  const { itemId } = await params;

  return `item page - ${itemId}`;
};

export default ItemPage;
