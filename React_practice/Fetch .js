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

//fetch with promise

const apiUrls=['https://api.example.com/endpoint1',
            'https://api.example.com/endpoint2',
            'https://api.example.com/endpoint3'
        ];

const fetchData = async(url) =>{
  
        const res= await fetch(url);
        const data= await res.json();
        return data;
}
Promise.all(apiUrls.map(fetchData))
.then((results)=>{
    console.log(results);
})
.catch((err) =>{
    console.log("Try again later")
})

//fetch with Promise.allSettled()

const apiUrl=[
            'https://api.example.com/endpoint1',
            'https://api.example.com/endpoint2',
            'https://api.example.com/endpoint3'
];
const fetchDatas = async(url)=>{
    const res= await fetch(url);
    const data= await res.json();
    return data;
}
Promise.all(apiUrl(fetchDatas))
.then((results)=>{
    results.array.forEach((result,index) => {
        if(result.status=='fulfilled'){
            console.log(`Result from ${apiUrl[index]}:`,result.value);
        }else{
            console.log(`Error from ${apiUrl[index]}:`,result.value);
        }
    });
})
.catch((err)=>{
    console.log(err);
})