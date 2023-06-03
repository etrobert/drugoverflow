import singleton from './singleton';

describe('singleton', () => {
  it('should not call the function before we call the returned function', () => {
    const f = jest.fn();

    singleton(f);

    expect(f).not.toHaveBeenCalled();
  });

  it('should return the return of the function', () => {
    const k = {};
    const f = () => k;
    const getInstance = singleton(f);

    const instance = getInstance();

    expect(instance).toBe(k);
  });

  it('should only call the function once', () => {
    const f = jest.fn();

    const getInstance = singleton(f);

    getInstance();
    getInstance();
    getInstance();

    expect(f).toHaveBeenCalledTimes(1);
  });

  it('should return the same instance', () => {
    const k = {};
    const f = () => k;

    const getInstance = singleton(f);

    const instance1 = getInstance();
    const instance2 = getInstance();

    expect(instance1).toBe(instance2);
  });
});
