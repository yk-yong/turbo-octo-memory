/**
 *
 * @description Content.row.tsx
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 11 July 2022
 *
 */

import { FocusableComponentLayout, FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';
import { useCallback, useRef } from 'react';

import ContentItem from './Content.item';

const assets = [
  'Asset 1',
  'Asset 2',
  'Asset 3',
  'Asset 4',
  'Asset 5',
  'Asset 6',
  'Asset 7',
  'Asset 8',
  'Asset 9',
  'Asset 10',
];

type Props = {
  onFocusCb?: ((layout: FocusableComponentLayout) => void) | undefined;
};
export default function ContentRow({ onFocusCb = () => {} }: Props) {
  const { ref, focused, focusKey } = useFocusable({
    onEnterPress: (props, details) => {
      console.log('content row pressed', props, details);
    },
    onEnterRelease: (props) => {
      console.log('content row released', props);
    },
    onArrowPress: (direction: string, props: unknown, details) => {
      console.log('content row arrow pressed', direction, props, details);

      return true;
    },
    onFocus: (layout: FocusableComponentLayout) => {
      console.log('content row focused', layout);

      onFocusCb(layout);
    },
  });

  const rowRef = useRef<HTMLDivElement | null>(null);

  const onItemFocus = useCallback(
    ({ x }: FocusableComponentLayout) => {
      if (rowRef.current) {
        rowRef.current.scrollTo({
          left: x,
          behavior: 'smooth',
        });
      }
    },
    [rowRef]
  );

  return (
    <div ref={ref} className={classNames(focused ? 'border-red-500' : '', 'border-2 border-transparent')}>
      <FocusContext.Provider value={focusKey}>
        <div className='flex flex-row space-x-4 overflow-x-auto' ref={rowRef}>
          {assets.map((asset, index) => {
            return <ContentItem isEven={index % 2 === 0} item={asset} key={index} onFocusCb={onItemFocus} />;
          })}
        </div>
      </FocusContext.Provider>
    </div>
  );
}
