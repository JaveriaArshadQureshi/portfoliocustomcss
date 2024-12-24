import React from 'react';
import '@/app/style/tab.css'

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? 'tab-button tab-button-active' : 'tab-button tab-button-inactive';

  return (
    <button onClick={selectTab} className={buttonClasses}>
      <p className="mr-3 font-semibold">{children}</p>
    </button>
  );
};

export default TabButton;
