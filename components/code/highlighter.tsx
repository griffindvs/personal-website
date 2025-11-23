import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/prism-light';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go';

SyntaxHighlighter.registerLanguage('go', go);

type Props = {
  children?: React.ReactNode;
  code?: string;
  language?: string;
  className?: string;
  showLineNumbers?: boolean;
  style?: any;
};

export default function Highlighter({
  children,
  language = 'go',
  className,
  showLineNumbers = false,
}: Props) {
  let content = '';
  if (children != null) {
    content = React.Children.toArray(children)
      .map((c) =>
        typeof c === 'string' || typeof c === 'number' ? String(c) : ''
      )
      .join('');
  }

  return (
    <SyntaxHighlighter
      language={language}
      style={oneLight}
      showLineNumbers={showLineNumbers}
      className={className}
    >
      {content.trim()}
    </SyntaxHighlighter>
  );
}
