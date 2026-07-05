import { useState, useEffect } from 'react';

/**
 * Hook to track which section is currently in view for navigation highlighting.
 * @param {string[]} ids - Array of section IDs to track.
 * @param {Object} options - IntersectionObserver options.
 * @returns {string} The ID of the active section.
 */
export const useScrollSpy = (ids, options = { threshold: 0.5 }) => {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return activeId;
};
