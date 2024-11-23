import React from 'react';

function ButtonAbleLayout(children: React.ReactNode) {
  return (
    <div>
      <button>버튼</button>
      {children}
    </div>
  );
}

export default ButtonAbleLayout;
