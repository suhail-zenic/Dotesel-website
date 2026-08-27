let observer: IntersectionObserver | null = null
const callbacks = new WeakMap<Element, () => void>()

function getRevealObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          callbacks.get(entry.target)?.()
          observer?.unobserve(entry.target)
          callbacks.delete(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' },
    )
  }
  return observer
}

export function observeReveal(element: Element, onVisible: () => void) {
  callbacks.set(element, onVisible)
  getRevealObserver().observe(element)
}

export function unobserveReveal(element: Element) {
  callbacks.delete(element)
  observer?.unobserve(element)
}
