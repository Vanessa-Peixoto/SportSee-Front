import { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function PieChart( { score } ) {

    //Create a reference for the svg element
    const svgRef = useRef();

    useEffect(() => {

        //Dimension
        const width = 350;
        const height = Math.min(300, width / 2);
        const outerRadius = height / 2 - 10;
        const innerRadius = outerRadius * 0.85;
        const tau = 2 * Math.PI;

        if (svgRef.current) {
            const svg = d3.select(svgRef.current)
                .attr("viewBox", [0, 0, width, height]);

            //Clear previous content
            svg.selectAll("*").remove();

            //Add svg title
            svg.append("text")
                .attr("x", 100)
                .attr("y", 30)
                .attr("text-anchor", "middle")
                .attr("font-size", "15px")
                .attr("font-weight", "500")
                .attr("fill", "#000")
                .text("Score");

            const g = svg.append("g").attr("transform", `translate(${width / 2},${height / 2})`);

            const arc = d3.arc()
                .innerRadius(innerRadius)
                .outerRadius(outerRadius)
                .startAngle(0)
                .cornerRadius(10);

            const background = g.append("path")
                .datum({endAngle: tau})
                .style("fill", "white")
                .attr("d", arc);

            //Create variable which retrieve prop
            const percentage = score;
            const foreground = g.append("path")
                .datum({endAngle: 0})
                .style("fill", "red")
                .attr("d", arc);

            foreground.transition()
                .duration(1000)
                .attrTween("d", arcTween(percentage * tau));

            //Add text in the middle
            const textGroup = g.append("g")
                .attr("text-anchor", "middle")
                .attr("dy", "-0.1em");

            textGroup.append("text")
                .attr("class", "percentage")
                .text(`${Math.round(percentage * 100)}%`)
                .attr("font-size", "26px")
                .attr("font-weight", "700")
                .attr("fill", "#000");

            textGroup.append("text")
                .attr("class", "objectif")
                .attr("dy", "1.5em")
                .text("de votre objectif")
                .attr("font-size", "1em")
                .attr("font-weight", "500")
                .attr("fill", "#74798C");

            //Function animate transition
            function arcTween(newAngle) {
                return function(d) {
                    const interpolate = d3.interpolate(d.endAngle, newAngle);
                    return function(t) {
                        d.endAngle = interpolate(t);
                        return arc(d);
                    };
                };
            }
        }
    }, [score]); 
    return <svg ref={svgRef}/>;
}

export default PieChart;
