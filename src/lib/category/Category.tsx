
interface Props{
    category: string
}
const Category:React.FC<Props>=({category})=>{
    return (
        <p className="text-[#4B6BFB] text-sm bg-blue-50 dark:bg-[#242535] w-fit font-medium rounded-lg py-2 px-3">
            {category}
          </p>
    )
}

export default Category;