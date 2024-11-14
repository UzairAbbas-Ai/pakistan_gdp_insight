
const gdpData = {
    "2023-24": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 24.02, 17.78, 58.20, 8.46, 14.69, 0.56, 0.31, 1.64, 11.96, 1.97, 2.2,
    18.3, 10.60, 1.48, 2.82, 1.48, 5.84, 4.02, 3.08, 1.74,8.85]
    },
    "2022-23": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 23.15, 18.44, 58.41, 7.86, 14.42, 0.56, 0.32, 1.63, 11.89, 2.63, 2.29, 18.15, 10.66, 1.45, 2.88, 1.7, 5.77, 4.45, 2.91, 1.69, 8.76]
    },
    "2021-22": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 22.6, 19.11, 58.29, 7.94, 13.87, 0.48, 0.32, 1.68, 12.52, 2.39, 2.52, 18.86, 10.25, 1.39, 2.9, 1.88, 5.55, 4.77, 2.76, 1.55, 8.39]

    },
     "2020-21": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 23.03, 18.96, 58.01, 7.79, 14.4, 0.5, 0.33, 1.91, 11.99, 2.43, 2.63, 18.17, 10.42, 1.42, 2.61, 1.87, 5.69, 4.98, 2.77, 1.6, 8.5]

    },
     "2019-20": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 23.53, 18.53, 57.97, 7.78, 14.88, 0.51, 0.35, 1.98, 11.48, 2.36, 2.72, 17.34, 10.51, 1.44, 2.51, 1.87, 5.8, 5.29, 2.96, 1.64, 8.56]

    },
     "2018-19": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 22.43, 19.48, 58.09, 7.25, 14.34, 0.49, 0.34, 2.12, 12.33, 2.25, 2.78, 18.13, 11.43, 1.37, 2.19, 1.9, 5.54, 5.09, 2.84, 1.53, 8.07]

    },
    "Visualize": {
        labels: [
            "Pakistan GDP Shares", "Agriculture, Forestry, and Fishing", "Industrial Activities", "Services",
            "Crops", "Livestock", "Forestry", "Fishing",
            "Mining and Quarrying", "Manufacturing", "Electricity, Gas and Water supply", "Construction",
            "Wholesale & Retail Trade", "Transportation & Storage", "Accommodation and Food Services",
            "Information and Communication", "Financial and Insurance Activities", "Real Estate Activities",
            "Public Administration and Social Security", "Education", "Human Health and Social Work Activities",
            "Other Private Services"
        ],
        source: [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
        target: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
        values: [ 50, 30, 20, 20, 8, 3, 20, 5, 6, 8, 11, 1.5, 2, 4, 1, 3, 2, 1, 0.5, 2, 3]

    },
    
};

function drawSankey(year) {
 
    if (!gdpData[year]) {
        console.error(`Data for the year ${year} is missing.`);
        return;
    }

    const data = gdpData[year];
    const { labels, source, target, values } = data;

    const fig = {
        data: [{
            type: "sankey",
            orientation: "h",
            node: {
                pad: 15,
                thickness: 25,
                line: { color: "black", width: 0.5 },
                label: labels
            },
            link: { source, target, value: values }
        }],
        layout: {
            title: `Pakistan GDP Shares (${year})`,
            font: { size: 18 },
            height: 600,
            width: 900
        }
    };

    Plotly.newPlot("plot", fig.data, fig.layout);
}

function updateVisualization() {
    const year = document.getElementById("year").value;
    drawSankey(year);
}

window.onload = () => drawSankey("2023-24");
