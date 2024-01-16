import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";


const googleMapsApiKey = 'AIzaSyBVfkvtPKVtEkV2Y3u3hrgHMAIbB_Y3Q04';



const map = () => {

    const {isLoaded}  = useLoadScript({googleMapsApiKey})


    return (
        <div className="">
            {!isLoaded ? (<h1>Loading..</h1>): (
                <GoogleMap>
                    <Marker position={{lat:18.52043, lng: 73.856743}}/>
                </GoogleMap>
            )}
        </div>
    )
}