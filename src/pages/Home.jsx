function Home() {
  return (
    <div className="container mt-14">
      <div className="flex justify-center gap-[10px] mb-[12px]">
        <div className="w-[250px] text-[28px] p-[10px] border border-[#fff] rounded-[18px]">
          <h3 className="text-[#fff] flex justify-center">
            time: <span>00h:1pm:47s</span>
          </h3>
        </div>
        <div className="border border-[#fff] w-[65px] h-[67px] rounded-full">
          <img
            className="w-[65px] h-[65px] rounded-full"
            src="aui-img.jpg"
            alt=""
          />
        </div>
      </div>
      {/* numbers */}
      <div className="flex justify-center mb-[53px]">
        <div className="w-[325px] flex justify-between items-center pl-4 pr-4 border border-[#fff] rounded-[18px]">
          <h3 className="text-[#fff] text-[40px] flex justify-center">U:</h3>
          <span className="text-[#fff] text-[34px] mr-[60px]">00000</span>
        </div>
      </div>
      {/* start button */}
      <div className="flex justify-center">
        <button className="w-[270.3px] h-[270.3px] flex justify-center items-center text-[62px] text-[#fff] rounded-full border-[4px] border-[#fff]">
          <h3 className="kumbh">Start</h3>
        </button>
      </div>
    </div>
  );
}
//bg-[#7C2DE1] bg-[#26BFB6]
export default Home;
