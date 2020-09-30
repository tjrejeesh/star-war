const initialState = {
    loading: false,
    results: [],
    destination1: '',
    destination2: '',
    destination3: '',
    destination4: '',
    vehicle_names: []
};

let vehicle_list = [];

export default function searchReducer(state, action) {
    switch (action.type) {
        case 'RESET':
            vehicle_list = [];
            initialState.results = [];
            initialState.vehicle_names = [];
            return initialState;

        case 'CLEAN_QUERY': return initialState;

        case 'START_SEARCH_1':
            return { ...state, loading: true, destination1: action.data ? action.data : '' };
        case 'FINISH_SEARCH_1':
            return { ...state, loading: false, results: action.results };
        case 'UPDATE_SELECTION_1':
            return { ...state, destination1: action.data ? action.data : '' };
        case 'VEHICLE_SPEED_1':
            return { ...state, speed1: action.speed ? action.speed : 0 };

        case 'START_SEARCH_2':
            return { ...state, loading: true, destination2: action.data ? action.data : '' };
        case 'FINISH_SEARCH_2':
            return { ...state, loading: false, results: action.results };
        case 'UPDATE_SELECTION_2':
            return { ...state, destination2: action.data ? action.data : '' };
        case 'VEHICLE_SPEED_2':
            return { ...state, speed2: action.speed ? action.speed : 0 };


        case 'START_SEARCH_3':
            return { ...state, loading: true, destination3: action.data ? action.data : '' };
        case 'FINISH_SEARCH_3':
            return { ...state, loading: false, results: action.results };
        case 'UPDATE_SELECTION_3':
            return { ...state, destination3: action.data ? action.data : '' };
        case 'VEHICLE_SPEED_3':
            return { ...state, speed3: action.speed ? action.speed : 0 };


        case 'START_SEARCH_4':
            return { ...state, loading: true, destination4: action.data ? action.data : '' };
        case 'FINISH_SEARCH_4':
            return { ...state, loading: false, results: action.results };
        case 'UPDATE_SELECTION_4':
            return { ...state, destination4: action.data ? action.data : '' };
        case 'VEHICLE_SPEED_4':
            return { ...state, speed4: action.speed ? action.speed : 0 };

        case 'VEHICLE_NAMES':
            vehicle_list = [...vehicle_list, action.vehicle_name];
            return { ...state, vehicle_names: vehicle_list };

        default: return '0'
    }
}
