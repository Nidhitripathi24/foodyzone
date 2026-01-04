import { useEffect, useState } from "react";
import styled from "styled-components";
 export const BASE_URL = "http://localhost:9000/";
import Searchresult from "./componenets/searchresult/Searchresult";


const App = () => {
 const [data, setData] =useState(null);
 const [filterdata , setFilterdata] = useState(null)
 const [loading, setLoading] = useState(false);
 const [error,setError] = useState(null);
 const[selectedBtn , setselectedBtn] = useState("all")
useEffect( ()=>{
  const fetchFooddata = async()=>{
  setLoading(true);
  try {
    const response = await fetch(BASE_URL)

    const json =  await response.json();

     setData(json);
     setFilterdata(json)
     setLoading(false);
  }  catch (error) {
      setError("unable to fetch data")
}

};
fetchFooddata();

}, []
)
console.log(data);
 const searchFood = (e) =>{
  const searchValue = e.target.value;
  console.log(searchValue);
  if(searchValue === ""){
    setFilterdata(null)
  }
const filter = data?.filter((food)=> 
  food.name.toLowerCase().includes(searchValue.toLowerCase())
)
setFilterdata(filter)
 } 

 const filterFood = (type) => {

if(type==="all"){
  setFilterdata(data);
  setselectedBtn("all");
  return
}
const filter = data?.filter((food)=> 
  food.type.toLowerCase().includes(type.toLowerCase())
)
setFilterdata(filter)
setselectedBtn(type)


 }

 const filterbtns =[ 
  {
  name: "All",
  type: "all",
},
 
  {
  name: "Breakfast",
  type: "breakfast",
},
  {
  name: "Lunch",
  type: "lunch",
},
 {
  name: "Dinner",
  type: "dinner",
},
 ]
  if(error) return<div> {error}</div>
  if (loading) return <div>loading</div>
  return( 
<>
  <Container>
   <TopContainer>

    <div className="logo">
      <img src = "/logo.svg" alt="logo"/>

    </div>

    <div className="Search">
      <input  onChange = {searchFood} placeholder="Search Food" />
    </div>
   </TopContainer>

<FilterContainer>

{filterbtns.map((value=>
<Button 
  key ={value.name} onClick={()=> filterFood(value.type)}>
  {value.name}
</Button>
))}



</FilterContainer>




  </Container>
  <Searchresult data={filterdata} BASE_URL={BASE_URL} />

</>
  )
};

export default App;


 export const Container = styled.div`
background-color: #323334;
max-width: 1200px;
margin:0 auto;

`
const TopContainer = styled.div`
height:140px;
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

@media(0 < width < 600px){\
flex-direction:column;
height:60px;

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
cursor: pointer;
&:hover{
background-color: #f22f2f;
}

`