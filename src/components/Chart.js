
import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import * as d3 from "d3"


const Chart = ({ fetchedDocs }) => {
  const data = fetchedDocs
  const svgRef = useRef()

  const highestCost = data.reduce((acc, each) => {
    console.log(each.cost)
    return Number(each.cost) > acc ? Number(each.cost) : acc
  }, 0)

  useEffect(() => {
    // svg container
    const w = 480;
    const h = 401;

    const svgEl = d3.select(svgRef.current);
    svgEl.selectAll('*').remove();

    const svg = d3.select(svgRef.current)
      .attr('width', w)
      .attr('height', h)
      .style('overflow', 'visible')
      .style('margin-top', '10px')
      .style('margin-bottom', '20px')
      .style('margin-left', '40px')
      .style('margin-right', '50px')

    // scaling
    const xScale = d3.scaleBand()
      .domain(d3.range(data.length))
      // .domain(data.map((val, i) => i))
      .range([0, w])
      .padding(0.1) // this is space between bars

    const yScale = d3.scaleLinear()
      .domain([0, highestCost]) // this is the highest number on the legend scale on the left
      .range([h, 0])

    // axis
    const xAxis = d3.axisBottom(xScale)
      .ticks(data.length)
    const yAxis = d3.axisLeft(yScale)
      .ticks(5)

    svg.append('g')
      .call(xAxis)
      // .attr('color', "white")
      .attr('transform', `translate(0, ${h})`)
      .style("font-size", "17px")
      .join('rect')
    svg.append('g')
      .call(yAxis)
      // .attr('color', "white")
      .style("font-size", "17px")

    // draw data
    svg.selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (e, i) => xScale(i))
      .attr('y', (d) => yScale(d.cost))
      .attr('width', xScale.bandwidth())
      .attr('height', d => yScale(0) - yScale(d.cost))
      .attr('fill', "#99DD99")

    svg.node()

  }, [data, highestCost])

  return (
    <ChartDiv id='d3div'>
      <svg ref={svgRef} />
    </ChartDiv>
  )
}

const ChartDiv = styled.div`
  align-self: start;
  border-radius: 9px;
  background-color: ${p => p.theme.inputBg};
  margin-top: 20px;
  width: 560px;
  max-width: 800px;
  color: ${p => p.theme.textCol};
  box-shadow: 0 2px 1px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsla(0, 0%, 100%, .22);
  padding: 20px;
  text-shadow: ${p=>p.theme.textShadow1px};
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export default Chart