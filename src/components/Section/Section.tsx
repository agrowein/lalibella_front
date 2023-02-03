import { PropsWithChildren } from "react";
import { SectionStyled } from "./Section.style";

export const Section = ({ children, className }: PropsWithChildren & { className?: string }) => {
  return <SectionStyled className={className}>{children}</SectionStyled>
};