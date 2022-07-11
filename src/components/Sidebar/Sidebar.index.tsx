/**
 *
 * @description Sidebar.index.tsx
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 10 July 2022
 *
 */

import { FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect } from 'react';
import SidebarItem from './Sidebar.item';

const routes = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
  { href: '#', label: 'Support' },
];

type Props = {
  focusKey?: string | undefined;
};
export default function Sidebar({ focusKey: focusKeyParams }: Props) {
  const { ref, focusKey, hasFocusedChild, focusSelf } = useFocusable({
    focusKey: focusKeyParams,
    focusable: true,
    autoRestoreFocus: false,
    trackChildren: true,
    saveLastFocusedChild: false,
    preferredChildFocusKey: undefined,
  });

  useEffect(() => {
    // when a component (Container) is mounted, required to execute
    // To focus on current component (Container)
    focusSelf();
  }, [focusSelf]);

  return (
    <FocusContext.Provider value={focusKey}>
      <div
        className={classNames(
          hasFocusedChild ? 'focused' : '',
          'w-64 h-screen bg-purple-600 py-4 px-8 flex flex-col fixed inset-y-0'
        )}
        ref={ref}
      >
        <div className='w-full bg-red-500 my-2 cursor-pointer'>
          <Link href='/'>
            <a className='block w-full p-4 text-center text-white font-bold text-3xl'>Demo</a>
          </Link>
        </div>
        {routes.map((route, index) => (
          <SidebarItem href={route.href} label={route.label} key={index} />
        ))}
      </div>
    </FocusContext.Provider>
  );
}
