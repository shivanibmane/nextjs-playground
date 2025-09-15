export default function ProductDetails({ params }: { params: { productId: number | string } }) {
  return <>
    <h1>Details about the product {params.productId}</h1></>
}