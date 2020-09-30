export default function rootReducer(state, {type, payload}) {
    switch (type) {
        case 'NEW':
            return 'NEW';
        case 'OLD':
            return 'OLD';
        default :
            return state;
    }
}
