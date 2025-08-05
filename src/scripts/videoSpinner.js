
// /src/scripts/videoSpinner.js

/**
 * @param {Array<{description: string}>} videos
 * @param {string} descriptionToMatch
 * @param {number} intervalMs
 * @returns {object|null} the “current” video or null if none match
 */
export function getCurrentVideo(
  videos,
  descriptionToMatch = "content",
  intervalMs = 2 * 60 * 60 * 1000
) {
  const filtered = videos.filter(
    v =>
      v.description?.trim().toLowerCase() ===
      descriptionToMatch.toLowerCase()
  );

  if (filtered.length === 0) return null;

  const index =
    Math.floor(Date.now() / intervalMs) % filtered.length;
  return filtered[index];
}
