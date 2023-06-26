//our-domain.com/news/something-important
import {useRouter} from 'next/router';

function Details (){

    const router=useRouter();
    const newsId=router.query.newsId;
    

    //send request to backend API
    //to fetch the news   item newsId  
    return <h1>details</h1>
    
}
    export default Details;