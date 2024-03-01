const arr: Array<number> = [1, 2 ,3];
const arr1: number[] = [1, 2 ,3];

const roarr: ReadonlyArray<string> = ['dsdsdsd'];

interface IState {
    data: {
        name: string;
    },
    tag?: string
}

function action(state: Readonly<IState>) {
    // state.data = 'abc';
}

const state: Partial<IState> = {
    data: {
        name: 'abc'
    }
}

const stateReq: Required<IState> = {
    data: {
        name: 'abc'
    },
    tag: 'cba'
}