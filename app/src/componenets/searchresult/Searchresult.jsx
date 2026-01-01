
import styled from 'styled-components'
import { BASE_URL } from '../../App'
const Searchresult = ({data}) => {

  return (
    <FoodCartContainer> 
      <FoodCards>
           {
            data?.map((food)=>(
                <FoodCard
                key={food.name}
                >  
                 <div className="food_image">  
                 <img src={BASE_URL + food.image}/>
                 </div>
                 <div className='food_info'>
                    <div className='info'>
                        <h3>{food.name}</h3>
                        <p>
                            {food.text}

                        </p>
                    </div>
                 </div>



                </FoodCard>
            ))}
      </FoodCards>
    </FoodCartContainer>
  )
}

export default Searchresult 
const FoodCartContainer = styled.section`
background-image : url("/bg.png");
background-size:cover;
height:calc(100vh - 210px);

`
const FoodCards = styled.div` 
`;
const FoodCard = styled.div` 
`; 