import copyTextToClipboard from "copy-text-to-clipboard";
import { Button } from "flowbite-react";
import { FC, ReactNode, useState } from "react";
import { HiClipboardCopy } from "react-icons/hi";

interface InstructionProps {
  step: number;
  title: string;
  children?: ReactNode;
}

export const Instruction: FC<InstructionProps> = ({
  step,
  title,
  children,
}) => (
  <div className="w-full">
    <h1 className="text-2xl font-bold">
      {step}. {title}
    </h1>
    {children}
  </div>
);

interface LinkProps {
  to: string;
  children: ReactNode;
}

export const Link: FC<LinkProps> = ({ to, children }) => (
  <a target="_blank" href={to} className="underline text-yellow-300 hover:text-yellow-400">
    {children}
  </a>
);

interface CopyToClipboardProps {
  block: string;
}

export const CopyToClipboard: FC<CopyToClipboardProps> = ({ block }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    copyTextToClipboard(block)
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const label = copied ? <>Copied!</> : <><HiClipboardCopy className="mr-2 h-5 w-5" /> Copy to Clipboard</>;

  return (
    <div>
      <p className="font-mono my-3">{block}</p>
      <Button size="sm" color="blue" onClick={copy}>{label}</Button>
    </div>
  );
};
