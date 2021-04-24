import './index.less';
import React from 'react';

const AppBody: React.FC = ({children}) => {
  return (
    <div className="app-body">
      {children}
    </div>
  );
}

export default AppBody;