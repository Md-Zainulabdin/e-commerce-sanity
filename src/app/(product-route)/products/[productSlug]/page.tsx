const SingleProductPage = ({ params }: { params: { productSlug: string } }) => {
  console.log(params);

  return <div>{params.productSlug}</div>;
};

export default SingleProductPage;
