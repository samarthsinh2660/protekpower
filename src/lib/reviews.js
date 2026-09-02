// Single source of truth for review numbers.
//
// The product data carries legacy `rating` / `reviewCount` fields whose values
// never matched the reviews actually stored alongside them (e.g. a badge
// claiming 89 reviews on a product with none). Everything on screen is derived
// from the reviews that genuinely exist, so the summary and the list can never
// disagree again.
export function getReviewSummary(product) {
    const reviews = Array.isArray(product?.reviews) ? product.reviews : [];
    const count = reviews.length;

    if (count === 0) {
        return { reviews, count: 0, average: null };
    }

    const total = reviews.reduce((sum, review) => sum + (Number(review?.rating) || 0), 0);
    const average = Math.round((total / count) * 10) / 10;

    return { reviews, count, average };
}
