import {BiSolidQuoteSingleRight} from 'react-icons/bi'

const HomePageTestimonialsReview = ({item}) => {
  return (
    <div className="">
      <div className="relative block md:hidden">
        <div className="block md:hidden mb-4 p-4">
            <h1 className="text-[#354895] font-semibold ps-4">{item.name}</h1>
            <p className="text-[12px] text-[#999] ps-4 mb-8">{item.grade}</p>
            <p className="text-[#999] text-[16px]">{item.comment}</p>
        </div>
        <div className="flex justify-end">
          <div className="flex text-[#354895] text-[50px]">
            <BiSolidQuoteSingleRight classname="s"/>
          </div>
          <div className="flex text-[#cf278d] text-[50px]  -ml-6">
            <BiSolidQuoteSingleRight classname=" "/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageTestimonialsReview