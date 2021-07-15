import { KeyboardEvent } from "react";

const textareaAutoResize = ({ target }: KeyboardEvent<HTMLTextAreaElement>): void => {
    const styles = (target as HTMLTextAreaElement).style;
    const scrollHeight = (target as HTMLTextAreaElement).scrollHeight;
    styles.cssText = 'height:auto; padding:2px';
    styles.cssText = `height: ${scrollHeight + 2}px`;
};

export default textareaAutoResize;