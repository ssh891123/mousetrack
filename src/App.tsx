import React, { useState } from 'react';
import Button from './components/Button';

type Cursor = "blue_cursor" | "cursor1" | "cursor2" | "cursor3";
const cursors: Cursor[] = ["blue_cursor", "cursor1", "cursor2", "cursor3"];

function App() {
  const [selectedCursor, setSelectedCursor] = useState<Cursor>("blue_cursor");
  return (
    <>
      <div 
        style={{fontSize:"24px"}}
      >
        버튼을 눌러서 마우스 커서를 바꿔보세요.
      </div>
      <div 
        style={{
          marginTop:"16px",
          display:"flex",
          gap:"20px",
          flexWrap:"wrap",
        }}
      >
        {/* button list */}
        {
          cursors.map(cursor => 
              <Button 
                onClick={()=>{setSelectedCursor(cursor)}} 
                selected = {selectedCursor === cursor}
                name={cursor}
              />
            )
        }
        
      </div>
    </>
  );
}

export default App;
