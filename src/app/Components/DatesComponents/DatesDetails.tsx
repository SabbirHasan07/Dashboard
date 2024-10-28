
interface ItemProps {
    item: { name: string };
}
const DateDetails:React.FC<ItemProps>=({item})=>{
    return(
        <div>
            <div className="font-medium  px-4 py-2 ">
                {item?.name}
            </div>
        </div>
    )
}
export default DateDetails;