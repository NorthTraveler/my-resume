"use client"; 
import Template from '@/components/template'
import { Provider } from 'react-redux';
import store from '../store';
import Top from '@/components/content/top';

export default function Dashboard() {
  return (
    <Provider store={store}>
    <div className='h-20 bg-amber-100'>
      <Top />
        <Template/>
    </div>  
    </Provider>
  )
}
