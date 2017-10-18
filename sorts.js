'use strict'

var A = [5, 3, 9, 6, 1, 0, 1, 8, 2];

/**
 * Сортировка пузырьком
 * сложность O(n^2)
 * @param {*} array 
 */
var bubbleSort = function(array) {
        for (var i = 0; i < array.length; i++) {
            var f = 0;

            for (var j = 0; j < array.length - i; j++) {

                if (array[j] > array[j + 1]) {
                    var temp;

                    temp = array[j + 1];
                    array[j + 1] = array[j];
                    array[j] = temp;
                    f = 1;
                }
            }
        }

        console.log("bubbleSort result:", array);
    }
    /**
     * Сортировка смешиванием
     * сложность O(n^2)
     * @param {*} array 
     */
var cocktailSort = function(array) {
    var left = 0,
        right = array.length - 1;

    while (left <= right) {
        for (var i = left; i < right; i++) {
            if (array[i] > array[i + 1]) {
                var temp = array[i];

                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
        right--;

        for (var i = right; i > left; i--) {
            if (array[i] < array[i - 1]) {
                var temp = array[i];

                array[i] = array[i - 1];
                array[i - 1] = temp;
            }
        }
        left++;
        s
    }

    console.log("cocktailSort result:", array);
}


var mergeSort = function(array) {
    console.log("mergeSort result:", array);
}
bubbleSort(A);
cocktailSort(A);