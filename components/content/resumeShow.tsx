import React, { useEffect, useRef, useState } from 'react'

export default function ResumeShow() {
  return (

        <div className="text-black shadow-md w-[396px] h-[612px] bg-white border border-gray-400 mx-auto m-2 p-1">
      {/* Top Content */}
      <div className='flex justify-between items-center'>
        <div className='text-center flex-1'>
          <div className='text-md font-bold text-black text-[0.8rem]'>吴昊</div>
          <div className='text-xs'>
            <p className='inline text-black text-[0.55rem]'>15670705985</p>
            <p className='px-1 inline'>|</p>
            <p className='inline text-black text-[0.55rem]'>598189208@qq.com</p>
            <p className='px-1 inline'>|</p>
            <p className='inline text-black text-[0.55rem]'>辽宁 沈阳</p>
          </div>
          <div>
          <p className='inline text-black text-[0.55rem]'>东北大学在读</p>
          <p className='px-1 inline'>|</p>
          <p className='inline text-black text-[0.55rem]'>前端开发工程师</p>
            </div>
          </div>
        <img width={60} src='photo.png'/>
      </div>
      {/* Education */}
      <p className='px-2 text-[0.7rem] font-bold text-black'>教育经历</p>
      <hr className="border-0.5  border-black"></hr>
      <div className='flex justify-between'>
        <div className='ml-3'>
          <p className='inline text-[0.5rem] font-bold text-black'>东北大学</p>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>985</div>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>211</div>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>双一流</div>
        </div>
          <div className='mr-3 pt-2 text-[0.5rem]'>
            <p className='inline tracking-wider '>2019年9月-2023年6月</p>
          </div>
        </div>

      <div className='flex justify-between'>
      <div className='ml-3 text-[0.5rem] tracking-widest'>
            <p className='inline'>本科</p>
            <p className='px-0.5 inline'>|</p>
            <p className='inline'>物流工程与管理</p>
            <p className='px-0.5 inline'>|</p>
            <p className='inline'>GPA:3.8(前15%)</p>
          </div>
          <p className='mr-3 text-[0.5rem]'>辽宁 沈阳</p>
      </div>
      <div className='flex justify-between'>
        <div className='ml-3'>
          <p className='inline text-[0.5rem] font-bold'>东北大学</p>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>985</div>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>211</div>
          <div className='ml-1 p-0.5 rounded-sm w-10 inline text-[0.5rem] tracking-widest bg-blue-200 text-blue-700'>双一流</div>
        </div>
          <div className='mr-3 pt-2 text-[0.5rem]'>
            <p className='inline tracking-wider'>2023年9月-2026年6月</p>
          </div>
        </div>

      <div className='flex justify-between'>
          <div className='ml-3 text-[0.55rem]'>
            <p className='inline'>硕士</p>
            <p className='px-0.5 inline'>|</p>
            <p className='inline'>物流工程与管理</p>
          </div>
          <p className='mr-3 text-[0.55rem]'>辽宁 沈阳</p>
      </div>
      {/* technology */}
      <p className='pt-1 px-2 text-[0.7rem] font-bold'>技术概述</p>
      <hr className="mb-1 border-0.5  border-black"></hr>
      <div className='pb-1'>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>1.熟练掌握HTML、CSS和JS等基础开发语言，熟悉ES6+新特性，异步通信，了解TS语法机制。</p>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>2.熟练掌握React开发，了解其事件机制、渲染原理、Hooks及Router等使用（合成事件、VDOM、Diff算法、Fiber等）。</p>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>3.熟悉浏览器原理，包括渲染流程、缓存机制、安全、同源策略等。</p>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>4.了解计算机网络基础知识，客户端服务端通信，包括HTTP协议，TCP/IP、DNS等。</p>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>5.了解React Native开发，了解其开发流程，调试方法及性能优化，了解webpack，Gulp，Grunt等打包工具。</p>
        <p className='ml-2 pt-0.5 text-[0.45rem]'>6.了解Flask、Node.js等后端开发框架，了解SQL结构化数据库，以及Mongodb非结构化数据库的使用和开发方法。</p>
      </div>
    {/* Project Experience */}
    <p className='px-2 text-[0.7rem] font-bold'>项目实例</p>
      <hr className="mb-1 border-0.5  border-black"></hr>
      {/* project1 */}
    <div>
    <div className='flex justify-between'>
      <p className='ml-3 text-[0.55rem] font-bold'>NewPaper电商网站</p>
      <p className='mr-2 text-[0.55rem]'>React全栈项目</p>
    </div>
    <div className='leading-2.5'>
      <p className='ml-3 text-[0.5rem] inline font-bold'>项目概述: </p>
      <p className='inline text-[0.5rem] '>该项目是一个电子商务网站，通过双因素账户验证实现鉴权，集成用户的商品浏览、评论、添加订单，查看订单等功能，以及管理员的商品添加，商品管理，订单可视化等功能。旨在满足电商的基本需求。</p>
    </div>
    <div className='leading-2.5'>  
      <p className='mt-1 ml-3 text-[0.5rem] font-bold inline'>技术选型： </p>
      <p className='inline text-[0.5rem]'>React、Drizzle、MySQL、Auth、shadcn、Tailwind、Webpack</p>
    </div>
    <div className='leading-3'>  
      <p className='mt-1 ml-3 text-[0.5rem] font-bold inline'>项目要点： </p>
      <p className='ml-3 text-[0.5rem]'>1.实现OAuth验证和邮箱双因素验证登录，缓存登录信息，优化用户登录体验。</p>
      <p className='ml-3 text-[0.5rem]'>2.使用Drizzle对数据库进行初始化，使用SQL来规定数据类型和连接关系，实现React全栈开发。</p>
      <p className='ml-3 text-[0.5rem]'>3.集成切换主题和动画效果，添加富文本编辑器和键盘响应，实现丰富的页面效果。</p>
      <p className='ml-3 text-[0.5rem]'>4.自定义Hooks，实现全局的购物车功能，优化用户的购物体验。</p>
    </div>
    </div>
    {/* Project2 */}
    <div>
    <div className='flex justify-between'>
      <p className='ml-3 text-[0.55rem] font-bold'>MeetChina旅行匹配APP</p>
      <p className='mr-2 text-[0.55rem]'>React Native项目</p>
    </div>
    <div className='leading-2.5'>
      <p className='ml-3 text-[0.5rem] inline font-bold'>项目概述: </p>
      <p className='inline text-[0.5rem] '>该项目是一个双向服务平台，针对具有旅游需求和导游兼职的人群，集成分享博客，内容评论，用户沟通，需求配对等功能。</p>
    </div>
    <div className='leading-2.5'>  
      <p className='mt-1 ml-3 text-[0.5rem] font-bold inline'>技术选型： </p>
      <p className='inline text-[0.5rem]'>React、Expo、Redux、Native、Axios、Mongodb</p>
    </div>
      <div className='leading-3'>  
        <p className='mt-1 ml-3 text-[0.5rem] font-bold inline'>项目要点： </p>
        <p className='ml-3 text-[0.5rem]'>1.使用Redux进行全局信息状态管理，权限管理，优化浏览和登录体验。</p>
        <p className='ml-3 text-[0.5rem]'>2.使用模块化组件搭建前端，使用防抖，懒加载等优化方式。</p>
        <p className='ml-3 text-[0.5rem]'>3.使用虚拟列表优化数据渲染，实现数据的按需加载，优化用户体验。</p>
        <p className='ml-3 text-[0.5rem]'>4.使用非结构化数据库对信息进行存储</p>
      </div>
    </div>
    {/* relative */}
    <p className='mt-1 px-2 text-[0.7rem] font-bold'>在校经历</p>
      <hr className="mb-1 border-0.5  border-black"></hr>
      <p className='ml-3 text-[0.5rem]'>通过CET-6，多次荣获学校奖学金,系统性学习UML，在面向对象的系统设计和实现方面具备经验。</p>
      <p className='ml-3 text-[0.5rem]'>本科毕业设计针对制造企业的订单系统进行设计和实现。</p>
      <p className='ml-3 text-[0.5rem]'>深入理解前端系统组件结构，交互方式和功能需求及实现，了解模块化，前端工程化，性能优化等知识。</p>
      <p className='ml-3 text-[0.5rem]'>了解前后端分离，Jest自动化测试，Babel语法转换，Webpack打包器等知识。</p>
    </div>
  )
}
