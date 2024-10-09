
interface Props{
    category?: string
}


const colorMap:any = {
    'Sport': 'text-green-500 bg-green-100',
    'Sponsored': "text-rose-500 bg-rose-100",
    "Business": "text-yellow-500 bg-yellow-100",
    "Politics": "text-red-500 bg-red-100",
    "Metro": "text-teal-500 bg-teal-100",
}


const Category:React.FC<Props>=({category})=>{
    return (
        category?(
        <p className={`${colorMap[category] ?? "text-[#4B6BFB] bg-blue-100"} text-sm dark:bg-[#242535] w-fit font-medium rounded-lg py-2 px-3`}>
            {category}
          </p>
        ): null
    )
}

export default Category;