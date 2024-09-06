import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data }) => {
    const svgRef = useRef();

    useEffect(() => {

        const data = [
            { day: 'L', sessionLength: 30 },
            { day: 'M', sessionLength: 45 },
            { day: 'M', sessionLength: 60 },
            { day: 'J', sessionLength: 50 },
            { day: 'V', sessionLength: 68 },
            { day: 'S', sessionLength: 35 },
            { day: 'D', sessionLength: 20 }
          ];
          
        const width = 258;
        const height = 260;
        const margin = { top: 20, right: 20, bottom: 20, left: 20 };

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background-color", "red")  // Fond rouge
            .style("border-radius", "10px")   // Bords arrondis
            .style("padding", "20px");

        // Effacer le contenu précédent
        svg.selectAll("*").remove();

        // Définir les échelles X et Y
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.day))  // Les jours de la semaine
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.sessionLength)])
            .range([height - margin.bottom, margin.top]);

        // Définir la courbe lissée
        const line = d3.line()
            .x(d => xScale(d.day) + xScale.bandwidth() / 2)
            .y(d => yScale(d.sessionLength))
            .curve(d3.curveCatmullRom);

        // Ajouter la ligne
        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "white")
            .attr("stroke-width", 2)
            .attr("d", line);

        // Ajouter les points sur la ligne
        svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => xScale(d.day) + xScale.bandwidth() / 2)
            .attr("cy", d => yScale(d.sessionLength))
            .attr("r", 4)
            .attr("fill", "white");

        // Ajouter un point spécifique avec étiquette (par exemple, pour le vendredi)
        const highlightedData = data.find(d => d.day === "V");
        if (highlightedData) {
            svg.append("circle")
                .attr("cx", xScale(highlightedData.day) + xScale.bandwidth() / 2)
                .attr("cy", yScale(highlightedData.sessionLength))
                .attr("r", 6)
                .attr("fill", "white");

            svg.append("rect")
                .attr("x", xScale(highlightedData.day) + 10)
                .attr("y", yScale(highlightedData.sessionLength) - 25)
                .attr("width", 40)
                .attr("height", 20)
                .attr("fill", "white");

            svg.append("text")
                .attr("x", xScale(highlightedData.day) + 20)
                .attr("y", yScale(highlightedData.sessionLength) - 10)
                .text(`${highlightedData.sessionLength} min`)
                .attr("fill", "black");
        }

        // Ajouter les jours de la semaine en bas
        svg.append("g")
            .selectAll("text")
            .data(data)
            .enter()
            .append("text")
            .attr("x", d => xScale(d.day) + xScale.bandwidth() / 2)
            .attr("y", height - 5)
            .attr("text-anchor", "middle")
            .text(d => d.day)
            .attr("fill", "white");

        // Ajouter le texte "Durée moyenne des sessions"
        svg.append("text")
            .attr("x", margin.left)
            .attr("y", margin.top)
            .text("Durée moyenne des sessions")
            .attr("fill", "rgba(255, 255, 255, 0.7)")
            .attr("font-size", "16px")
            .attr("font-weight", "bold");

    }, [data]);

    return <svg ref={svgRef}></svg>;
};

export default LineChart;
