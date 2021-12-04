import { writable } from 'svelte/store';

const TABLET_QUERY = '(min-width: 767px)';
const DESKTOP_QUERY = '(min-width: 1280px)';

export const isTablet = writable(false);
export const isDesktop = writable(false);

export const onMatchMediaChange = () => {
  const tabletMediaQueryList = matchMedia(TABLET_QUERY);
  const desktopMediaQueryList = matchMedia(DESKTOP_QUERY);

  const updateIsTablet = e => isTablet.set(e.matches);
  const updateIsDesktop = e => isDesktop.set(e.matches);

  updateIsTablet(tabletMediaQueryList);
  updateIsDesktop(desktopMediaQueryList);

  tabletMediaQueryList.addEventListener('change', updateIsTablet);
  desktopMediaQueryList.addEventListener('change', updateIsDesktop);

  return {
    destroy() {
      tabletMediaQueryList.removeEventListener('change', updateIsTablet);
      desktopMediaQueryList.removeEventListener('change', updateIsDesktop);
    },
  };
};
