import { CLIENT } from '../constant';
import trpFilters from './trp';

const defaultTemplate = [{ 'match_all': {} }];

export const clientTemplate = (client: any) => {
    let clientFilters = [];
    switch (client) {
        case CLIENT.TRP:
            clientFilters = trpFilters;
            break;
        default:
            clientFilters = defaultTemplate;
    }
    return clientFilters;
};
