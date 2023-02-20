import './App.css';

import { ReactComponent as BoltIcon } from '../images/bolt.svg';
import { ReactComponent as LightIcon } from '../images/light.svg';
import { ReactComponent as WarningIcon } from '../images/warning.svg';

function App() {
  return (
    <div className="bg-[#343541] w-full h-[100vh] flex">
      <div className="w-[260px] h-full bg-[#202123]">123</div>
      <div className="w-[calc(100vw-260px)] h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white">ChatGPT</h1>
        <div className="flex max-w-2xl w-full mt-12 text-white">
          <div className="w-1/3 flex flex-col justify-center items-center">
            <LightIcon className="w-[24px] h-[24px]" />
            <p className="text-lg mt-2">Examples</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <BoltIcon className="w-[24px] h-[24px]" />
            <p className="text-lg mt-2">Capabilities</p>
          </div>
          <div className="w-1/3 flex flex-col justify-center items-center">
            <WarningIcon className="w-[24px] h-[24px]" />
            <p className="text-lg mt-2">Limitations</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
