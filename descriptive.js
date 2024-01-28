class DescriptiveStatistics {
    constructor(data, midpoints, frequencies) {
        this.data = data;
        this.midpoints = midpoints;
        this.frequencies = frequencies;
        this.n = data.length;
    }

    // Getter for mean calculation in ungrouped data
    get calculate_mean_ungrp() {
        return this.calcMeanUngrp();
    }

    // Getter for mean calculation in grouped data
    get calculate_mean_grp() {
        return this.calcMeanGrp();
    }

    // Method to calculate mean for ungrouped data
    calcMeanUngrp() {
        return this.data.reduce((sum, value) => sum + value, 0) / this.n;
    }

    // Method to calculate mean for grouped data
    calcMeanGrp() {
        const numerator = this.midpoints.reduce((sum, midpoint, i) => sum + midpoint * this.frequencies[i], 0);
        const denominator = this.frequencies.reduce((sum, frequency) => sum + frequency, 0);
        return numerator / denominator;
    }
}

// Example 
const data_set = [1, 2, 3, 4, 5];
const midpoints = [1.5, 2.5, 3.5, 4.5, 5.5];
const frequencies = [2, 1, 2, 1, 1];
const stats_calculator = new DescriptiveStatistics(data_set, midpoints, frequencies);
console.log("Mean (Ungrouped):", stats_calculator.calculate_mean_ungrp);
console.log("Mean (Grouped):", stats_calculator.calculate_mean_grp);
