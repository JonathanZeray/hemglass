import "@testing-library/jest-dom";

class IntersectionObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserverMock,
});
