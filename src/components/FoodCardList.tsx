import type { MainData } from '../context/ThemeContext';
import FoodCard from '../components/FoodCard';

interface FoodCardListProps {
  type?: string
  data?: []
}

export default function FoodCardList({ type, data }: FoodCardListProps) {
  let dummyData = [['default1', 'default2'], ['default1', 'default2'], ['default1', 'default2']]
  const FoodCardListStyle = {
    display: 'flex',
    'flex-direction': 'row',
    alignItems: 'flex-start',
    gap: '40px',
    alignSelf: 'stretch',
  }
  return (
    <>
      <div style={FoodCardListStyle} className='flex-row'>
        {dummyData.map((data, index) => {
          return (
            <FoodCard key={index} menu_name={data[0]} cardtype={type} />
          )
        })}
      </div>
    </>
  )
}
