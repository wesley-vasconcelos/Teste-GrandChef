import React from 'react'
import { Chart } from "react-google-charts";



const PieChart = () => {
    return(
      <div >
        <p style={{position:'absolute', zIndex:'1', paddingLeft:'25%'}}>Promoções mais utilizadas</p>
        <Chart
          width={'100%'}
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
            colors: ['#f38933', '#8d4201', '#ef6c00', ]

          }}
          rootProps={{ 'data-testid': '7' }}
        />
</div>
    )
}

export default PieChart