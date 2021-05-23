import { CSSProperties, ReactNode } from "react";

export default interface ISectionComponent {
    id?: string;
    children: ReactNode;
    header: string | JSX.Element;
    style?: CSSProperties;
    className?: string;
}