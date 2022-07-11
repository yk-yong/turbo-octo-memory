/**
 *
 * @description Content.item.tsx
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 11 July 2022
 *
 */

import { FocusableComponentLayout, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';

type Props = {
  item: string;
  isEven?: boolean | undefined;
  onFocusCb?: (layout: FocusableComponentLayout) => void;
};
export default function ContentItem({ isEven = false, item, onFocusCb = () => {} }: Props) {
  const { ref, focused } = useFocusable({
    onEnterPress: (props, details) => {
      console.log('content item pressed', props, details);
    },
    onEnterRelease: (props) => {
      console.log('content item released', props);
    },
    onArrowPress: (direction: string, props: unknown, details) => {
      console.log('content item arrow pressed', direction, props, details);

      return true;
    },
    onFocus: (layout: FocusableComponentLayout) => {
      onFocusCb(layout);
    },
  });

  const evenStyle = isEven ? 'bg-indigo-300' : 'bg-indigo-500';
  const focusedStyle = focused ? 'border-gray-300' : '';

  return (
    <div ref={ref}>
      <div className={classNames(evenStyle, focusedStyle, 'border-2 border-transparent h-40 w-40')}></div>

      <p className='text-center pt-2'>{item}</p>
    </div>
  );
}
