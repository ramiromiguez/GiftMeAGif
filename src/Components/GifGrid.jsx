import { GifGridItem } from "../views/GifGridItem";
import '../../src/index.css'
import { useFetchGIfs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category, limit }) => {


    const { data, loading } = useFetchGIfs(category, limit)

    return (
        <>
            {category && <h3 className="mb-5 mt-2 ml-2 font-medium uppercase text-4xl">{category}:</h3>}
            {loading && `Cargando...`}
            <div className="flex flex-row flex-wrap gap-4">
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }
            </div>
        </>
    );
};