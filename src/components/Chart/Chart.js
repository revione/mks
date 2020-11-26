import React from 'react'
import PropTypes from 'prop-types'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
import styled from 'styled-components'

const Chart = props => {
  const { history, date } = props
  return (
    <Container>
      <DateChart>{date}</DateChart>
      <ContainerChart>
        <ResponsiveContainer width='100%' aspect={4.0 / 1}>
          <LineChart
            data={history}
            margin={{
              top: 5,
              right: 20,
              left: 5,
              bottom: 5
            }}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='day' tickLine={false} />
            <YAxis tickLine={false} width={30} />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type='monotone'
              dataKey='followers'
              dot={{ fill: 'transparent', strokeWidth: 2 }}
              stroke='#8884d8'
              activeDot={{ fill: '#8884d8', r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ContainerChart>
    </Container>
  )
}

Chart.propTypes = {
  history: PropTypes.array,
  date: PropTypes.string
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <ContainerTooltip>
        <TextTooltip>{`${payload[0].payload.followers} new followers`}</TextTooltip>
      </ContainerTooltip>
    )
  }

  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.array,
  label: PropTypes.string
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const ContainerChart = styled.div`
  padding: 0 4% 2% 5%;

  @media screen and (max-width: 600px) {
    padding: 0 5% 7% 2%;
  }

  text {
    fill: ${({ theme }) => theme.textFirst};
    font-size: 0.7em;
  }
`

const DateChart = styled.div`
  margin-bottom: 20px;
  padding: 0 6%;
  padding-top: 3%;
  color: ${({ theme }) => theme.textFirst};
`

const ContainerTooltip = styled.div`
  border: 1px solid ${({ theme }) => theme.chart};
  background: ${({ theme }) => theme.background};
  margin: 0;
  padding: 0;
`
const TextTooltip = styled.p`
  color: ${({ theme }) => theme.chart};
  padding: 5px 15px;
  margin: 0;
  font-size: 0.8em;
`
export default Chart
