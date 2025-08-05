import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ faq, toggled, onShow, index }) => {
  return (
    <div className="relative">
      {/* Header */}
      <dt className="flex flex-col items-start p-7 bg-gradient-to-br from-sky-200 to-sky-300 rounded-t-lg">
        <div
          id={faq.title}
          onClick={onShow}
          className="absolute z-10 top-0 left-0 w-full h-32 cursor-pointer"
        ></div>
        <div className="w-full h-full flex items-center justify-between text-black py-2">
          <span className="font-mono lg:mr-4 text-lg lg:text-5xl font-semibold w-6 lg:w-24 text-sky-800/30 tracking-tight overflow-hidden text-left">
            {index + 1}
          </span>
          <p className="text-base lg:text-xl text-sky-950 font-semibold w-full text-center lg:text-left">
            {faq.title}
          </p>
          {toggled ? (
            <FaMinus className="mr-3 pointer-events-none text-muted-700/50" />
          ) : (
            <FaPlus className="mr-3 pointer-events-none text-muted-700/50" />
          )}
        </div>
      </dt>

      {/* Smooth animated content */}
      <dd
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          toggled
            ? "max-h-[1000px] opacity-100 bg-white border-2 border-gray-200 rounded-b-lg"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-9 pt-0 pb-9 text-black font-medium w-full">
          {faq.content && (
            <p
              className="mt-2 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.content }}
            ></p>
          )}
          {faq.paragraph1 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph1 }}
            ></p>
          )}
          {faq.paragraph2 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph2 }}
            ></p>
          )}
          {faq.paragraph3 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph3 }}
            ></p>
          )}
          {faq.oList && (
            <ol className="mt-3 list-decimal">
              {faq.oList.map((item, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item}
                </li>
              ))}
            </ol>
          )}
          {faq.paragraph4 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph4 }}
            ></p>
          )}
          {faq.list && (
            <ul className="mt-3 list-disc">
              {faq.list.map((item, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item}
                </li>
              ))}
            </ul>
          )}
          {faq.paragraph5 && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.paragraph5 }}
            ></p>
          )}
          {faq.list2 && (
            <ul className="mt-3 list-disc">
              {faq.list2.map((item2, index) => (
                <li key={index} className="ml-3 text-justify">
                  {item2}
                </li>
              ))}
            </ul>
          )}
          {faq.note && (
            <p
              className="mt-4 text-lg text-justify"
              dangerouslySetInnerHTML={{ __html: faq.note }}
            ></p>
          )}
        </div>
      </dd>
    </div>
  );
};

export default Accordion;
