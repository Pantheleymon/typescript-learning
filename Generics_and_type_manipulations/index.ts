function processingData<T, S>(data: T, options: S): string {
    switch (typeof data) {
        case "string":
            return `${data}, speed: ${options}`;
        case "number":
            return `${data.toFixed()}, speed: ${options}`
        default:
            return "Mot valid"
    }
}

let res1 = processingData(1, "fast");
let res2 = processingData("1", "slow");

const res3 = processingData<number, string>(10, "slow");

function processing<T>(data: T): T {
    return data;
}

interface ProcessingFn {
    
}

let newFunc: <T>(data: T) => T = processing;

interface DataSaver {
    processing: typeof processing;
}

// interface DataSaver {
//     processing: <T>(data: T) => T
// }

const saver: DataSaver = {
    // processing(data) {
    //     return data;
    // }
    processing: <T>(data: T) => {
        return data
    }

    // processing: processing
}