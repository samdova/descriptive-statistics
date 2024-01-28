class DescriptiveStatistics {
    constructor(data, midpoints, frequencies, lowerLimit, cumulativeFrequency, frequency, classHeight) {
        this.data = data;
        this.midpoints = midpoints;
        this.frequencies = frequencies;
        this.lowerLimit = lowerLimit;
        this.cumulativeFrequency = cumulativeFrequency;
        this.frequency = frequency;
        this.classHeight = classHeight;
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

    // Getter for median calculation in ungrouped data
    get calculate_median_ungrp() {
        return this.calcMedianUngrouped();
    }

    // Getter for median calculation in grouped data
    get calculate_median_grp() {
        return this.calcMedianGrouped();
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

    // Method to calculate median for ungrouped data
    calcMedianUngrouped() {
        const sortedData = this.data.sort((a, b) => a - b);
        if (this.n % 2 === 1) {
            return sortedData[(this.n + 1) / 2 - 1];
        } else {
            const mid1 = sortedData[this.n / 2 - 1];
            const mid2 = sortedData[this.n / 2];
            return (mid1 + mid2) / 2;
        }
    }

    // Method to calculate median for grouped data
    calcMedianGrouped() {
        const target = this.n / 2;
        return this.lowerLimit + ((target - this.cumulativeFrequency) / this.frequency) * this.classHeight;
    }

    // Additional methods for mode, etc. can be added here
}

// Example usage:
const data_set = [1, 2, 3, 4, 5, 6, 7];
const midpoints = [1.5, 2.5, 3.5, 4.5, 5.5, 6.5, 7.5];
const frequencies = [2, 1, 2, 1, 1, 3, 5];
const lowerLimit = 2;
const cumulativeFrequency = 4;
const frequency = 2;
const classHeight = 2;

const stats_calculator = new DescriptiveStatistics(data_set, midpoints, frequencies, lowerLimit, cumulativeFrequency, frequency, classHeight);

console.log("Mean (Ungrouped):", stats_calculator.calculate_mean_ungrp);
console.log("Mean (Grouped):", stats_calculator.calculate_mean_grp);
console.log("Median Ungrouped:", stats_calculator.calculate_median_ungrp);
console.log("Median Grouped:", stats_calculator.calculate_median_grp);
