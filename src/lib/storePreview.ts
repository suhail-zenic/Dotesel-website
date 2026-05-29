/** Build ordered list of screenshot URLs (first success wins in UI). */
export function getStorePreviewSources(siteUrl: string): string[] {
  try {
    const encoded = encodeURIComponent(siteUrl)

    return [
      // WordPress mshots — reliable free storefront previews
      `https://s0.wp.com/mshots/v1/${encoded}?w=900`,
      // Thum.io screenshot fallback
      `https://image.thum.io/get/width/800/crop/1400/noanimate/${encoded}`,
      // Secondary mshots size
      `https://s0.wp.com/mshots/v1/${encoded}?w=600`,
    ]
  } catch {
    return []
  }
}
