// Post dates arrive in two shapes. Posts written from now on store an ISO
// timestamp in createdAt. Older ones hold whatever toLocaleDateString()
// produced in the author's browser — "14/02/2026" and the like, which is
// ambiguous (is 02/03 the 2nd of March or the 3rd of February?) and so is
// never reformatted here, only shown as written.

const ISO_LIKE = /^\d{4}-\d{2}-\d{2}/;
const DAY_FIRST = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

function rawDate(post) {
    const value = post?.createdAt || post?.date;
    return typeof value === 'string' && value.trim() ? value.trim() : null;
}

/** A Date for ordering, or null when the value cannot be read. */
export function postTimestamp(post) {
    const raw = rawDate(post);
    if (!raw) return null;

    if (ISO_LIKE.test(raw)) {
        const parsed = new Date(raw);
        return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    // Day-first is the safe assumption for the locales this site was authored
    // in. Only used for sorting, never to relabel what a post says.
    const match = raw.match(DAY_FIRST);
    if (match) {
        const [, day, month, year] = match;
        const parsed = new Date(Number(year), Number(month) - 1, Number(day));
        return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    return null;
}

/** Display string, or '' when the post carries no date at all. */
export function formatPostDate(post) {
    const raw = rawDate(post);
    if (!raw) return '';

    if (ISO_LIKE.test(raw)) {
        const parsed = new Date(raw);
        if (!Number.isNaN(parsed.getTime())) {
            return parsed.toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
            });
        }
    }

    return raw;
}

/** Newest first; posts with no readable date sink to the bottom. */
export function sortPostsNewestFirst(posts) {
    return [...posts].sort((a, b) => {
        const aTime = postTimestamp(a)?.getTime() ?? -Infinity;
        const bTime = postTimestamp(b)?.getTime() ?? -Infinity;
        return bTime - aTime;
    });
}
