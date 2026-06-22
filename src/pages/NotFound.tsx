import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";

export default function NotFound() {
  return (
    <div className="container-x py-32 text-center">
      <p className="eyebrow mb-3">404</p>
      <h1 className="text-5xl font-bold">Page not found</h1>
      <p className="mt-4 text-[var(--color-fg-muted)]">
        That page doesn't exist (or moved during the site refresh).
      </p>
      <Link to="/" className="btn btn-primary mt-8 inline-flex">
        Back home <ArrowIcon className="h-4 w-4" />
      </Link>
    </div>
  );
}
