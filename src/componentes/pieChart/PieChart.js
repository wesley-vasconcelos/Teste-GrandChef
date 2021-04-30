import React from 'react'
import { Chart } from "react-google-charts";



const PieChart = () => {
    return(
      <>
        <Chart
          width={'800px'}
          height={'400px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ['Pizza', 'Popularity'],
            ['Promoção de Terça-feira (R$ 150,00)', 10],
            ['Promoção de Segunda-feira (R$ 150,00)', 10],
            ['Taxa de entrega grátis (R$ 300,00)', 80],
          ]}
          options={{
            title: 'Promoções mais utilizadas',
          }}
          rootProps={{ 'data-testid': '7' }}
        />
</>
    )
}

export default PieChart