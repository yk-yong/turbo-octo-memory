/**
 *
 * @description Sidebar.item.tsx
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 10 July 2022
 *
 */

import Link from 'next/link';
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';

type Props = {
  href: string;
  label: string;
};
export default function SidebarItem({ href, label }: Props) {
  const { ref, focused } = useFocusable({
    onEnterPress: (props, details) => {
      console.log('menu pressed', props, details);
    },
    onEnterRelease: (props) => {
      console.log('menu released', props);
    },
    onArrowPress: (direction: string, props: unknown, details) => {
      console.log('menu item arrow pressed', direction, props, details);

      return true;
    },
  });

  return (
    <div
      ref={ref}
      className={classNames(
        focused ? 'border-yellow-300' : 'border-transparent',
        'border-2 w-full bg-indigo-500 my-2 cursor-pointer'
      )}
    >
      <Link href={href}>
        <a className='block w-full py-2 px-4'>{label}</a>
      </Link>
    </div>
  );
}
