import React from 'react'
import { StepsItem } from '../../data/ProductCardData'
type WizardProps = {
  step: Number
}
export default function CheckoutWizard({ step }: WizardProps) {
  return (
    <div className="">
      <div className="w-full py-6">
        <div className=" grid grid-cols-5 justify-items-end">
          <div className=""></div>
          {StepsItem.map((item, i) => (
            <div>
              <div key={item.title} className="grid grid-cols-4 items-center">
                <div className="col-span-1 relative">
                  <div
                    className={`w-10 h-10  rounded-full flex items-center border-2 ${
                      step < i
                        ? 'bg-gray-100 text-gray-800 border-gray-400'
                        : 'bg-yellow-500 text-gray-200'
                    }`}
                  >
                    <span className="w-full">{item.icon}</span>
                  </div>
                  <div className="font-bold md:text-base lg:text-lg text-left text-sm absolute left-0 bottom-0">
                    {item.title}
                  </div>
                </div>

                {i == 3 ? (
                  ''
                ) : (
                  <div className="col-span-3 px-3 md:px-0 ">
                    <div className="w-full bg-gray-200 rounded ">
                      <div
                        className={` bg-yellow-500 py-1 rounded transition-all duration-300 ${
                          step >= i ? (step == i ? 'w-5' : ' w-full') : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
