// a) Função swap
const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

// b) Função shuffle
const shuffle = (arr, times) => {
    for (let i = 0; i < times; i++) {
        let j = Math.floor(Math.random() * arr.length);
        let k = Math.floor(Math.random() * arr.length);
        swap(arr, j, k);
    }
};

// c) Função bubble_sort
const bubble_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};

// d) Função selection_sort
const selection_sort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    return arr;
};

// e) Função particionamento
const partition = (arr, low, high) => {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// f) Função quick_sort
const quick_sort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let pi = partition(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
    return arr;
};
