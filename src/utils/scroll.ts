/**
 * Universal smooth scrolling utility that accounts for the sticky navbar height
 * and works across desktop, mobile, and iframe preview environments.
 */
export const smoothScrollTo = (targetIdOrSelector: string, offset = 76): void => {
  const cleanId = targetIdOrSelector.startsWith('#')
    ? targetIdOrSelector.substring(1)
    : targetIdOrSelector;

  const element = document.getElementById(cleanId) || document.querySelector(targetIdOrSelector);

  if (!element) {
    if (cleanId === 'hero' || cleanId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return;
  }

  const elementRect = element.getBoundingClientRect();
  const absoluteElementTop = elementRect.top + window.pageYOffset;
  const targetY = Math.max(0, absoluteElementTop - offset);

  try {
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  } catch {
    // Fallback for older browsers
    window.scrollTo(0, targetY);
  }
};
