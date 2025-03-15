import React from "react";

interface FabricProps {
    width?: number | string,
    height?: number | string,
}

const FabricIcon: React.FC<FabricProps> = ({width= 50, height= 50}) => {
    return(
        <svg fill="#ffffff" height={width} width={height} version="1.1" id="Layer_1" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M391.533-1c-53.447,0-97.665,41.5-102.039,93.867H16.067V511h375.467c56.32,0,102.4-46.08,102.4-102.4V101.4 C493.933,45.08,447.853-1,391.533-1z M33.133,174.424l104.821-64.49h59.894L33.133,206.02V174.424z M289.133,278.194 l-31.129-7.781l31.129-17.787V278.194z M289.133,232.97l-55.058,31.461l-44.863-11.215l99.922-59.972V232.97z M289.133,173.341 l-123.334,74.023l-44.986-11.245l168.32-102.498V173.341z M275.388,292.349l-49.633,29.499L33.133,265.667v-33.875 L275.388,292.349z M94.241,400.013l-61.108-22.915v-42.25l111.906,34.973L94.241,400.013z M33.133,316.967v-33.522 l172.557,50.329l-42.192,25.077l0.325-1.04L33.133,316.967z M33.133,395.325l42.305,15.864l-42.305,25.144V395.325z M33.133,456.185l256-152.153v39.999l-256,148.51V456.185z M289.133,363.762v39.906l-155.887,90.265H64.745L289.133,363.762z M289.133,113.639L97.549,230.303l-50.522-12.629L231.72,109.933h57.414V113.639z M105.385,109.933l-72.252,44.452v-44.452 H105.385z M167.305,493.933l122.827-71.121c4.156,29.594,21.081,55.232,44.984,71.121H167.305z M391.533,493.933 c-46.933,0-85.333-38.4-85.333-85.333s38.4-85.333,85.333-85.333s85.333,38.4,85.333,85.333S438.467,493.933,391.533,493.933z M391.533,306.2c-35.513,0-66.949,18.325-85.333,45.983V101.4c0-46.933,38.4-85.333,85.333-85.333s85.333,38.4,85.333,85.333 v250.783C458.482,324.525,427.046,306.2,391.533,306.2z"></path> <path d="M391.533,348.867c-33.28,0-59.733,26.453-59.733,59.733s26.453,59.733,59.733,59.733s59.733-26.453,59.733-59.733 S424.813,348.867,391.533,348.867z M391.533,451.267c-23.893,0-42.667-18.773-42.667-42.667 c0-23.893,18.773-42.667,42.667-42.667S434.2,384.707,434.2,408.6C434.2,432.493,415.427,451.267,391.533,451.267z"></path> </g> </g> </g> </g></svg>
    )
};

export default FabricIcon;