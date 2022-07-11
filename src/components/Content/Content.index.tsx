/**
 *
 * @description Content.index.tsx
 * @author yikkok <yikok.yong@gmail.com>
 * @version 1.0.0
 * @since 11 July 2022
 *
 */

import { FocusableComponentLayout, FocusContext, useFocusable } from '@noriginmedia/norigin-spatial-navigation';

import { useCallback } from 'react';
import ContentRow from './Content.row';

const rows = ['Trending Now', 'New Release', 'Concerts', 'Sci-Fi', 'Horror'];

export default function ContentIndex() {
  const { ref } = useFocusable({
    focusKey: 'CONTENT',
  });

  const onRowFocus = useCallback(({ top, y }: FocusableComponentLayout) => {
    window.scrollTo({
      top: top - y,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className='pl-64 flex flex-col flex-1 bg-purple-400 h-full'>
      <h1 className='text-center text-3xl py-6 font-bold'>Demo Norigin Spartial Navigation</h1>
      <div className='aspect-video min-h-[384px] h-96 w-full bg-gray-300 relative'>
        <p className='absolute bottom-0 p-4'>Title: Lorem ipsum</p>
      </div>

      <div ref={ref} className='overflow-y-auto overflow-x-hidden pl-4 py-4 space-y-4'>
        {rows.map((row, index) => (
          <div key={index}>
            <p className='text-xl pb-4 font-bold'>{row}</p>
            <ContentRow onFocusCb={onRowFocus} />
          </div>
        ))}
      </div>
    </div>
  );
}
