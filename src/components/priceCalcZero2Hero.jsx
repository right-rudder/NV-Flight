import { FaCheckCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import { FaPhone } from "react-icons/fa6";

import { PHONE_NUMBER } from "../consts";

const PriceCalcZero2Hero = () => {
  const [total, setTotal] = useState(0);
  const pricePpl = 20000;
  const priceInstrument = 18000;
  const priceCplSolo = 27000;
  const priceCfi = 9000;
  const priceCfii = 4500;
  const priceMe = 10500;

  const priceStarter = 1000;
  const priceCheckride = 7000;
  const priceWritten = 1050;
  const priceHeadset = 1200;

  const [starter, setStarter] = useState(false);
  const [checkride, setCheckride] = useState(false);
  const [written, setWritten] = useState(false);
  const [headset, setHeadset] = useState(false);

  const [ppl, setPpl] = useState(false);
  const [instrument, setInstrument] = useState(false);
  const [cplSolo, setCplSolo] = useState(false);
  const [cfi, setCfi] = useState(false);
  const [cfii, setCfii] = useState(false);
  const [me, setMe] = useState(false);
  const [meTbd, setMeTbd] = useState(false);

  const [heldPpl, setHeldPpl] = useState(false);
  const [heldInstrument, setHeldInstrument] = useState(false);
  const [heldCpl, setHeldCpl] = useState(false);
  const [heldCfi, setHeldCfi] = useState(false);
  const [heldCfii, setHeldCfii] = useState(false);
  const [heldMe, setHeldMe] = useState(false);

  useEffect(() => {
    setTotal(0);
    setPpl(true);
    setInstrument(true);
    setCplSolo(true);
    setCfi(true);
    setCfii(true);
    setMe(true);
    setTotal(
      total +
        pricePpl +
        priceInstrument +
        priceCplSolo +
        priceCfi +
        priceCfii +
        priceMe,
    );
  }, []);

  return (
    <section id="cost-calc" className="overflow-hidden">
      <div className="bg-sky-100 py-16 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto w-full lg:mx-0">
            <h3 className="section-upper">
              Find out how much your training will cost
            </h3>
            <h2 className="section-title">
              NVFlight’s Flight Training Estimator
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center lg:flex md:space-y-0 xl:w-full">
            <div className="relative group w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-br from-sky-200 to-sky-300 shadow-lg transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pl-10 lg:p-12">
                <div className="mt-2 flex justify-between gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <fieldset>
                      <legend className="mb-2 text-xl font-title leading-tight text-gray-800 font-semibold">
                        Certificates and Ratings Currently Held:
                      </legend>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldPpl}
                          className="mx-2"
                          id="heldPpl"
                          name="heldPpl"
                          onChange={(e) => {
                            setHeldPpl(!heldPpl);
                            if (ppl) {
                              setTotal(total - pricePpl);
                              setPpl(!ppl);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldPpl"
                          className="text-sm tracking-tighter"
                        >
                          Private Pilot Certificate{" "}
                          <small className="font-bold">(PPL)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldInstrument}
                          className="mx-2"
                          id="heldInstrument"
                          name="heldInstrument"
                          onChange={(e) => {
                            setHeldInstrument(!heldInstrument);
                            if (instrument) {
                              setTotal(total - priceInstrument);
                              setInstrument(!instrument);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldInstrument"
                          className="text-sm tracking-tighter"
                        >
                          Instrument Rating
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCpl}
                          className="mx-2"
                          id="heldCpl"
                          name="heldCpl"
                          onChange={(e) => {
                            setHeldCpl(!heldCpl);
                            if (cplSolo) {
                              setTotal(total - priceCplSolo);
                              setCplSolo(!cplSolo);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldCpl"
                          className="text-sm tracking-tighter"
                        >
                          Commercial Pilot Certificate{" "}
                          <small className="font-bold">(CPL)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCfi}
                          className="mx-2"
                          id="heldCfi"
                          name="heldCfi"
                          onChange={(e) => {
                            setHeldCfi(!heldCfi);
                            if (cfi) {
                              setTotal(total - priceCfi);
                              setCfi(!cfi);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldCfi"
                          className="text-sm tracking-tighter"
                        >
                          Certified Flight Instructor{" "}
                          <small className="font-bold">(CFI)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldCfii}
                          className="mx-2"
                          id="heldCfii"
                          name="heldCfii"
                          onChange={(e) => {
                            setHeldCfii(!heldCfii);
                            if (cfii) {
                              setTotal(total - priceCfii);
                              setCfii(!cfii);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldCfii"
                          className="text-sm tracking-tighter"
                        >
                          Certified Flight Instructor-Instrument{" "}
                          <small className="font-bold">(CFII)</small>
                        </label>
                      </div>

                      <div className="">
                        <input
                          type="checkbox"
                          checked={heldMe}
                          className="mx-2"
                          id="heldMe"
                          name="heldMe"
                          onChange={(e) => {
                            setHeldMe(!heldMe);
                            if (me) {
                              setTotal(total - priceMe);
                              setMe(!me);
                            }
                          }}
                        />
                        <label
                          htmlFor="heldMe"
                          className="text-sm tracking-tighter"
                        >
                          Multi-Engine Rating
                        </label>
                      </div>
                    </fieldset>
                    <div className="mt-4 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative z-10 min-h-[screen-1/2] m-0 lg:-mx-4 group w-full lg:w-3/5 lg:max-w-3/5">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-b from-sky-200 to-sky-100 shadow-xl transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <div className="p-6 lg:p-8">
                  <h3 className="text-5xl text-gray-800 font-bold text-center font-title">
                    Zero to Hero
                  </h3>
                  <p className="italic mt-2 text-center text-gray-700">
                    Fly for a career, within a year!
                  </p>
                  <div className="flex justify-around has-tooltip">
                    <span className="tooltip">
                      This pricing is based on <strong>250 hours</strong> and
                      flying full-time. While pricing can vary within our other
                      programs, it does less so for our Zero to Hero Program.
                      However, the speed at which you can achieve the level you
                      wish will be based upon your availability and time
                      commitment. There is no way to go Zero to Hero in a year
                      doing anything less than full-time. Flying 3-4 days a week
                      makes Zero to Hero achievable in 12-15 months and flying
                      2-3 days a week is achievable in 15-18 months.
                    </span>
                    <div className="my-6 flex items-center">
                      <div className="">
                        <span className="block text-3xl text-gray-700 font-bold">
                          $
                        </span>
                      </div>
                      <span className="text-4xl text-gray-700 font-bold leading-0">
                        {total.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <ul
                    role="list"
                    className="w-full px-3 flex flex-col gap-2 text-gray-800 text-sm mt-3 mb-8"
                  >
                    {total == 0 && (
                      <li className="text-center">
                        <span className="font-semibold text-xl text-center">
                          Choose your training goal
                        </span>
                      </li>
                    )}
                    {ppl && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <FaCheckCircle className="text-green-600 text-xl" />
                        <span>Private Pilot Certificate</span>
                      </li>
                    )}
                    {instrument && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Instrument Rating</span>
                      </li>
                    )}
                    {cplSolo && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Commercial Pilot Certificate</span>
                      </li>
                    )}
                    {cfi && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Certified Flight Instructor</span>
                      </li>
                    )}
                    {cfii && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Certified Flight Instructor-Instrument</span>
                      </li>
                    )}
                    {me && (
                      <li className="space-x-2 flex flex-nowrap align-middle items-center">
                        <span className="text-sky-500 font-semibold">
                          <FaCheckCircle className="text-green-600 text-xl" />
                        </span>
                        <span>Multi-Engine Rating</span>
                      </li>
                    )}
                  </ul>
                  <fieldset className="flex flex-col justify-center items-center align-top w-full text-left">
                    <legend className="mb-2 text-xl font-title text-center w-full text-gray-800 font-semibold">
                      Add Ons:
                    </legend>

                    <div>
                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={starter}
                          className="mx-2"
                          id="starter"
                          name="starter"
                          onChange={(e) => {
                            starter
                              ? setTotal(total - priceStarter)
                              : setTotal(total + priceStarter);
                            setStarter(!starter);
                          }}
                        />
                        <span className="tooltip text-sm tracking-tighter">
                          Includes a passive headset, pilot bag, pilot training
                          books, a logbook, foggles, a ForeFlight subscription
                          while enrolled, and a kneeboard.
                        </span>
                        <label
                          htmlFor="starter"
                          className="text-sm tracking-tighter"
                        >
                          Starter Bundle
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={checkride}
                          className="mx-2"
                          id="checkride"
                          name="checkride"
                          onChange={(e) => {
                            checkride
                              ? setTotal(total - priceCheckride)
                              : setTotal(total + priceCheckride);
                            setCheckride(!checkride);
                          }}
                        />
                        <span className="tooltip text-sm tracking-tighter">
                          Depending on your DPE, you can plan to budget around
                          $900 for most checkrides with the exceptions being the
                          CFI initial (~$1,500) and CFI add-ons (~$1,200 each).
                        </span>
                        <label
                          htmlFor="checkride"
                          className="text-sm tracking-tighter"
                        >
                          Checkride Fees
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={written}
                          className="mx-2"
                          id="written"
                          name="written"
                          onChange={(e) => {
                            written
                              ? setTotal(total - priceWritten)
                              : setTotal(total + priceWritten);
                            setWritten(!written);
                          }}
                        />
                        <span className="tooltip text-sm tracking-tighter">
                          Written tests are ~$175 per certification (not
                          required for the Multi-Engine Rating or MEI add-on).
                        </span>
                        <label
                          htmlFor="written"
                          className="text-sm tracking-tighter"
                        >
                          Written Test Fees
                        </label>
                      </div>

                      <div className="has-tooltip">
                        <input
                          type="checkbox"
                          checked={headset}
                          className="mx-2"
                          id="headset"
                          name="headset"
                          onChange={(e) => {
                            headset
                              ? setTotal(total - priceHeadset)
                              : setTotal(total + priceHeadset);
                            setHeadset(!headset);
                          }}
                        />
                        <span className="tooltip text-sm tracking-tighter">
                          Receive <strong>$299.00</strong> off of your Zulu 3
                          Headset if you choose to upgrade your Starter Package
                          at Summit Flight Academy.
                        </span>
                        <label
                          htmlFor="headset"
                          className="text-sm tracking-tighter"
                        >
                          Aviation Headset
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <div className="mt-8 flex flex-col justify-center items-center align-middle gap-2">
                    <a href="/contact" className="btn-accent w-full">
                      <span>Contact Us</span>
                    </a>
                    <a
                      href={`tel: ${PHONE_NUMBER}`}
                      className="btn-accent inline-flex justify-center items-center gap-2 w-full"
                    >
                      <FaPhone />
                      <span>{PHONE_NUMBER}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group w-full lg:w-1/2">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-gradient-to-l from-sky-200 to-sky-300 shadow-lg transition duration-500 group-hover:scale-105 transform-gpu"
              ></div>
              <div className="relative p-5 pt-12 md:p-8 md:pl-8 md:rounded-r-2xl lg:pr-10 lg:p-12">
                <fieldset>
                  <legend className="mb-2 font-title leading-tight text-xl text-gray-800 font-semibold">
                    Certificates and Ratings You Want to Obtain:
                  </legend>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={ppl}
                      disabled={heldPpl}
                      className="mx-2"
                      id="ppl"
                      name="ppl"
                      onChange={(e) => {
                        ppl
                          ? setTotal(total - pricePpl)
                          : setTotal(total + pricePpl);
                        setPpl(!ppl);
                      }}
                    />
                    <label htmlFor="ppl" className="text-sm tracking-tighter">
                      Private Pilot Certificate{" "}
                      <small className="font-bold">(PPL)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={instrument}
                      disabled={heldInstrument}
                      className="mx-2"
                      id="instrument"
                      name="instrument"
                      onChange={(e) => {
                        instrument
                          ? setTotal(total - priceInstrument)
                          : setTotal(total + priceInstrument);
                        setInstrument(!instrument);
                      }}
                    />
                    <label
                      htmlFor="instrument"
                      className="text-sm tracking-tighter"
                    >
                      Instrument Rating
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cplSolo}
                      disabled={heldCpl}
                      className="mx-2"
                      id="cplSolo"
                      name="cplSolo"
                      onChange={(e) => {
                        cplSolo
                          ? setTotal(total - priceCplSolo)
                          : setTotal(total + priceCplSolo);
                        setCplSolo(!cplSolo);
                      }}
                    />
                    <label
                      htmlFor="cplSolo"
                      className="text-sm tracking-tighter"
                    >
                      Commercial Pilot Certificate{" "}
                      <small className="font-bold">(Solo)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cfi}
                      disabled={heldCfi}
                      className="mx-2"
                      id="cfi"
                      name="cfi"
                      onChange={(e) => {
                        cfi
                          ? setTotal(total - priceCfi)
                          : setTotal(total + priceCfi);
                        setCfi(!cfi);
                      }}
                    />
                    <label htmlFor="cfi" className="text-sm tracking-tighter">
                      Certified Flight Instructor{" "}
                      <small className="font-bold">(CFI)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={cfii}
                      disabled={heldCfii}
                      className="mx-2"
                      id="cfii"
                      name="cfii"
                      onChange={(e) => {
                        cfii
                          ? setTotal(total - priceCfii)
                          : setTotal(total + priceCfii);
                        setCfii(!cfii);
                      }}
                    />
                    <label htmlFor="cfii" className="text-sm tracking-tighter">
                      Certified Flight Instructor-Instrument{" "}
                      <small className="font-bold">(CFII)</small>
                    </label>
                  </div>

                  <div className="">
                    <input
                      type="checkbox"
                      checked={me}
                      disabled={heldMe}
                      className="mx-2"
                      id="me"
                      name="me"
                      onChange={(e) => {
                        me
                          ? setTotal(total - priceMe)
                          : setTotal(total + priceMe);
                        setMe(!me);
                      }}
                    />
                    <label
                      htmlFor="me"
                      className="text-sm tracking-tighter has-tooltip"
                    >
                      <span className="tooltip text-sm tracking-tighter">
                        Career track students need 25 total ME hours to reach a
                        Multi-Engine certification. You can achieve this by
                        either getting your MEI or flying 15 hours via time
                        building.
                      </span>
                      Multi-Engine Rating
                    </label>
                  </div>
                </fieldset>
                <div className="mt-6 flex justify-between gap-6 w-full">
                  <div className="grid grid-cols-1">
                    <div className="mt-4 flex justify-around lg:hidden">
                      <div className="flex items-center">
                        <div>
                          <span className="block  text-center  text-xl text-gray-700 font-bold">
                            Total $
                          </span>
                        </div>
                        <span className="text-xl text-center  text-gray-700 font-bold leading-0">
                          {total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceCalcZero2Hero;
