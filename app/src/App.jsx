import { useState } from "react";
import styled from "styled-components";
const BASE_URL = "http://localhost:9000/";



const App = () => {
 const [data, setData] =useState();

const fetchFooddata = async()=>{

const response = await fetch(BASE_URL)

const json = response.json
console.log(json);

};

fetchFooddata

  return 
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
<FoodCartContainer>
  <FoodCard>

  </FoodCard>
</FoodCartContainer>


  </Container>;
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

const Button = styled.button`
background-color: #ff4343;
border-radius: 5px;
padding: 6px 12px;
border: none;
color: white;

`

const FoodCartContainer = styled.section`
background-image : url("/bg.png");
background-size:cover;
height:calc(100vh - 210px);

`
const FoodCard = styled.div``