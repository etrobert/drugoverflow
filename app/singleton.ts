const singleton = <T>(f: () => T) => {
  let instance: T | null = null;
  return () => {
    if (instance !== null) return instance;
    instance = f();
    return instance;
  };
};

export default singleton;
