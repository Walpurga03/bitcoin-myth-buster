// Quantum effect für Buttons
export const initializeButtonEffects = () => {
  const handleMouseMove = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement;
    if (!target) return;
    
    const rect = target.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    target.style.setProperty('--x', `${x}%`);
    target.style.setProperty('--y', `${y}%`);
  };

  const addEffectToButtons = () => {
    const buttons = document.querySelectorAll<HTMLElement>('.answer-button');
    buttons.forEach(button => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.addEventListener('mousemove', handleMouseMove);
    });
  };

  // Initial setup
  addEffectToButtons();

  // Setup MutationObserver to handle dynamically added buttons
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        addEffectToButtons();
      }
    });
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  // Cleanup function
  return () => {
    observer.disconnect();
    const buttons = document.querySelectorAll<HTMLElement>('.answer-button');
    buttons.forEach(button => {
      button.removeEventListener('mousemove', handleMouseMove);
    });
  };
};
