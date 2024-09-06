import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

function RadarChart( { data, kind }) {

  const svgRef = useRef();

  useEffect(() => {
    const width = 350;
    const height = 310;
    const radius = Math.min(width, height) / 2 - 40; // Rayon de l'hexagone extérieur
    const levels = 5; // Nombre de niveaux concentriques

    // Dynamique : Extraire les noms des catégories et les valeurs depuis les props
    const category = data.map(d => kind[d.kind]);
    const values = data.map(d => d.value / 240); // Normaliser les valeurs entre 0 et 1



    const svg = d3.select(svgRef.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("width", width)
      .attr("height", height)
      .style("background-color", "#282D30")
      .style("border-radius", "10px")
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Tracer les hexagones concentriques
    for (let level = 0; level <= levels; level++) {
      const r = (radius / levels) * level;
      const angleStep = (Math.PI * 2) / category.length;

      // Tracer un hexagone
      const hexagon = d3.line()
        .x((d, i) => r * Math.cos(i * angleStep - Math.PI / 2)) // Math.PI / 2 pour orienter vers le haut
        .y((d, i) => r * Math.sin(i * angleStep - Math.PI / 2))
        .curve(d3.curveLinearClosed);

      svg.append("path")
        .datum(category)
        .attr("d", hexagon)
        .attr("fill", "none")
        .attr("stroke", "white")
        .attr("stroke-width", 1);
    }

    // Positionner les labels aux sommets de l'hexagone
    category.forEach((categorie, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2; // Calculer l'angle pour chaque catégorie
      const x = radius * 1.3 * Math.cos(angle); // Multiplier par 1.1 pour éloigner un peu du bord
      const y = radius * 1.1 * Math.sin(angle); // Multiplier par 1.1 pour éloigner un peu du bord

      svg.append("text")
        .attr("x", x)
        .attr("y", y)
        .attr("dy", "0.35em") // Alignement vertical
        .attr("text-anchor", "middle") // Centrer le texte
        .style("fill", "white")
        .style("text-transform", "capitalize")
        .style("font-size", "16px")
        .text(categorie);
    });

    // Tracé de la ligne de données (exemple de données statiques)
    const angleStep = (Math.PI * 2) / category.length;

    const radarLine = d3.line()
      .x((d, i) => radius * d * Math.cos(i * angleStep - Math.PI / 2))
      .y((d, i) => radius * d * Math.sin(i * angleStep - Math.PI / 2))
      .curve(d3.curveLinearClosed);

    svg.append("path")
      .datum(values)
      .attr("d", radarLine)
      .attr("fill", "#E60000")
      .attr("opacity", "0.5")
      .attr("stroke-width", 0.5);

  }, [data, kind]);

  return <svg ref={svgRef}></svg>;
};

export default RadarChart;
