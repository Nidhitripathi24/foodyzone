import { useEffect, useState } from "react";
import styled from "styled-components";
 export const BASE_URL = "http://localhost:9000/";
import Searchresult from "./componenets/searchresult/Searchresult";


const App = () => {
 const [data, setData] =useState(null);
 const [loading, setLoading] = useState(false);
 const [error,setError] = useState(null);
useEffect( ()=>{
  const fetchFooddata = async()=>{
  setLoading(true);
  try {
    const response = await fetch(BASE_URL)

    const json =  await response.json();

     setData(json);
     setLoading(false);
  }  catch (error) {
      setError("unable to fetch data")
}

};
fetchFooddata();

}, []
)
console.log(data);
// const temp = [
  
//     {
//         "name": "Boilded Egg",
//         "price": 10,
//         "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//         "image": "/images/egg.png",
//         "type": "breakfast"
//     },
//   ];

  if(error) return<div> {error}</div>
  if (loading) return <div>loading</div>
  return( 
  <Container>
   <TopContainer>

    <div className="logo">
      <img src = "/logo.svg" alt="logo"/>

    </div>

    <div className="Search">
      <input placeholder="Search Food" />
    </div>
   </TopContainer>

<FilterContainer>
<Button> All </Button>
<Button> Breakfast </Button>
<Button> lunch </Button>
<Button> Dinner </Button>


</FilterContainer>
<Searchresult data = {data}/>



  </Container>
  )
};

export default App;


const Container = styled.div`
background-color: #323334;
max-width: 1200px;
margin:0 auto;

`
const TopContainer = styled.div`
min-height:140px;
display:flex;
justify-content: space-between;
padding: 16px;
align-items: center;


.Search{
input{
background-color: transparent;
border:1px solid red;
color:white;
border-radius:5px;
height:40px;
font-size:16px;
padding: 0 10px;


}
}
`


const FilterContainer = styled.div`
display: flex;
justify-content: center;
gap: 12px;
padding: 40px;

`;

 export const Button = styled.button`
background-color: #ff4343;
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;

`

