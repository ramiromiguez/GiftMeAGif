import { GifGridItem } from "./GifGridItem";
import '../../src/index.css'
import { useFetchGIfs } from "../hooks/useFetchGifs";



export const GifGrid = ({ category }) => {


    const { data, loading } = useFetchGIfs(category)

    return (
        <>
            <h3 className="text-center mb-5">{category}</h3>
            {loading && `Cargando...`}

            <div className="flex flex-row flex-wrap gap-4">
                {
                    data.map(img => (
                        <GifGridItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    );
};