const useScrollToCTA = () => {
  document
    .getElementById('CTA-section')
    ?.scrollIntoView({ behavior: 'smooth' });
};

export default useScrollToCTA;
