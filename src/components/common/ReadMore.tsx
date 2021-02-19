import React, { useCallback, useMemo, useState } from 'react';
import { truncate } from 'lodash';

function getTextSplitIntoParagraphs(text: string, displayInline: boolean): JSX.Element[] {
  const paragraphClass = '';
  // const paragraphClass = displayInline ? 'd-inline' : '';
  const paragraphs = text.split('\n').map(str => (
    <p key={str} className={paragraphClass}>
      {str}
    </p>
  ));

  // if (displayInline) {
  //   // Add manual line breaks if `displayInline` is true.
  //   const paragraphsWithLineBreaks = []
  //   each(paragraphs, (paragraph, i) => {
  //     paragraphsWithLineBreaks.push(paragraph)
  //     if (i !== paragraphs.length - 1) {
  //       paragraphsWithLineBreaks.push(
  //         <>
  //           <br />
  //           <br />
  //         </>
  //       )
  //     }
  //   })
  //   return paragraphsWithLineBreaks
  // }
  return paragraphs;
}

function ReadMore({
  text,
  length = 200,
  splitIntoParagraphs = true,
  displayInline = false,
  className = '',
  ...props
}: {
  text: string;
  length?: number;
  splitIntoParagraphs?: boolean;
  displayInline?: boolean;
  className?: string;
  props: any;
}) {
  const [textIsTruncated, setTextIsTruncated] = useState(true);

  const truncatedText = useMemo(() => truncate(text, { length }), [text, length]);

  const truncatedTextSplitIntoParagraphs = useMemo(() => {
    return getTextSplitIntoParagraphs(truncatedText, displayInline);
  }, [truncatedText, displayInline]);

  const textSplitIntoParagraphs = useMemo(() => {
    return getTextSplitIntoParagraphs(text, displayInline);
  }, [text, displayInline]);

  const toggleTruncation = useCallback(() => {
    // TODO fix the window scrolling issue.
    setTextIsTruncated(!textIsTruncated);
  }, [textIsTruncated]);

  if (!text) {
    return <></>;
  }

  return (
    <>
      {/* Text */}
      <div className={`${displayInline ? 'd-inline' : ''} w-100`}>
        {textIsTruncated ? (
          <>{splitIntoParagraphs ? truncatedTextSplitIntoParagraphs : truncatedText}</>
        ) : (
          <>{splitIntoParagraphs ? textSplitIntoParagraphs : text}</>
        )}
        {displayInline && (
          <button className='d-inline askme-btn-cancel ml-2' onClick={toggleTruncation}>
            {textIsTruncated ? 'Read more' : 'Read less'}
          </button>
        )}
      </div>

      {/* Read More / Less Button */}
      {!displayInline && text.length !== truncatedText.length && (
        <div className='w-100 text-center'>
          <button className='d-inline-block askme-btn-cancel' onClick={toggleTruncation}>
            {textIsTruncated ? 'Read more' : 'Read less'}
          </button>
        </div>
      )}
    </>
  );
}

export default ReadMore;
