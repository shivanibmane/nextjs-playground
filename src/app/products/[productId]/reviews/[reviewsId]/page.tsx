import { notFound } from "next/navigation"
export default function ReviewDetails({ params }: {
  params: { productId: number | string, reviewsId: string }
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound()
  }
  return <>
    <h1>Reviews</h1>
    <li>Product {params.productId} Review {params.reviewsId}</li>

  </>
}