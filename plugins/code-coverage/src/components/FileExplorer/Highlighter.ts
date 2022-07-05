/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import highlight from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

function languageFromExtension(extension: string) {
  switch (extension) {
    case 'm':
      return 'objectivec';
    case 'tsx':
      return 'typescript';
    case 'jsx':
      return 'javascript';
    case 'kt':
      return 'kotlin';
    default:
      return extension;
  }
}

/*
 * Given a file extension, repo name, and array of code lines, return a Promise resolving
 * to an array of formatted lines with html/css formatting.
 *
 * @param fileExtension - The extension of the source file
 * @param lines - The source code lines
 *
 * @returns Promise of formatted lines
 *
 * @see http://highlightjs.readthedocs.io/en/latest/api.html#highlight-name-value-ignore-illegals-continuation
 */
export function highlightLines(fileExtension: string, lines: Array<string>) {
  const formattedLines: Array<string> = [];
  const language = languageFromExtension(fileExtension);

  lines.forEach(line => {
    const result = highlight.highlight(line, {
      language,
      ignoreIllegals: true,
    });
    formattedLines.push(result.value);
  });

  return formattedLines;
}
