
import GlMap from '../Layouts/GlMap';
import SearchFilter from '../Layouts/SearchFilter';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
const Search = () => {

    return ( <>
    <div className="bg-[#f2f2f2] md:h-[100vh]">
    <SearchFilter/>

    <GlMap/>
           
    </div>
    
    </> );
}
 
export default Search;