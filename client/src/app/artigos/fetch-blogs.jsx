import config from "./config";



const fetchBlogs = async (params) =>{
    const reqOptions={
        headers: {
            Authorization: `Bearer 01fad8aa2a3657e42a1280d046e0907175bc24bb915c08487c5a5e5c15e583f3c18b269c2e8ad79bdefedea631645edc835aa8fc55d5586d54bfe5da1b8f73fcaf891e419a92628164f20dfbd04b3f4afc5ec3ab54979e28eb554f5aa279f0a238501907db8049d0232b3246a1cc6d8389afe059d93cedfb094b93bfaaf38d9f`
        }
    }
    const request =  await fetch(`${config.api}/api/blogs?populate=*${params}`, reqOptions);
    const response = await request.json()
    return response
}

export default fetchBlogs