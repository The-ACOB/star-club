import { StarField } from "@/components/star-field";

export function Atmosphere() {
  return (
    <>
      <div className="atmosphere" aria-hidden="true" />
      <div className="hairline-grid" aria-hidden="true" />
      <StarField />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
