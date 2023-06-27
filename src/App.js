import React from 'react';

function App() {
  return (
    <div className="w-[1440px] h-[1024px] relative bg-slate-800">
      <div className="w-[654px] h-[687px] left-[393px] top-[154px] absolute">
        <div className="w-[654px] h-[559px] left-0 top-[128px] absolute bg-neutral-50 rounded-2xl" />
        <div className="w-[541px] h-[70px] left-[56px] top-[561px] absolute">
          <div className="w-[541px] h-[70px] left-0 top-0 absolute bg-amber-500 rounded-[35px]" />
          <div className="left-[185.50px] top-[16px] absolute text-center text-neutral-50 text-[32px] font-bold">Start Game</div>
        </div>
        <div className="w-[542px] h-[93px] left-[56px] top-[184px] absolute">
          <div className="w-[542px] h-[52px] left-0 top-[41px] absolute">
            <div className="w-64 h-[52px] left-0 top-0 absolute">
              <div className="w-64 h-[52px] left-0 top-0 absolute bg-slate-700 rounded-[26px]" />
              <div className="left-[73px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">Numbers</div>
            </div>
            <div className="w-64 h-[52px] left-[286px] top-0 absolute">
              <div className="w-64 h-[52px] left-0 top-0 absolute bg-slate-300 rounded-[26px]" />
              <div className="left-[93px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">Icons</div>
            </div>
          </div>
          <div className="left-0 top-0 absolute text-slate-500 text-[20px] font-bold">Select Theme</div>
        </div>
        <div className="w-[542px] h-[93px] left-[56px] top-[435px] absolute">
          <div className="w-[542px] h-[52px] left-0 top-[41px] absolute">
            <div className="w-64 h-[52px] left-0 top-0 absolute">
              <div className="w-64 h-[52px] left-0 top-0 absolute bg-slate-700 rounded-[26px]" />
              <div className="left-[104.50px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">4x4</div>
            </div>
            <div className="w-64 h-[52px] left-[286px] top-0 absolute">
              <div className="w-64 h-[52px] left-0 top-0 absolute bg-slate-300 rounded-[26px]" />
              <div className="left-[104.50px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">6x6</div>
            </div>
          </div>
          <div className="left-0 top-0 absolute text-slate-500 text-[20px] font-bold">Grid Size</div>
        </div>
        <div className="w-[541px] h-[93px] left-[56px] top-[309px] absolute">
          <div className="w-[541px] h-[52px] left-0 top-[41px] absolute">
            <div className="w-[119px] h-[52px] left-0 top-0 absolute">
              <div className="w-[119px] h-[52px] left-0 top-0 absolute bg-slate-700 rounded-[26px]" />
              <div className="w-[34.74px] left-[42.13px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">1</div>
            </div>
            <div className="w-[119px] h-[52px] left-[140px] top-0 absolute">
              <div className="w-[119px] h-[52px] left-0 top-0 absolute bg-slate-300 rounded-[26px]" />
              <div className="w-[34.74px] left-[42.50px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">2</div>
            </div>
            <div className="w-[119px] h-[52px] left-[281px] top-0 absolute">
              <div className="w-[119px] h-[52px] left-0 top-0 absolute bg-slate-300 rounded-[26px]" />
              <div className="w-[34.74px] left-[42.50px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">3</div>
            </div>
            <div className="w-[119px] h-[52px] left-[422px] top-0 absolute">
              <div className="w-[119px] h-[52px] left-0 top-0 absolute bg-slate-300 rounded-[26px]" />
              <div className="w-[34.74px] left-[42.50px] top-[11px] absolute text-center text-neutral-50 text-[26px] font-bold">4</div>
            </div>
          </div>
          <div className="left-0 top-0 absolute text-slate-500 text-[20px] font-bold">Numbers of Players</div>
        </div>
        <div className="left-[250px] top-0 absolute text-neutral-50 text-[40px] font-bold">memory</div>
      </div>
    </div>
  );
}

export default App;
