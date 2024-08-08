"use client"
import { useState, useEffect } from 'react';
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import { AntdRegistry } from '@ant-design/nextjs-registry';

const Page = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Sidebar />
      <AntdRegistry>{children}</AntdRegistry>
      <Hero searchQuery={searchQuery} />
    </div>
  );
}

export default Page;
