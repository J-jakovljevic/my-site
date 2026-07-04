import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

// fallback={null} is intentional: the 3D field is purely decorative, so on
// a render error we'd rather silently show nothing than a visible error UI
const CanvasErrorBoundary = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>;
};

export default CanvasErrorBoundary;
