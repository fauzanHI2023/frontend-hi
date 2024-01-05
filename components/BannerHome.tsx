import React from "react";

const BannerHome = () => {
  return (
    <section className="flex flex-row w-full">
      <div className="flex flex-row w-full">
        <div className="flex flex-col w-1/2 justify-center">
          <h3 className="font-semibold text-4xl pb-4">
            Helps connect those who care with those who need help.
          </h3>
          <h6 className="font-normal font-base">
            Lets work together to help our brothers and sisters who are being
            hit by a disaster. One upee from you is definitely valuable to them.
          </h6>
        </div>
        <div className="flex w-1/2 justify-center">
          <div className="flex flex-col">
            <div className="flex flex-row pb-4">
              <div className="w-[219.05px] h-[40.87px] bg-white rounded-tl-[23px] rounded-bl-[23px] border border-sky-600 text-center">
                <a href="#" className="text-blue-950 text-sm font-bold tracking-tight">GIVE ONCE</a>
              </div>
              <div className="w-[219.05px] h-[40.87px] bg-sky-600 rounded-tr-[23px] rounded-br-[23px] border border-sky-600 text-center">
                <a href="#" className="text-white text-sm font-bold tracking-tight">MONTHLY</a>
              </div>
            </div>
            <div className="card-donate flex flex-col rounded-lg">
              <div className="card-header bg-sky-600 font-white p-4 text-center rounded-tl-[23px] rounded-tr-[23px]">
                <h5>Choose the amount to be given per month</h5>
              </div>
              <div className="card-body flex flex-col bg-white p-4">
                <div className="flex flex-wrap pb-4">
                  <a className="bg-zinc-100 rounded-[23px] shadow border border-gray-400 py-3 px-4 text-neutral-400 text-sm">Rp 10.000</a>
                </div>
                <a href="#" className="w-full bg-sky-600 rounded-[50px] py-3 px-4 text-center">JOIN NOW</a>
              </div>
              <div className="card-footer flex flex-col bg-sky-600 font-white p-8 text-center rounded-bl-[23px] rounded-br-[23px]">
                <p>Your monthly donation of 50.000 can</p>
                <p>provide assistance to people in need.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
