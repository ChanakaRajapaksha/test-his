const UserCard = ({ type }) => {
    return (
        <div className="p-4 rounded-2xl odd:bg-[#CFCEFF] even:bg-[#FAE27C] flex-1 min-w-[130px]">
            <div className="flex items-center justify-between">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-400">
                    2024/9/29
                </span>
            </div>
            <h1 className="my-4 text-2xl font-semibold">1,234</h1>
            <h2 className="capitalize text-sm font-medium text-gray-500">{type}s</h2>
        </div>
    )
};

export default UserCard;