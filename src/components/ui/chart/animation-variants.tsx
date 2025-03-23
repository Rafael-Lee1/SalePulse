
// Contains all animation variants that can be reused across chart components
export const chartAnimationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const dataPulseAnimation = {
  pulse: {
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export const dataPointAnimation = {
  hover: {
    scale: 1.2,
    filter: "drop-shadow(0 0 4px rgba(169, 223, 216, 0.7))",
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};
