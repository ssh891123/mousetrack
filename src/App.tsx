import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import { click } from '@testing-library/user-event/dist/click';

// type을 미리 정의된 STRING으로만 정의
type Cursor = "blue_cursor" | "cursor1" | "cursor2" | "cursor3";
const cursors: Cursor[] = ["blue_cursor", "cursor1", "cursor2", "cursor3"];

function App() {
  const [selectedCursor, setSelectedCursor] = useState<Cursor>(cursors[0]);
  const [cursorPosition, setCursorPosition] = useState([0, 0]);
  const [calibratedCursorPosition, setCalibratedCursorPosition] = useState([0, 0]);

  useEffect(()=> {
    const event = ({clientX, clientY}: MouseEvent) => {
      setCursorPosition([clientX, clientY]);
      const pos = [clientX, clientY];

      switch(selectedCursor) {
        case "blue_cursor":
          pos[0] -= 16;
          break;
        case "cursor1":
          pos[0] -= 18;
          break;
        case "cursor2":
          pos[0] -= 32;
          pos[1] -= 32;
          break;
        case "cursor3":
          pos[0] -= 32;
          pos[1] -= 32;
          break;
      }

      setCalibratedCursorPosition([pos[0], pos[1]]);
    };

    window.addEventListener("mousemove", event);

    return () => window.removeEventListener("mousemove", event);
  }, [selectedCursor]);

  return (
    <>
      <img 
        style= {{
          // zIndex:-1, // cursor image가 click 이벤트를 먹고 있음
          pointerEvents: "none", //click 이벤트를 막음
          position:"fixed",
          left: calibratedCursorPosition[0],
          top: calibratedCursorPosition[1],
          width: "100px",
        }}
        src={`/images/${selectedCursor}.png`}
      />
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
              onClick={ () => {
                // 이미지 클릭하고, 마우스를 이동하면 이미지가 변경되는 문제 있음
                // 렌더링 전에 보정된 cursor position을 넘겨줘서 렌더링이 되도록 반영
                const pos = cursorPosition;

                switch(selectedCursor) {
                  case "blue_cursor":
                    pos[0] -= 16;
                    break;
                  case "cursor1":
                    pos[0] -= 18;
                    break;
                  case "cursor2":
                    pos[0] -= 32;
                    pos[1] -= 32;
                    break;
                  case "cursor3":
                    pos[0] -= 32;
                    pos[1] -= 32;
                    break;
                }
                setCalibratedCursorPosition(pos);
                setSelectedCursor(cursor)}
              }
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
