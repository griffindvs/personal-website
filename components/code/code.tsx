import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { ClipboardIcon, CheckIcon } from '@heroicons/react/24/outline';

import styles from './code.module.scss';

const Highlighter = dynamic(() => import('./highlighter'), { ssr: false });

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
      <Highlighter
        language={language}
        showLineNumbers={true}
        className={styles.codeBlock}
      >
        {code.trim()}
      </Highlighter>
    </div>
  );
}
