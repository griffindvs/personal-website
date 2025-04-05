import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/cjs/prism-light';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import go from 'react-syntax-highlighter/dist/cjs/languages/prism/go';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

import styles from './code.module.scss';

// Register each desired language individually to reduce bundle size.
SyntaxHighlighter.registerLanguage('go', go);

export default function Code({
  code,
  language,
  fileName,
  fileLink,
}: {
  code: string;
  language: string;
  fileName?: string;
  fileLink?: string;
}) {
  const [copied, setCopied] = useState<boolean>(false);
  const [isTitleHovered, setIsTitleHovered] = useState<boolean>(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.code}>
      <div className={styles.codeHeader}>
        {fileName && !fileLink && <span>{fileName}</span>}
        {fileName && fileLink && (
          <div
            onMouseEnter={() => setIsTitleHovered(true)}
            onMouseLeave={() => setIsTitleHovered(false)}
          >
            <a className={styles.codeHeaderLink} href={fileLink}>
              {fileName}
              {'  '}
              {isTitleHovered && '→'}
            </a>
          </div>
        )}
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? <CheckIcon /> : <ClipboardIcon />}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={oneLight}
        showLineNumbers={true}
        className={styles.codeBlock}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
