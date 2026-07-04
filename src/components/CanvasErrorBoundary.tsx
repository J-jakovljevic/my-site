import type { ReactNode } from "react";
import { ErrorBoundary } from "react-error-boundary";

const CanvasErrorBoundary = ({ children }: { children: ReactNode }) => {
  return <ErrorBoundary fallback={null}>{children}</ErrorBoundary>;
}

export default CanvasErrorBoundary;
