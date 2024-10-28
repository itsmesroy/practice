//normal fetch

const [videosData, setvideosData]= useState([]);

const fetchVideos =async()=>{
    try{
        const res= await fetch('https://api.example.com/endpoint1');
        const data =await res.json();
        setvideosData(data);
    }catch(err){
        console.log("Please try agin later");
    }
}
useEffect(()=>{
    fetchVideos();
    },[]
)
return(
    <div>
        videosData.map((video, idx)=(
<div key={idx}>
    <h3>Hi</h3>
    <p>{video.title}</p>
</div>
        ))
    </div>
)